import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();
const { secretKey, publicKey } = keypair;

console.log(
  `Congrats! KeyPair created! \n\nPrivate Key:${secretKey}\n\nPublic Key:${publicKey}`
);
