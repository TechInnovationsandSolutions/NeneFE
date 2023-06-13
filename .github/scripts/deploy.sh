#!/bin/bash
#### Enter into NeneFE directory

### Kill all running processes
pm2 kill
##remove previous .next file
sudo rm -rf /home/ubuntu/NeneFE/.next
##stop service
sudo systemctl stop NeneFE.service
##install and deploy new update
npm install
pm2 start "npm run  dev" --name "NeneFE"


#!/bin/bash

# Get the process ID of the Node.js server
PID=$(ps -ef | grep node | grep -v grep | awk '{print $2}')

# If the server is running, stop it
if [ -n "$PID" ]; then
  echo "Stopping Node.js server (PID $PID)..."
  kill $PID
  sleep 1
fi

# Start the server again
echo "Starting Node.js server..."
node /path/to/server.js
