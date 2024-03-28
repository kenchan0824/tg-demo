const { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } = require('@solana/web3.js');

async function checkBalance(wallet_address) {
    const conn = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
    const balance = await conn.getBalance(new PublicKey(wallet_address));
    return balance / LAMPORTS_PER_SOL;
}

module.exports = { checkBalance }