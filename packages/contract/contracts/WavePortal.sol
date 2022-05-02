// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract WavePortal {
    using SafeMath for uint256;

    uint256 public constant PRICE = 0.0001 ether;
    uint256 public constant MAX_PER_MINT = 5;
    uint256 totalWaves;
    uint256 private seed;

    event NewWave(
        address indexed from,
        uint256 timestamp,
        string name,
        string message,
        uint256 wavecount,
        bool winOrLose
    );

    struct Wave {
        address waver;
        uint256 timestamp;
        string name;
        string message;
        uint256 wavecount;
        bool winOrLose;
    }
    bool winOrLose;
    Wave[] waves;

    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log("We have been constructed!");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave(
        string memory _name,
        string memory _message,
        uint256 _wavecount
    ) public payable {
        require(
            lastWavedAt[msg.sender] + 30 seconds < block.timestamp,
            "Wait 30s"
        );

        lastWavedAt[msg.sender] = block.timestamp;
        totalWaves += _wavecount;
        console.log("%s has waved!", msg.sender, _message);

        require(_wavecount > 0 && _wavecount <= MAX_PER_MINT, "");
        require(msg.value >= PRICE.mul(_wavecount), "");

        seed = (block.difficulty + block.timestamp + seed) % 100;

        console.log("Radom # generated: %d", seed);

        if (seed <= 30) {
            console.log("%s won!", msg.sender);
            uint256 prizeAmount = PRICE.mul(_wavecount);
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
            winOrLose = true;
        } else {
            console.log("%s did not win.", msg.sender);
            winOrLose = false;
        }
        waves.push(
            Wave(
                msg.sender,
                block.timestamp,
                _name,
                _message,
                _wavecount,
                winOrLose
            )
        );

        emit NewWave(
            msg.sender,
            block.timestamp,
            _name,
            _message,
            _wavecount,
            winOrLose
        );
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        return totalWaves;
    }
}
