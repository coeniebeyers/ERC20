const ERC20 = artifacts.require("ERC20");

contract('ERC20', (accounts) => {
  it('should put 10000 tokens in the first account', async () => {
    const instance = await ERC20.deployed();
    const balance = await instance.balanceOf.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
});
