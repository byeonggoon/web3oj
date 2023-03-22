const { ethers } = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyMinusCalculator = await ethers.getContractFactory(
    "MyMinusCalculator"
  );
  const myMinusCalculator = await MyMinusCalculator.connect(myAccount).deploy();
  await myMinusCalculator.deployed();

  console.log(myMinusCalculator.minus(2, 1));

  const instance = "0x54D877d3926096F5d32337a1C3D815f99Ae06656"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const MinusCalculatorProblem = await ethers.getContractFactory(
    "MinusCalculatorProblem"
  );
  const minusCalculatorProblem = MinusCalculatorProblem.attach(instance);
  const result = minusCalculatorProblem
    .connect(myAccount)
    .setMinusCalculator(myMinusCalculator.address);
  console.log(result);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
