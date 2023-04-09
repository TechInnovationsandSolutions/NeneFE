#!/bin/bash
cd /home/ubuntu/NeneFE
pm2 kill
sudo rm -rf /home/ubuntu/NeneFE/.next
sudo systemctl stop NeneFE.service
npm install
pm2 start "npm run  dev" --name "NeneFE"
