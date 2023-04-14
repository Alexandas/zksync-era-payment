// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';

/// @author Alexandas
/// @dev registration contract on zksync era
contract Registration is Initializable {
	uint256 public fee;

	event Register(address provider, bytes32 account, uint256 value, uint256 fee);

	mapping(bytes32 => bool) public accountExists;

	function initialize(uint256 _fee) external initializer {
		fee = _fee;
	}

	function register(address provider, bytes32 account) external payable {
		require(!accountExists[account], 'Registration: account exists');
		require(msg.value >= fee, 'Registration: insufficient registration fee');
		if (msg.value > fee) {
			payable(msg.sender).call{value: msg.value - fee}('');
		}
		accountExists[account] = true;
		emit Register(provider, account, msg.value, fee);
	}
}
