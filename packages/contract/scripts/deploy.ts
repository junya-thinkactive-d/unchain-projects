import { ethers } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const accountBalanace = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalanace.toString());

  const waveContractFactory = await ethers.getContractFactory("WavePortal");

  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther("0.01"),
  });

  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    // eslint-disable-next-line no-process-exit
    process.exit(0);
  } catch (error) {
    console.log(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};

runMain();
