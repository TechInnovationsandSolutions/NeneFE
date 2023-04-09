#!/bin/bash
cd /home/ubuntu/NeneFE
pm2 kill
sudo rm -rf /home/ubuntu/NeneFE/.next
npm install
pm2 start "npm run  dev" --name "NeneFE"
sudo systemctl stop NeneFE.service