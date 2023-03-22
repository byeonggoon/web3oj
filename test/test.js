const { expect } = require("chai");
const { ethers, artifacts } = require("hardhat");

describe("덧셈 문제 배포 테스트", function () {
  let plusCalculatorFactory;

  beforeEach(async function () {
    const PlusCalculatorFactory = await ethers.getContractFactory(
      "ERC20Initsolve"
    );
    plusCalculatorFactory = await PlusCalculatorFactory.deploy();
    await plusCalculatorFactory.deployed();
  });

  it("MyPlusCalculator 테스트", async function () {
    console.log("123123");

    const test = await plusCalculatorFactory.symbole();
    console.log(test);
  });
});
