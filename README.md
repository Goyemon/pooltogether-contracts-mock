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
## Sai(0x85045f5B0A85C982d66CDC35043bc44AC4abbD5C)
```
$ oz create Sai  --network ropsten --init initialize --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,"Sai","Sai",18'
```
## Dai(0xb5e5d0f8c0cba267cd3d7035d6adc8eba7df7cdd)
```
$ oz create Dai  --network ropsten --init initialize --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,"Dai","Dai",18'
```
cDai -> 0x2b536482a01e620ee111747f8334b395a42a555e
## ScdMcdMigrationMock(0x0768CaDa02481e2720Ea0f085c0FCb3e1aA4BC45)
```
$ oz create ScdMcdMigrationMock  --network ropsten --init initialize --args '0x85045f5B0A85C982d66CDC35043bc44AC4abbD5C,0xb5e5d0f8c0cba267cd3d7035d6adc8eba7df7cdd'
```
## cSai(0xe813Ab215bB6e17eF0AfB82a7530308B7Fb29C92)
```
$ oz create cSai  --network ropsten --init initialize --args '0x85045f5B0A85C982d66CDC35043bc44AC4abbD5C,4960317460300'
```
## cDai(0xEc93Fa5FFa583A9e80702644b3Df7bdadc16dA7C)
```
$ oz create cDai  --network ropsten --init initialize --args '0xb5e5d0f8c0cba267cd3d7035d6adc8eba7df7cdd,4960317460300'
```
## PoolSai(0xaF8Ef70aE33B853158A0FC43e1be3F61DA37Fe45)
```
$ oz create PoolSai  --network ropsten --init init --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,0xe813Ab215bB6e17eF0AfB82a7530308B7Fb29C92,50000000000000000,0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,40,1'
```
## PoolSaiToken(0xcD0B9c551C947AC966eA746c6389EC2E11906f30)
```
$ oz create PoolSaiToken --network ropsten --init init --args '"Pool Sai","poolSai",[],0xaF8Ef70aE33B853158A0FC43e1be3F61DA37Fe45'
```
## PoolDai(0xb9F2e24b1E178d3303f9eF41B6E92052870cE1E8)
```
$ oz create PoolDai  --network ropsten --init init --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98D
Aa15Bf,0xEc93Fa5FFa583A9e80702644b3Df7bdadc16dA7C,50000000000000000,0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,40,1'
```
## PoolDaiToken(0x725DECB3d90a3618698f15429282e70083512ADA)
```
$ oz create PoolDaiToken --network ropsten --init init --args '"Pool Dai","poolDai",[],0xb9F2e24b1E178d3303f9eF41B6E92052870cE1E8'
```
## setPoolToken
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx? Pick a network ropsten
? Pick an instance PoolDai at 0xb9F2e24b1E178d3303f9eF41B6E92052870cE1E8
? Select which function setPoolToken(_poolToken: address)
? _poolToken (address): 0x725DECB3d90a3618698f15429282e70083512ADA
✓ Transaction successful. Transaction hash: 0x90e844a17174ee1c47e0fe95d8f5a78017589821c768475ca064b373b8f9cb0c
```
## initMigration
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
? Pick a network ropsten
? Pick an instance PoolDai at 0xb9F2e24b1E178d3303f9eF41B6E92052870cE1E8
? Select which function initMigration(_scdMcdMigration: address, _saiPool: address)
? _scdMcdMigration (address): 0x0768CaDa02481e2720Ea0f085c0FCb3e1aA4BC45
? _saiPool (address): 0xaF8Ef70aE33B853158A0FC43e1be3F61DA37Fe45
✓ Transaction successful. Transaction hash: 0x323c85169b6db56f735816c1ad1939b3456020ae744285686a1a9f0e324f1bd6
```
## setPoolToken
```
(base) ➜  pooltogether-contracts-mock git:(ropsten-migration) ✗ oz send-tx
? Pick a network ropsten
? Pick an instance PoolSai at 0xaF8Ef70aE33B853158A0FC43e1be3F61DA37Fe45
? Select which function setPoolToken(_poolToken: address)
? _poolToken (address): 0xcD0B9c551C947AC966eA746c6389EC2E11906f30
✓ Transaction successful. Transaction hash: 0xed5a858f266041de961537f3a2842023b3e0d70fe98960158be79bff43041394
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
