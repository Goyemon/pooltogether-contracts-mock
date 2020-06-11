# PoolTogether Mock Contracts

A set of migrations that deploy the [PoolTogether contracts](https://github.com/pooltogether/pooltogether-contracts), along with a mock MoneyMarket and Token.

The migrations will deploy the contracts, mint tokens, start a pool, and deposit into the pool.

# Setup

Clone the repo and then install deps:

```
$ yarn
```

Copy over .envrc and allow [direnv](https://direnv.net/):

```
$ cp .envrc.example .envrc
$ direnv allow
```

Start the local Ethereum node using `ganache-cli`:

```
$ yarn start
```

Now deploy the contracts locally:

```
$ yarn migrate
```

To destroy your local deployment, run:

```
$ yarn reset
```

*Note: If you changed the mnemonic, you should update the ADMIN_ADDRESS variable in `.envrc` with another address (I use the second address listed when `ganache-cli` starts).*

# Creating Rewards

To accrue interest on the pools you need to run:

```
$ yarn accrue
```

# Deploying Contract
## Sai(0x11030bEfd4D3515AE93F6ccF4AAebc3bD1Ff93eA)
```
$ oz create Sai  --network ropsten --init initialize --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,"Sai","Sai",18'
```
## Dai(0xeE36DCCf0349545b436927Ab5079ECCbD594A864)
```
$ oz create Dai  --network ropsten --init initialize --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,"Dai","Dai",18'
```
## ScdMcdMigrationMock(0x76eDC58BBC5602E913a9564048329B5C3bBA90C9)
```
$ oz create ScdMcdMigrationMock  --network ropsten --init initialize --args '0x85045f5B0A85C982d66CDC35043bc44AC4abbD5C,0xb5e5d0f8c0cba267cd3d7035d6adc8eba7df7cdd'
```
## cSai(0x5A67ceA4De1d330490a1C3e9C55cc80854824E18)
```
$ oz create cSai  --network ropsten --init initialize --args '0x85045f5B0A85C982d66CDC35043bc44AC4abbD5C,4960317460300'
```
## cDai(0x240A029e61EE0B5a5F853eBeBdB6A46F58Be0789)
```
$ oz create cDai  --network ropsten --init initialize --args '0xb5e5d0f8c0cba267cd3d7035d6adc8eba7df7cdd,4960317460300'
```
## PoolSai(0xf06853D533597B9C37ae48FeC1941080d18ecA64)
```
$ oz create PoolSai  --network ropsten --init init --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,0xe813Ab215bB6e17eF0AfB82a7530308B7Fb29C92,50000000000000000,0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,40,1'
```
## PoolSaiToken(0x3f012de3E910f2b4ffC5402a5d226dB96F585475)
```
$ oz create PoolSaiToken --network ropsten --init init --args '"Pool Sai","poolSai",[],{PoolSai Address}'
```
## PoolDai(0x9b12565D72b3664405C5eaDA2D9DFfe058624428)
```
$ oz create PoolDai  --network ropsten --init init --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,0x240A029e61EE0B5a5F85
3eBeBdB6A46F58Be0789,50000000000000000,0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,40,1'
```
## PoolDaiToken(0x5f2E35a96E149e66d0DF972522E4fb101975401b)
```
$ oz create PoolDaiToken --network ropsten --init init --args '"Pool Dai","poolDai",[],0x9b12565D72b3664405C5eaDA2D9DFfe058624428'
```
## setPoolToken
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
Using session with network ropsten, sender address 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, timeout 6000 seconds
? Pick an instance PoolDai at 0x9b12565D72b3664405C5eaDA2D9DFfe058624428
? Select which function setPoolToken(_poolToken: address)
? _poolToken (address): 0x5f2E35a96E149e66d0DF972522E4fb101975401b
✓ Transaction successful. Transaction hash: 0xc55c311c170bbf87fc351f23acfb4f90dae08e71e2fe53dfebbb17242109a3bd
```
## initMigration
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
Using session with network ropsten, sender address 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, timeout 6000 seconds
? Pick an instance PoolDai at 0x9b12565D72b3664405C5eaDA2D9DFfe058624428
? Select which function initMigration(_scdMcdMigration: address, _saiPool: address)
? _scdMcdMigration (address): 0x76eDC58BBC5602E913a9564048329B5C3bBA90C9
? _saiPool (address): 0xf06853D533597B9C37ae48FeC1941080d18ecA64
✓ Transaction successful. Transaction hash: 0x2494d90bc4cfb0477bce2097976d32c81111299e1441589101c25acd23937a41
```
## setPoolToken
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
Using session with network ropsten, sender address 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, timeout 6000 seconds
? Pick an instance PoolSai at 0xf06853D533597B9C37ae48FeC1941080d18ecA64
? Select which function setPoolToken(_poolToken: address)
? _poolToken (address): 0x3f012de3E910f2b4ffC5402a5d226dB96F585475
✓ Transaction successful. Transaction hash: 0x72756efa02b31ff1975819b14dbcbab58e8071bfb4cbaa8e8e29575dc2cfd101
```
## Mint Sai To cSai
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
Using session with network ropsten, sender address 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, timeout 6000 seconds
? Pick an instance Sai at 0x11030bEfd4D3515AE93F6ccF4AAebc3bD1Ff93eA
? Select which function mint(account: address, amount: uint256)
? account (address): 0x5A67ceA4De1d330490a1C3e9C55cc80854824E18
? amount (uint256): 10000000
✓ Transaction successful. Transaction hash: 0x32c62cf0ed6a4b70cb587cd12cf5d7457488ff928eaf45db4fb790d4ee890a47
Events emitted:
 - Transfer(0x0000000000000000000000000000000000000000, 0x5A67ceA4De1d330490a1C3e9C55cc80854824E18, 10000000)
```
## Mint Dai To cDai
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
Using session with network ropsten, sender address 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, timeout 6000 seconds
? Pick an instance Dai at 0xeE36DCCf0349545b436927Ab5079ECCbD594A864
? Select which function mint(account: address, amount: uint256)
? account (address): 0x240A029e61EE0B5a5F853eBeBdB6A46F58Be0789
? amount (uint256): 10000000
✓ Transaction successful. Transaction hash: 0xf36b9c1ae7201c7c8ed3ae4fd754b6259a9652d376ea2f5fbfda0cd61aabea98
Events emitted:
 - Transfer(0x0000000000000000000000000000000000000000, 0x240A029e61EE0B5a5F853eBeBdB6A46F58Be0789, 10000000)
```
## Mint Dai To ScdMcdMigration
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
Using session with network ropsten, sender address 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, timeout 6000 seconds
? Pick an instance Dai at 0xeE36DCCf0349545b436927Ab5079ECCbD594A864
? Select which function mint(account: address, amount: uint256)
? account (address): 0x76eDC58BBC5602E913a9564048329B5C3bBA90C9
? amount (uint256): 5000000000
✓ Transaction successful. Transaction hash: 0x5a42bd771245eaa6d9e25ddbbcac2d7b30661faa8de023840be6290e29d3716f
Events emitted:
 - Transfer(0x0000000000000000000000000000000000000000, 0x76eDC58BBC5602E913a9564048329B5C3bBA90C9, 5000000000)
```
## Approve Dai Pool
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
Using session with network ropsten, sender address 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, timeout 6000 seconds
? Pick an instance Dai at 0xeE36DCCf0349545b436927Ab5079ECCbD594A864
? Select which function approve(spender: address, amount: uint256)
? spender (address): 0x9b12565D72b3664405C5eaDA2D9DFfe058624428
? amount (uint256): 1000
✓ Transaction successful. Transaction hash: 0x1e060a3e33aa7d0808b96984417ff30595ef8cbfa206695932b5d2f140ee3981
Events emitted:
 - Approval(0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, 0x9b12565D72b3664405C5eaDA2D9DFfe058624428, 1000)
```
## PoolDai To Dai
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
Using session with network ropsten, sender address 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, timeout 6000 seconds
? Pick an instance PoolDai at 0x9b12565D72b3664405C5eaDA2D9DFfe058624428
? Select which function depositPool(_amount: uint256)
? _amount (uint256): 500
✓ Transaction successful. Transaction hash: 0xce6636df15a82d0d33caf9c935b38002674e3dd66fb133a0d98cc74e4c31d62e
Events emitted:
 - Deposited(0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, 500)
```
## Start Next Round
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
? Pick a network ropsten
? Pick an instance PoolDai at 0xb9F2e24b1E178d3303f9eF41B6E92052870cE1E8
? Select which function openNextDraw(nextSecretHash: bytes32)
? nextSecretHash (bytes32): 0x1c6c25eff7fa8242ea376917daa123a076c0703bbf4dea7bcb102a1af0f54a8c
✓ Transaction successful. Transaction hash: 0xf76266a8d7e04402d5fb65790f5b565f73576ca2ef149c614d69c7d1e2feda57
Events emitted:
 - Opened(1, 0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf, 0x1c6c25eff7fa8242ea376917daa123a076c0703bbf4dea7bcb102a1af0f54a8c, 50000000000000000)
```
## Unlock Contract
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
? Pick a network ropsten
? Pick an instance PoolDai at 0xb9F2e24b1E178d3303f9eF41B6E92052870cE1E8
? Select which function unlockTokens()
✓ Transaction successful. Transaction hash: 0xec140beb4ff51d9aff45ddbc3608d8d48a3258dc0b59cf9b2a3db5e305b30d57
```
