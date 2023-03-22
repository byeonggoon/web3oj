const { ethers } = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyMultiplicationCalculator = await ethers.getContractFactory(
    "MyMultiplicationCalculator"
  );
  const myMultiplicationCalculator = await MyMultiplicationCalculator.connect(
    myAccount
  ).deploy();
  await myMultiplicationCalculator.deployed();

  const instance = "0xE3fbCE9E0Fd49ded9143B24e178DdB69460F1109"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const MultiplicationCalculatorProblem = await ethers.getContractFactory(
    "MultiplicationCalculatorProblem"
  );
  const multiplicationCalculatorProblem =
    MultiplicationCalculatorProblem.attach(instance);
  const result = multiplicationCalculatorProblem
    .connect(myAccount)
    .setMultiplicationCalculator(myMultiplicationCalculator.address);
  console.log(result);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
