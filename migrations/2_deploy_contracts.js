const ConvertLib = artifacts.require("ConvertLib");
const ERC20 = artifacts.require("ERC20");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, ERC20);
  deployer.deploy(ERC20, 10000, 'ERC20', 2, 'TOK');
};
