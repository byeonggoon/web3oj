// yarn hardhat run --network rinkeby scripts/pauseERC20token.js
// run scripts 할때 네트워크 rinkeby로 잘하기 !

const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function pauseERC20tokensol() {
  const [myAccount] = await ethers.getSigners();

  const instance = "0xc6119F468d38086629a8ec3D9F01675043F13cA8"; // 홈페이지에 나온 컨트랙트 주소

  console.log("good1");
  const ERC20pausable = await ethers.getContractFactory(
    "Web3OJTPausable" // 홈페이지에 있는 코드 가져와서 컨트랙트생성
  );
  const ERC20Pausable = ERC20pausable.attach(instance); // 배포한거에 홈페이지에 나온 컨트랙트 붙이기
  console.log("cool");
  const result = await ERC20Pausable.pause(); // 일시정지함수 실행
  console.log("cool2");

  console.log(result);
}

async function main() {
  pauseERC20tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
