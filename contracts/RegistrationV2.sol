// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import './Registration.sol';
import './access/OwnerWithdrawable.sol';
import './proxy/AdminWrapper.sol';

contract RegistrationV2 is Registration, AdminWrapper, OwnerWithdrawable {

	event FeeChanged(uint256 fee);

	function update(address newOwner, uint256 _fee) external onlyAdmin {
		_transferOwnership(newOwner);
		_changeFee(_fee);
	}

	function changeFee(uint256 _fee) external onlyOwner {
		_changeFee(_fee);
	}

	function _changeFee(uint256 _fee) internal {
		fee = _fee;
		emit FeeChanged(fee);
	}
}