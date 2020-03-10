
We will be using the below set of instructions as a conversation piece. 

# TODO

1. Fork this repo on your own github account and clone your forked repo.
2. Work inside this cloned folder. Don't push anything as others shouldn't see your work (for now).
3. You will need to install truffle globally: https://www.trufflesuite.com/docs/truffle/getting-started/installation
4. We will be using an ERC20 contract: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md. There is already a sample ERC20 implementation included under the contracts folder.
5. Do a couple of transfers between addresses, this can be in a truffle test. Explore the contract, I will be asking questions about it.
6. Next, migrate the `balances` into its own contract. The goal is to separate state (balances) and logic (rules around what balances can do). This does not mean that the balances contract won't have any rules, think about permissions. Ideally I will want to see the original ERC20 contract as well as the new ones.
7. Think about why 5 is a good/bad idea.
8. Deploy your new contracts and do some transfers, add some tests.
9. Spend some time thinking/googling about all of the above.
