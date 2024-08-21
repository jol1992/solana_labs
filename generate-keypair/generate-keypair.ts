import { Keypair } from "@solana/web3.js";

const keypair = new Keypair();
const privateKey = keypair.secretKey;
const publicKey = keypair.publicKey;

console.log(
  `Congrats! KeyPair created! \n\nPrivate Key:${privateKey}\n\nPublic Key:${publicKey}`
);
