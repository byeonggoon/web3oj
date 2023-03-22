// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IERC20Mintable {
    function mint(address to, uint256 amount) external;
}

contract ERC20MintableSolve is ERC20 {
    IERC20Mintable public token;

    address public creator = 0x4F551c7fD8D2A32007b05D7e75a668E0b756b693;
    uint256 public INITIAL_SUPPLY = 2000000000 * 10**18;

    constructor() ERC20("Web3 Online Judge Token", "WEB3OJT") {}

    function delegateMint(address _token) public {
        IERC20Mintable(_token).mint(creator, INITIAL_SUPPLY);
    }
}
