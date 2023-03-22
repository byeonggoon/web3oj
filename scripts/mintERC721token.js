const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function mintERC721token() {
  const [myAccount] = await ethers.getSigners();

  const MintERC721token = await ethers.getContractFactory(
    "mintERC721tokenSolve"
  );
  const mintERC721token = await MintERC721token.connect(myAccount).deploy();
  await mintERC721token.deployed();

  console.log(mintERC721token.address, "ERC721 contract address");

  const instance = "0xAf1de34B9Cd7d72e3BCA1C9c9Bb5A7C6c28bA299";

  console.log(myAccount.address, "myAccount");
  console.log("good?");

  await mintERC721token.mint(myAccount.address, 0);
  console.log("good?");

  const MintERC721tokenProblem = await ethers.getContractFactory("ERC721Init");
  const mintERC721tokenProblem = MintERC721tokenProblem.attach(instance);

  await mintERC721tokenProblem
    .connect(myAccount)
    .setWeb3ojNFT(mintERC721token.address);
}

async function main() {
  mintERC721token();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
