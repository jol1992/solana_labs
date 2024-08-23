import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import "dotenv/config";

// Note: make sure the .env file is at the root
const keypair = await getKeypairFromEnvironment("SECRET_KEY");
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);
const { publicKey } = keypair;

console.log(`Public key: ${publicKey}`);

const connection = new Connection(clusterApiUrl("devnet"));
const balance = await connection.getBalance(publicKey);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`This wallet has a balance of ${balanceInSol} sol`);
