//1. get keypair from private key stored in env
//2. create transaction instruction that sends 0.1 to FkiHc9dvQGtdJg4eDh3z6zrakRBkYADYVr4vgzqMe954
//3. check balance of both wallets

import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import "dotenv/config";

const receiversKey = "FkiHc9dvQGtdJg4eDh3z6zrakRBkYADYVr4vgzqMe954";

const transaction = new Transaction();
const connection = new Connection(clusterApiUrl("devnet"));
const amount = 0.1;

// Get secret from env
const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log("Key pair received ✅");

// Send 0.01 sol from sender to receiver
const solInstructions = SystemProgram.transfer({
  fromPubkey: keypair.publicKey,
  toPubkey: new PublicKey(receiversKey),
  lamports: LAMPORTS_PER_SOL * amount,
});

// Create transaction
transaction.add(solInstructions);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  keypair,
]);
