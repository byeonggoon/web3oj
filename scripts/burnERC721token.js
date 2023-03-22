const { ethers } = require("hardhat");
const eth = ethers.BigNumber.from(10).pow(18);

async function burnERC721tokensol() {
  const [myAccount] = await ethers.getSigners();

  const ERC721Burnable = await ethers.getContractFactory(
    "Web3OnlineJudgeNFTBurnable"
  );
  // 홈페이지에 나와있는 문제 코드

  const instance = "0x3d5A7d59718A65067Bc2E7A424429341bf3160Db"; // 홈페이지에 나온 컨트랙트 주소

  const BurnContract = await ERC721Burnable.attach(instance); // 배포한거에 홈페이지에 나온 컨트랙트 붙이기

  const balance = await BurnContract.balanceOf(myAccount.address);
  console.log(balance, "balance cool");

  const result = await BurnContract.burn(0);
  console.log("cool2");

  console.log(result);
}

async function main() {
  burnERC721tokensol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/// ////===================== 다른 풀이 =======================//////
// const { ethers } = require("hardhat");
// const instance = "0x6843a061FE8Da779045f230A03908dfE4FE66BC3"; // 홈페이지에 나온 컨트랙트 주소

// (async function () {
//   const [player] = await ethers.getSigners();
//   const token = await ethers.getContractAt(
//     "ERC721BurnableToken",
//     instance, // 페이지에 나온 컨트랙트주소
//     player
//   );

//   const amount = await token.balanceOf(player.address);
//   console.log(amount, "amount");
//   await token.burn(amount);
// })().catch((err) => console.error(err));
