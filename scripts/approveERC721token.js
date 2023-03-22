const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function approveERC721tokensol() {
  const [myAccount] = await ethers.getSigners();

  const ApproveERC721token = await ethers.getContractFactory(
    "mintERC721tokenSolve"
  );
  const approveERC721token = await ApproveERC721token.connect(
    myAccount
  ).deploy();
  await approveERC721token.deployed();

  console.log(approveERC721token.address, "approve contract address");

  const instance = "0x6E75346cc166ABcAc3dBB9e04ADdb8C61a47BE01";
  console.log(myAccount.address, "myAccount");

  await approveERC721token.attach(instance).approve(instance, 0);
  console.log("good?");
}

async function main() {
  approveERC721tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
