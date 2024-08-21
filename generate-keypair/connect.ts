import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const account = new PublicKey("FkiHc9dvQGtdJg4eDh3z6zrakRBkYADYVr4vgzqMe954");
const balance = await connection.getBalance(account);

console.log(
  `Congrats! You are connected! \n\nAccount: ${account} \nBalance:${balance}`
);
