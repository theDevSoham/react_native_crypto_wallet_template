import ECPairFactory from 'ecpair';
import ecc from '@bitcoinerlab/secp256k1';
const ECPair = ECPairFactory(ecc);
import * as bitcoin from 'bitcoinjs-lib';
const keyPair = ECPair.makeRandom();
const {address} = bitcoin.payments.p2pkh({pubkey: keyPair.publicKey});

export const testing = () => {
  console.log(address);
};
