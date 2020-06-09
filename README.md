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
## ScdMcdMigrationMock(0xa004A0966F32D896B877E95E258d8A252b0D3cE0)
```
$ oz create ScdMcdMigrationMock  --network ropsten --init initialize --args '0x85045f5B0A85C982d66CDC35043bc44AC4abbD5C,0xb5e5d0f8c0cba267cd3d7035d6adc8eba7df7cdd'
```
## cSai(0xe813Ab215bB6e17eF0AfB82a7530308B7Fb29C92)
```
$ oz create cSai  --network ropsten --init initialize --args '0x85045f5B0A85C982d66CDC35043bc44AC4abbD5C,4960317460300'
```
## cDai(0xa004A0966F32D896B877E95E258d8A252b0D3cE0)
```
$ oz create cDai  --network ropsten --init initialize --args '0xb5e5d0f8c0cba267cd3d7035d6adc8eba7df7cdd,4960317460300'
```
## PoolSai
```
$ oz create PoolSai  --network ropsten --init init --args '0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,0xe813Ab215bB6e17eF0AfB82a7530308B7Fb29C92,50000000000000000,0x51f595Ef681C3B3B6B6949FBbB36b7D98DAa15Bf,40,1'
```