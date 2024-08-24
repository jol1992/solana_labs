import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import "dotenv/config";

const PING_PROGRAM_ADDRESS = new PublicKey(
  "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa"
);
const PING_PROGRAM_DATA_ADDRESS = new PublicKey(
  "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod"
);

const connection = new Connection(clusterApiUrl("devnet"));
const keypair = getKeypairFromEnvironment("SECRET_KEY");

const instruction = new TransactionInstruction({
  keys: [
    {
      isSigner: false,
      isWritable: true,
      pubkey: PING_PROGRAM_DATA_ADDRESS,
    },
  ],
  programId: PING_PROGRAM_ADDRESS,
});

const transaction = new Transaction();
transaction.add(instruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  keypair,
]);
console.log(`Congrats! we pinged the program! \n\nSignature:\n${signature} `);
