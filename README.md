test : npx hardhat test

deploy on local: with two terminal - t1:npx hardhat node
                                   - t2:npx hardhat run ./script/deploy.js -- network localhost
                                   
deploy test net: npx hardhat run ./script/deploy.js -- network testnet
