import { ethers } from "hardhat";

async function main() {
  const Variables = await ethers.getContractFactory("Variables");
  const variables = await Variables.deploy();

  await variables.deployed();

  console.log(`Variables contract deployed to ${variables.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
