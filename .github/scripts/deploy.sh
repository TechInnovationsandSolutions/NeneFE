#!/bin/bash

pm2 kill
sudo rm -rf /home/ubuntu/NeneFE/node_modules
sudo rm -rf /home/ubuntu/NeneFE/.next

npm install

pm2 start "npm run start" --name "NeneFE"
