// yarn hardhat run --network rinkeby scripts/pauseerc721token.js
// run scripts 할때 네트워크 rinkeby로 잘하기 !

const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function pauseerc721tokensol() {
  const [myAccount] = await ethers.getSigners();

  const instance = "0x7d0d9890C379390f857EF0C4cbbcbEc39f570a2a"; // 홈페이지에 나온 컨트랙트 주소

  console.log("good1");
  const erc721pausable = await ethers.getContractFactory(
    "Web3OnlineJudgeNFTPausable" // 홈페이지에 있는 코드 가져와서 컨트랙트생성
  );
  const erc721Pausable = erc721pausable.attach(instance); // 배포한거에 홈페이지에 나온 컨트랙트 붙이기
  console.log("cool");
  await erc721Pausable.pause(); // 일시정지함수 실행
  console.log("cool2");
}

async function main() {
  pauseerc721tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
