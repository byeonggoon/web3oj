// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Transfersolve is ERC20 {
    ERC20 public web3ojt;

    uint256 public INITIAL_SUPPLY = 2000000000 * 10**18;

    constructor() ERC20("Web3 Online Judge Token", "WEB3OJT") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
