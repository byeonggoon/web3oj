const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function searchAndTransferERC721tokensol() {
  const [myAccount] = await ethers.getSigners();

  const instance = "0x2a937127c2bCB109f7d392427528F3f132e99e8b"; // 홈페이지에 나온 컨트랙트 주소

  const MadeERC721tokenProblem = await ethers.getContractFactory(
    "Web3OnlineJudgeNFTFind"
  ); // 홈페이지에 나와있는 문제 코드
  const madeERC721tokenProblem = MadeERC721tokenProblem.attach(instance); // 배포한거에 홈페이지에 나온 컨트랙트 붙이기

  await madeERC721tokenProblem.transferFrom(myAccount.address, instance, 561);

  console.log("cool");
}

async function main() {
  searchAndTransferERC721tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
