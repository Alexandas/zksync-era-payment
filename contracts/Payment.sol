// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';

import './libraries/ResourceData.sol';

/// @author Alexandas
/// @dev payment contract on zksync era
contract Payment is Initializable, ReentrancyGuardUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev return token contract address
	IERC20Upgradeable public token;

	event Paid(address provider, bytes32 account, ResourceData.ValuePayload[] payloads, uint256 value, uint256 nonce, uint256 amount, bytes signature);

	function initialize(IERC20Upgradeable _token) external initializer {
		token = _token;
	}

	function pay(
		address provider,
		bytes32 account,
		ResourceData.ValuePayload[] memory payloads,
		uint256 nonce,
		uint256 amount,
		bytes memory signature
	) external payable nonReentrant {
		uint256 value = ResourceData.totalValue(payloads);
		if (value >= amount) {
			value = ResourceData.matchResourceToToken(token, value - amount);
		} else {
			value = 0;
		}
		token.safeTransferFrom(msg.sender, address(this), value);
		emit Paid(provider, account, payloads, value, nonce, amount, signature);
	}
}
