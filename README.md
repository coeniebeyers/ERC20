
We will be using the below set of instructions as a conversation piece. 

# TODO

1. Fork this repo on your own github account and clone your forked repo.
2. Work inside this cloned folder. Don't push anything as others shouldn't see your work (for now).
3. Deploy any ERC20/EIP20 token contract (some reading: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md and example implementation: https://github.com/ConsenSys/Tokens/blob/fdf687c69d998266a95f15216b1955a4965a0a6d/contracts/eip20/EIP20.sol). You can deploy this to testrpc with truffle.
4. Do a couple of transfers between addresses, this can be in a truffle test. Explore the contract, I will be asking questions about it.
5. Next, migrate the `balances` into its own contract. The goal is to separate state (balances) and logic (rules around what balances can do). This does not mean that the balances contract won't have any rules, think about permissions. Ideally I will want to see the original ERC20 contract as well as the new ones.
6. Think about why 5 is a good/bad idea.
7. Deploy your new contracts and do some transfers.
8. Spend some time thinking/googling about all of the above.
