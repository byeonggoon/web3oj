const { ethers } = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyDivisionCalculator = await ethers.getContractFactory(
    "MyDivisionCalculator"
  );
  const myDivisionCalculator = await MyDivisionCalculator.connect(
    myAccount
  ).deploy();
  await myDivisionCalculator.deployed();

  console.log(myDivisionCalculator.address);

  const instance = "0x4caAE258db95b45e6D1C567383B4C0270dC9A0d1"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const DivisionCalculatorProblem = await ethers.getContractFactory(
    "DivisionCalculatorProblem"
  );
  const divisionCalculatorProblem = DivisionCalculatorProblem.attach(instance);
  const result = divisionCalculatorProblem
    .connect(myAccount)
    .setDivisionCalculator(myDivisionCalculator.address);
  console.log(result);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
