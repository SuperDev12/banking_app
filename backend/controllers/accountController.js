const accountService = require('../services/accountService');

exports.getAccounts = async (req, res) => {
  try {
    const accounts = await accountService.getAccounts();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
