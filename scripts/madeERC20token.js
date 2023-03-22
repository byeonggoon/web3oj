const { ethers } = require("hardhat");

async function madeERC20tokensol() {
  const [myAccount] = await ethers.getSigners();

  const MadeERC20token = await ethers.getContractFactory("ERC20Initsolve");
  const madeERC20token = await MadeERC20token.connect(myAccount).deploy();
  await madeERC20token.deployed();

  console.log(madeERC20token.address, "address");

  const instance = "0x487b2C7569DfCC9625DbcBfa103b8E3FCd4eD776"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const MadeERC20tokenProblem = await ethers.getContractFactory("ERC20Init");
  const madeERC20tokenProblem = MadeERC20tokenProblem.attach(instance);
  const result = madeERC20tokenProblem
    .connect(myAccount)
    .setWeb3ojt(madeERC20token.address);
  console.log(result);
}

async function main() {
  madeERC20tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
