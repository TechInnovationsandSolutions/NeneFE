#1. Create custom vpc
resource "aws_vpc" "prod_env" {
  cidr_block           = "10.123.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "Nene-prod-vpc"
  }
}

#2. Create subnet
resource "aws_subnet" "prod_public-subnet1" {
  vpc_id                  = aws_vpc.prod_env.id
  cidr_block              = "10.123.0.0/20"
  map_public_ip_on_launch = true
  availability_zone       = data.aws_availability_zones.azs.names[0] //First AZ

  tags = {
    Name = "Nene-public-subnet1"
  }
}
resource "aws_subnet" "prod_public-subnet2" {
  vpc_id                  = aws_vpc.prod_env.id
  cidr_block              = "10.123.16.0/20"
  map_public_ip_on_launch = true
  availability_zone       = data.aws_availability_zones.azs.names[1] //Second AZ

  tags = {
    Name = "Nene-public-subnet2"
  }
}

resource "aws_subnet" "prod_private_subnet" {
  vpc_id                  = aws_vpc.prod_env.id
  cidr_block              = "10.123.128.0/20"
  map_public_ip_on_launch = false
  availability_zone       = data.aws_availability_zones.azs.names[2] //Third AZ
  tags = {
    Name = "Nene-private-subnet"
  }
}


# Create IGW
resource "aws_internet_gateway" "nene-gw" {
  vpc_id = aws_vpc.prod_env.id

  tags = {
    Name = "Nene-IGW"
  }

}

#Create Route Table
resource "aws_route_table" "nene-rt" {
  vpc_id = aws_vpc.prod_env.id

  tags = {
    Name = "Nene-Route_table"
  }
}
resource "aws_route" "default-route" {
  route_table_id         = aws_route_table.nene-rt.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.nene-gw.id
}

resource "aws_route_table_association" "nene-rt-assoc1" {
  route_table_id = aws_route_table.nene-rt.id
  subnet_id      = aws_subnet.prod_public-subnet1.id
}
resource "aws_route_table_association" "nene-rt-assoc2" {
  route_table_id = aws_route_table.nene-rt.id
  subnet_id      = aws_subnet.prod_public-subnet2.id
}


# Create Security Group
resource "aws_security_group" "main_sg" {
  name        = "Nene-SG"
  description = "Nene-security_group"
  vpc_id      = aws_vpc.prod_env.id
  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


resource "aws_key_pair" "nene_auth" {
  key_name   = "Nene-Key-Pair"
  public_key = file("~/.ssh/id_ed25519.pub")
}


resource "aws_instance" "bastion_server" {
  ami                    = data.aws_ami.server_ami.id
  instance_type          = "t3.medium"
  key_name               = aws_key_pair.nene_auth.id
  vpc_security_group_ids = [aws_security_group.main_sg.id]
  subnet_id              = aws_subnet.prod_public-subnet1.id
  user_data              = file("userdata.tpl")

  root_block_device {
    volume_size = 20
  }

  tags = {
    Name = "bastion/Ctrl_server"
  }

  provisioner "local-exec" {
    command =  templatefile("windows-ssh-config.tpl", {
      hostname = self.public_ip 
      user = "ubuntu"
      identityfile = "~/.ssh/id_ed25519"
    })
    interpreter = ["powershell", "-Command"]
  }
}