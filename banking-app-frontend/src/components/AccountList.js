import React from 'react';

const AccountList = ({ accounts }) => {
  return (
    <div>
      <h3>Account List</h3>
      <ul>
        {accounts.map((account) => (
          <li key={account._id}>
            Account Number: {account.accountNumber}, Balance: {account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
