import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

const wallet_address = "FkiHc9dvQGtdJg4eDh3z6zrakRBkYADYVr4vgzqMe954";
const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey(wallet_address);
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`Balance: ${balanceInSol} sol`);
