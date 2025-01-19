import { createWalletClientUI, createPublicClient, createContractClient } from "@fotonjs/core";

import { TONLottery } from '../contracts'

export const walletClient = createWalletClientUI({
    chain: 'testnet',
    manifestUrl: 'https://ton-lottery-azure.vercel.app/tonconnect-manifest.json',
    restoreConnection: true,
})

export const publicClient = createPublicClient({
    api: 'testnet',
    authToken: '5a9605682e8e55e196f8bcaede7831aafe0a7634422391a77e4cd9e02bae551f'
})

export const lotteryClient = createContractClient({
    contract: TONLottery,
    publicClient,
    walletClient,
})