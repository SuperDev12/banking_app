const Account = require('../models/account');

exports.getAccounts = async () => {
  return await Account.findAll();
};
