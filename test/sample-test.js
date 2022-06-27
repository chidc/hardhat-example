const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SDSDsdsd",function (){
  const blba = "asdasdsadd"
  it("rrturn correctly", async function(){
    const BBB = await ethers.getContractFactory('Thu')
    const CCCC = await BBB.deploy(blba)
    await CCCC.deployed()
    expect(await CCCC.print3()).to.be.equal(blba)

    await CCCC.update
  })
});