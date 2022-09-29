import { ethers } from "hardhat";

async function main() {

  const Primitives = await ethers.getContractFactory("Primitives");
  const primitives = await Primitives.deploy();

  await primitives.deployed();

  console.log(`Primitives contract deployed to ${primitives.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
