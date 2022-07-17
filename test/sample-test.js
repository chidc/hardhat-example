const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Thu",function (){
  const message = "bablabla"
  const messafeSecond = "bye world"
  const messafeSecond2 = "bye worl2d"
  it("should return message correctly", async function(){
    const BBB = await ethers.getContractFactory('Thu')
    const CCCC = await BBB.deploy(message)
    await CCCC.deployed()
    expect(await CCCC.print3()).to.be.equal(message)

    await CCCC.update(messafeSecond)
    expect(await CCCC.print3()).to.be.equal(messafeSecond)
  });
});