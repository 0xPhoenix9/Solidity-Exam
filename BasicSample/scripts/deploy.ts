import { ethers } from "hardhat";

async function deployLockContract() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();
  console.log("Lock deployed at: ", lock.address);

  return lock;
}
async function deployConstantsContract() {
  const Constants = await ethers.getContractFactory("Constants");
  const constants = await Constants.deploy();

  await constants.deployed();
  console.log("Constants deployed at: ", constants.address);

  return constants;
}
async function deployImmutableContract() {
  const Immutable = await ethers.getContractFactory("Immutable");
  const immutable = await Immutable.deploy(123);

  await immutable.deployed();
  console.log("Immutable deployed at: ", immutable.address);

  return immutable;
}
async function deploySimpleStorageContract() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();

  await simpleStorage.deployed();
  console.log("SimpleStorage deployed at: ", simpleStorage.address);

  return simpleStorage;
}

async function deployEtherUnitsContract() {
  const EtherUnits = await ethers.getContractFactory("EtherUnits");
  const etherUnits = await EtherUnits.deploy();

  await etherUnits.deployed();
  console.log("EtherUnits deployed at: ", etherUnits.address);

  return etherUnits;
}
async function deployGasContract() {
  const Gas = await ethers.getContractFactory("Gas");
  const gas = await Gas.deploy();

  await gas.deployed();
  console.log("Gas deployed at: ", gas.address);

  return gas;
}
async function deployIfElseContract() {
  const IfElse = await ethers.getContractFactory("IfElse");
  const ifElse = await IfElse.deploy();

  await ifElse.deployed();
  console.log("IfElse deployed at: ", ifElse.address);

  return ifElse;
}
async function deployLoopContract() {
  const Loop = await ethers.getContractFactory("Loop");
  const loop = await Loop.deploy();

  await loop.deployed();
  console.log("Loop deployed at: ", loop.address);

  return loop;
}
async function deployMappingContract() {
  const Mapping = await ethers.getContractFactory("Mapping");
  const mapping = await Mapping.deploy();

  await mapping.deployed();
  console.log("Mapping deployed at: ", mapping.address);

  const NestedMapping = await ethers.getContractFactory("NestedMapping");
  const nestedMapping = await NestedMapping.deploy();

  await nestedMapping.deployed();
  console.log("NestedMapping deployed at: ", nestedMapping.address);

  return mapping;
}

async function deployArrayContract() {
  const Array = await ethers.getContractFactory("Array");
  const array = await Array.deploy();

  await array.deployed();
  console.log("Array deployed at: ", array.address);

  const ArrayRemoveByShifting = await ethers.getContractFactory("ArrayRemoveByShifting");
  const arrayRemoveByShifting = await ArrayRemoveByShifting.deploy();

  await arrayRemoveByShifting.deployed();
  console.log("ArrayRemoveByShifting deployed at: ", arrayRemoveByShifting.address);

  const ArrayReplaceFromEnd = await ethers.getContractFactory("ArrayReplaceFromEnd");
  const arrayReplaceFromEnd = await ArrayReplaceFromEnd.deploy();

  await arrayReplaceFromEnd.deployed();
  console.log("ArrayReplaceFromEnd deployed at: ", arrayReplaceFromEnd.address);

  return array;
}

async function deployEnumContract() {
  const Enum1 = await ethers.getContractFactory("Enum1");
  const enum1 = await Enum1.deploy();

  await enum1.deployed();
  console.log("Enum deployed at: ", enum1.address);
  
  return enum1;
}

async function deployStructsContract() {
  const Todos = await ethers.getContractFactory("Todos");
  const todos = await Todos.deploy();

  await todos.deployed();
  console.log("Structs deployed at: ", todos.address);
  
  return todos;
}
async function deployDataLocationsContract() {
  const DataLocations = await ethers.getContractFactory("DataLocations");
  const dataLocations = await DataLocations.deploy();

  await dataLocations.deployed();
  console.log("DataLocations deployed at: ", dataLocations.address);
  
  return dataLocations;
}
async function deployFunctionContract() {
  const Function = await ethers.getContractFactory("Function");
  const function1 = await Function.deploy();

  await function1.deployed();
  console.log("Function deployed at: ", function1.address);
  
  return function1;
}
async function deployViewAndPureContract() {
  const ViewAndPure = await ethers.getContractFactory("ViewAndPure");
  const viewAndPure = await ViewAndPure.deploy();

  await viewAndPure.deployed();
  console.log("ViewAndPure deployed at: ", viewAndPure.address);
  
  return viewAndPure;
}
async function deployErrorContract() {
  const Error = await ethers.getContractFactory("Error");
  const error = await Error.deploy();

  await error.deployed();
  console.log("Error deployed at: ", error.address);

  const Account = await ethers.getContractFactory("Account");
  const account = await Account.deploy();

  await account.deployed();
  console.log("Account deployed at: ", account.address);
  
  return error;
}
async function deployFunctionModifierContract() {
  const FunctionModifier = await ethers.getContractFactory("FunctionModifier");
  const functionModifier = await FunctionModifier.deploy();

  await functionModifier.deployed();
  console.log("FunctionModifier deployed at: ", functionModifier.address);
  
  return functionModifier;
}
async function deployEventContract() {
  const Event = await ethers.getContractFactory("Event");
  const event = await Event.deploy();

  await event.deployed();
  console.log("Event deployed at: ", event.address);
  
  return event;
}

async function deployConstructureContract() {
  const X = await ethers.getContractFactory("X");
  const x = await X.deploy('X name');
  await x.deployed();
  console.log("X deployed at: ", x.address);

  const Y = await ethers.getContractFactory("Y");
  const y = await Y.deploy('Y text');
  await y.deployed();
  console.log("Y deployed at: ", y.address);

  const B = await ethers.getContractFactory("B");
  const b = await B.deploy();
  await b.deployed();
  console.log("B deployed at: ", b.address);

  const C = await ethers.getContractFactory("C");
  const c = await C.deploy('X name', 'Y text');
  await c.deployed();
  console.log("C deployed at: ", c.address);

  const D = await ethers.getContractFactory("D");
  const d = await D.deploy();
  await d.deployed();
  console.log("D deployed at: ", d.address);

  const E = await ethers.getContractFactory("E");
  const e = await E.deploy();
  await e.deployed();
  console.log("E deployed at: ", e.address);
  
  return x;
}
async function deployInheritanceContract() {
  const AI = await ethers.getContractFactory("AI");
  const aI = await AI.deploy();
  await aI.deployed();
  console.log("AI deployed at: ", aI.address);

  const BI = await ethers.getContractFactory("BI");
  const bI = await BI.deploy();
  await bI.deployed();
  console.log("BI deployed at: ", bI.address);

  const CI = await ethers.getContractFactory("CI");
  const cI = await CI.deploy();
  await cI.deployed();
  console.log("CI deployed at: ", cI.address);

  const DI = await ethers.getContractFactory("DI");
  const dI = await DI.deploy();
  await dI.deployed();
  console.log("DI deployed at: ", dI.address);

  const EI = await ethers.getContractFactory("EI");
  const eI = await EI.deploy();
  await eI.deployed();
  console.log("EI deployed at: ", eI.address);

  const FI = await ethers.getContractFactory("FI");
  const fI = await FI.deploy();
  await fI.deployed();
  console.log("FI deployed at: ", fI.address);
  
  return aI;
}

async function deployShadowContract() {
  const AS = await ethers.getContractFactory("AS");
  const aS = await AS.deploy();
  await aS.deployed();
  console.log("AS deployed at: ", aS.address);

  const CS = await ethers.getContractFactory("CS");
  const cS = await CS.deploy();
  await cS.deployed();
  console.log("CS deployed at: ", cS.address);
  
  return aS;
}
async function deploySuperContract() {
  const ASS = await ethers.getContractFactory("ASS");
  const aSS = await ASS.deploy();
  await aSS.deployed();
  console.log("ASS deployed at: ", aSS.address);

  const BSS = await ethers.getContractFactory("BSS");
  const bSS = await BSS.deploy();
  await bSS.deployed();
  console.log("BSS deployed at: ", bSS.address);

  const CSS = await ethers.getContractFactory("CSS");
  const cSS = await CSS.deploy();
  await cSS.deployed();
  console.log("CSS deployed at: ", cSS.address);

  const DSS = await ethers.getContractFactory("DSS");
  const dSS = await DSS.deploy();
  await dSS.deployed();
  console.log("DSS deployed at: ", dSS.address);
  
  return aSS;
}

async function deployVisibilityContract() {
  const Base = await ethers.getContractFactory("Base");
  const base = await Base.deploy();
  await base.deployed();
  console.log("Base deployed at: ", base.address);

  const Child = await ethers.getContractFactory("Child");
  const child = await Child.deploy();
  await child.deployed();
  console.log("Child deployed at: ", child.address);

  return base;
}
async function deployInterfaceContract() {
  const MyContract = await ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy();
  await myContract.deployed();
  console.log("MyContract deployed at: ", myContract.address);

  const UniswapExample = await ethers.getContractFactory("UniswapExample");
  const uniswapExample = await UniswapExample.deploy();
  await uniswapExample.deployed();
  console.log("UniswapExample deployed at: ", uniswapExample.address);

  return myContract;
}
async function deployPayableContract() {
  const Payable = await ethers.getContractFactory("Payable");
  const payable = await Payable.deploy();
  await payable.deployed();
  console.log("Payable deployed at: ", payable.address);

  return payable;
}
async function deploySendingEtherContract() {
  const ReceiveEther = await ethers.getContractFactory("ReceiveEther");
  const receiveEther = await ReceiveEther.deploy();
  await receiveEther.deployed();
  console.log("ReceiveEther deployed at: ", receiveEther.address);

  const SendEther = await ethers.getContractFactory("SendEther");
  const sendEther = await SendEther.deploy();
  await sendEther.deployed();
  console.log("SendEther deployed at: ", sendEther.address);

  return receiveEther;
}
async function deployFallbackContract() {
  const Fallback = await ethers.getContractFactory("Fallback");
  const fallback = await Fallback.deploy();
  await fallback.deployed();
  console.log("Fallback deployed at: ", fallback.address);

  const SendToFallback = await ethers.getContractFactory("SendToFallback");
  const sendToFallback = await SendToFallback.deploy();
  await sendToFallback.deployed();
  console.log("SendToFallback deployed at: ", sendToFallback.address);

  return fallback;
}
async function deployCallContract() {
  const Receiver = await ethers.getContractFactory("Receiver");
  const receiver = await Receiver.deploy();
  await receiver.deployed();
  console.log("Receiver deployed at: ", receiver.address);

  const Caller = await ethers.getContractFactory("Caller");
  const caller = await Caller.deploy();
  await caller.deployed();
  console.log("Caller deployed at: ", caller.address);

  return receiver;
}
async function deployDelegatecallContract() {
  const BD = await ethers.getContractFactory("BD");
  const bD = await BD.deploy();
  await bD.deployed();
  console.log("BD deployed at: ", bD.address);

  const AD = await ethers.getContractFactory("AD");
  const aD = await AD.deploy();
  await aD.deployed();
  console.log("AD deployed at: ", aD.address);

  return bD;
}
async function main() {
  //Deploy Lock Contract
  // await deployLockContract();

  //Deploy Constants Contract
  // await deployConstantsContract();

  //Deploy Immutable Contract
  // await deployImmutableContract();

  //Deploy SimpleStorage Contract
  // await deploySimpleStorageContract();

  //Deploy EtherUnits Contract
  // await deployEtherUnitsContract();

  //Deploy Gas Contract
  // await deployGasContract();

  //Deploy IfElse Contract
  // await deployIfElseContract();
  
  //Deploy Loop Contract
  // await deployLoopContract();

  //Deploy Mapping Contract
  // await deployMappingContract();

  //Deploy Array Contract
  // await deployArrayContract();

  //Deploy Enum Contract
  // await deployEnumContract();

  //Deploy Structs Contract
  // await deployStructsContract();

  //Deploy DataLocations Contract
  // await deployDataLocationsContract();

  //Deploy Function Contract
  // await deployFunctionContract();

  //Deploy ViewAndPure Contract
  // await deployViewAndPureContract();

  //Deploy Error Contract
  // await deployErrorContract();

  //Deploy FunctionModifier Contract
  // await deployFunctionModifierContract();

  //Deploy Event Contract
  // await deployEventContract();

  //Deploy Constructure Contract
  // await deployConstructureContract();

  //Deploy Inheritance Contract
  // await deployInheritanceContract();

  //Deploy Shadow Contract
  // await deployShadowContract();

  //Deploy Super Contract
  // await deploySuperContract();

  //Deploy Visibility Contract
  // await deployVisibilityContract();

  //Deploy Interface Contract
  // await deployInterfaceContract();

  //Deploy Payable Contract
  // await deployPayableContract();

  //Deploy SendingEther Contract
  // await deploySendingEtherContract();

  //Deploy Fallback Contract
  // await deployFallbackContract();

  //Deploy Call Contract
  await deployCallContract();

  //Deploy Delegatecall Contract
  await deployDelegatecallContract();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
