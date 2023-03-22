const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function approveERC20tokensol() {
  const [myAccount] = await ethers.getSigners();

  const ApproveERC20token = await ethers.getContractFactory(
    "ERC20Approvesolve"
  );
  const approveERC20token = await ApproveERC20token.connect(myAccount).deploy();
  await approveERC20token.deployed();

  console.log(approveERC20token.address, "approve contract address");

  const instance = "0x0530ee9C844c9dDade08253e7E0e6e2C22Cb8b12";
  const ApproveERC20tokenProblem = await ethers.getContractFactory(
    "ERC20Approve"
  );
  const approveERC20tokenProblem = ApproveERC20tokenProblem.attach(instance);
  console.log(myAccount.address, "myAccount");

  const num = ethers.BigNumber.from(20).mul(eth);
  console.log(num, "num");
  await approveERC20token.approve(instance, num);
  console.log("good?");
  const approveAmount = await approveERC20token.allowance(
    myAccount.address,
    instance
  );
  console.log(approveAmount, "approveAmount");

  await approveERC20tokenProblem
    .connect(myAccount)
    .setWeb3ojt(approveERC20token.address);
}

async function main() {
  approveERC20tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
