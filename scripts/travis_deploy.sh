bx login -a https://api.ng.bluemix.net
bx target --cf-api https://api.ng.bluemix.net -o Disaster-Assist -s dev
yarn deploy:update
