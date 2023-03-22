// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract mintERC721tokenSolve is ERC721 {
    string public baseURI;

    constructor() ERC721("Web3 Online Judge NFT", "WEB3OJNFT") {}

    // function setBaseURI() public {
    //     baseURI = "https://app.web3oj.com/web3ojnft/";
    // }

    function _baseURI() internal pure override returns (string memory) {
        return "https://app.web3oj.com/web3ojnft/";
    }

    // function tokenURI(uint256 tokenId)
    //     public
    //     view
    //     override
    //     returns (string memory)
    // {
    //     return
    //         bytes(baseURI).length > 0
    //             ? string(abi.encodePacked(baseURI, tokenId))
    //             : "";
    // }

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}
