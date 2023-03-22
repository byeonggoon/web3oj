const { ethers } = require("hardhat");

async function madeERC20tokensol() {
  const [myAccount] = await ethers.getSigners();

  const MadeERC20token = await ethers.getContractFactory("ERC20Transfersolve");
  const madeERC20token = await MadeERC20token.connect(myAccount).deploy();
  await madeERC20token.deployed();

  console.log(madeERC20token.address, "address");

  const deployAddress = "0x3801b9FACBf98330Da1976e335f1eF50EEC9F377";

  const instance = "0x0530ee9C844c9dDade08253e7E0e6e2C22Cb8b12";
  const MadeERC20tokenProblem = await ethers.getContractFactory("ERC20Init");
  const madeERC20tokenProblem = MadeERC20tokenProblem.attach(instance);

  // console.log(myAccount.address, "myAccount");
  const num = ethers.BigNumber.from(20);
  // const myBalance = await madeERC20token.balanceOf(myAccount.address);
  // console.log(myBalance, "balance");
  // await madeERC20token.connect(myAccount).transfer(instance, num);
  // console.log(myBalance, "balance");

  await madeERC20token.connect(myAccount).approve(instance, num);
  console.log("cool");

  const result = madeERC20tokenProblem
    .connect(myAccount)
    .setWeb3ojt(deployAddress);
  console.log(result);
}

async function main() {
  madeERC20tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
