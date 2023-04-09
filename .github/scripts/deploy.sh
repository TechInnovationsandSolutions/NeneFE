#!/bin/bash
#### Enter into NeneFE directory
cd /home/ubuntu/NeneFE
### Kill all running processes
pm2 kill
##remove previous .next file
sudo rm -rf /home/ubuntu/NeneFE/.next
##stop service
sudo systemctl stop NeneFE.service
##install and deploy new update
npm install
pm2 start "npm run  dev" --name "NeneFE"
