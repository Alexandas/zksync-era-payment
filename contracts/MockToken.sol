// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

/// @dev Test Token contract
/// @author Alexandas
contract MockToken is ERC20Burnable, Ownable {
	constructor() ERC20('Stable Coin', 'USDC') {
		_mint(msg.sender, 1e28);
	}

	function mint(address to, uint256 amount) external onlyOwner {
		_mint(to, amount);
	}
}
