import { ethers } from "hardhat";

async function deployLibraryContract() {
  const signers = await ethers.getSigners();

  const Math = await ethers.getContractFactory("Math");
  const math = await Math.deploy();
  await math.deployed();
  console.log("Math deployed at: ", math.address);

  const TestMath = await ethers.getContractFactory("TestMath");
  const testMath = await TestMath.deploy();
  await testMath.deployed();
  console.log("TestMath deployed at: ", testMath.address);

  const Array = await ethers.getContractFactory("Array");
  const array = await Array.deploy();
  await array.deployed();
  console.log("Array deployed at: ", array.address);

  const TestArray = await ethers.getContractFactory("TestArray", {
    signer: signers[0],
    libraries: {
      Array: array.address,
    },
  });
  const testArray = await TestArray.deploy();
  await testArray.deployed();
  console.log("TestArray deployed at: ", testArray.address);

  return testMath;
}

async function deployKeccak256Contract() {
  const HashFunction = await ethers.getContractFactory("HashFunction");
  const hashFunction = await HashFunction.deploy();
  await hashFunction.deployed();
  console.log("HashFunction deployed at: ", hashFunction.address);

  const GuessTheMagicWord = await ethers.getContractFactory("GuessTheMagicWord");
  const guessTheMagicWord = await GuessTheMagicWord.deploy();
  await guessTheMagicWord.deployed();
  console.log("GuessTheMagicWord deployed at: ", guessTheMagicWord.address);

  return hashFunction;
}
async function deploySignatureContract() {
  const VerifySignature = await ethers.getContractFactory("VerifySignature");
  const verifySignature = await VerifySignature.deploy();
  await verifySignature.deployed();
  console.log("VerifySignature deployed at: ", verifySignature.address);

  return verifySignature;
}
async function deployGasGolfContract() {
  const GasGolf = await ethers.getContractFactory("GasGolf");
  const gasGolf = await GasGolf.deploy();
  await gasGolf.deployed();
  console.log("GasGolf deployed at: ", gasGolf.address);

  return gasGolf;
}
async function deployBitwiseContract() {
  const BitwiseOps = await ethers.getContractFactory("BitwiseOps");
  const bitwiseOps = await BitwiseOps.deploy();
  await bitwiseOps.deployed();
  console.log("BitwiseOps deployed at: ", bitwiseOps.address);

  return bitwiseOps;
}
async function deployEtherWalletContract() {
  const EtherWallet = await ethers.getContractFactory("EtherWallet");
  const etherWallet = await EtherWallet.deploy();
  await etherWallet.deployed();
  console.log("EtherWallet deployed at: ", etherWallet.address);

  return etherWallet;
}
async function deployMultiSigWalletContract() {
  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
  const multiSigWallet = await MultiSigWallet.deploy(['0x44f0380dF7113ec30ae72ce96A50320Dd903dEdB', '0x7639759962435019f16eE264C630d06d0De432c0', '0xc0184b2beb859179A639271a8d92841DC913AE6a'], 2);
  await multiSigWallet.deployed();
  console.log("MultiSigWallet deployed at: ", multiSigWallet.address);
  
  const TestContract = await ethers.getContractFactory("TestContract");
  const testContract = await TestContract.deploy();
  await testContract.deployed();
  console.log("TestContract deployed at: ", testContract.address);

  return multiSigWallet;
}
async function deployMerkleTreeContract() {
  const MerkleProof = await ethers.getContractFactory("MerkleProof");
  const merkleProof = await MerkleProof.deploy();
  await merkleProof.deployed();
  console.log("MerkleProof deployed at: ", merkleProof.address);
  
  const TestMerkleProof = await ethers.getContractFactory("TestMerkleProof");
  const testMerkleProof = await TestMerkleProof.deploy();
  await testMerkleProof.deployed();
  console.log("TestMerkleProof deployed at: ", testMerkleProof.address);

  return merkleProof;
}
async function deployIterableMappingContract() {
  const TestIterableMap = await ethers.getContractFactory("TestIterableMap");
  const testIterableMap = await TestIterableMap.deploy();
  await testIterableMap.deployed();
  console.log("TestIterableMap deployed at: ", testIterableMap.address);

  return testIterableMap;
}
async function deployERC20Contract() {
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy("Aaron Token", "AARON");
  await myToken.deployed();
  console.log("MyToken deployed at: ", myToken.address);

  const MyToken1 = await ethers.getContractFactory("MyToken");
  const myToken1 = await MyToken1.deploy("Baron Token", "BARON");
  await myToken1.deployed();
  console.log("MyToken1 deployed at: ", myToken1.address);

  const TokenSwap = await ethers.getContractFactory("TokenSwap");
  const tokenSwap = await TokenSwap.deploy(myToken.address, "0x44f0380dF7113ec30ae72ce96A50320Dd903dEdB", 10000000000000000000, myToken1.address, "0x44f0380dF7113ec30ae72ce96A50320Dd903dEdB", 2000000000000000000);
  await tokenSwap.deployed();
  console.log("TokenSwap deployed at: ", tokenSwap.address);

  return myToken;
}
async function deployERC721Contract() {
  const ERC721 = await ethers.getContractFactory("ERC721");
  const eRC721 = await ERC721.deploy();
  await eRC721.deployed();
  console.log("ERC721 deployed at: ", eRC721.address);

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("MyNFT deployed at: ", myNFT.address);

  return eRC721;
}

async function deployCreate2Contract() {
  const TestContract = await ethers.getContractFactory("contracts/Create2.sol:TestContract");
  const testContract = await TestContract.deploy("0x44f0380dF7113ec30ae72ce96A50320Dd903dEdB", 123);
  await testContract.deployed();
  console.log("TestContract deployed at: ", testContract.address);

  return testContract;
}
async function main() {
  //Deploy Library Contract
  // await deployLibraryContract();

  //Deploy Keccak256 Contract
  // await deployKeccak256Contract();

  //Deploy Signature Contract
  // await deploySignatureContract();

  //Deploy GasGolf Contract
  // await deployGasGolfContract();

  //Deploy Bitwise Contract
  // await deployBitwiseContract();

  //Deploy EtherWallet Contract
  // await deployEtherWalletContract();

  //Deploy MultiSigWallet Contract
  // await deployMultiSigWalletContract();

  //Deploy MerkleTree Contract
  // await deployMerkleTreeContract();

  //Deploy IterableMapping Contract
  // await deployIterableMappingContract();

  //Deploy ERC20 Contract
  // await deployERC20Contract();

  //Deploy ERC721 Contract
  // await deployERC721Contract();

  //Deploy Create2 Contract
  await deployCreate2Contract();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
