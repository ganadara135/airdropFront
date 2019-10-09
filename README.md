# Decentrilized app for ERC20/ERC223 token airdrop

With this app, you can transfer your token until to 150 addresses at once, simple UI, configurations and features. <br><br>
How to run the project:

* Clone this repo
* Open ./src/Airdrop.sol
* Change the token contract address with your existing token contract address (line 8)
* Deploy the contract using <a href="https://remix.ethereum.org/#optimize=true&version=soljson-v0.4.24+commit.e67f0147.js" target="_blank">remix</a> (I prefer the 2nd one)
* Allow to airdrop contract address to spend the X your tokens
* Go to ./src/script and edit the lines N 5,10,11,12 related to your addresses
* Install node/npm if not installed
* Go to ./ and run "npm start"
* Open the browser and type localhost:3000
* Enjoy

If it helps you dont forget add the "Star" to the repo, thanks.

## Screenshots
![alt text](https://raw.githubusercontent.com/Araton95/Easy_Airdrop_dApp/master/screenshot-localhost-8080-2018.10.04-23-15-52.png)



# Docker 실행 방법 <br>
# 열어주는 포트  9545, 8545, 7545, 3000, 3001  <br>
> docker run -it -p 9545:9545 -p 8545:8545 -p 7545:7545 -p 3000:3000 -p 3001:3001 --volume=$(pwd):/basic/  --name basic -d node 
# 포트 3009   //    에어드랍용
> docker run -it -p 3009:3009 --volume=$(pwd):/airdrop/ --name airdrop  --link king -d node
