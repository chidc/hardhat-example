//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Thu {
    string public msg;

    constructor(string memory message) {
        msg = message;
    }

    function print3() public view returns (string memory) {
        return msg;
    }

    function update(string memory ms) public {
        msg = ms;
    }
}
