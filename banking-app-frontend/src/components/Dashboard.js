import React, { useState, useEffect } from 'react';
import { getAccounts } from '../services/accountService';
import AccountList from './AccountList';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await getAccounts();
        setAccounts(response.data);
      } catch (error) {
        console.error('Failed to fetch accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <AccountList accounts={accounts} />
    </div>
  );
};

export default Dashboard;
