/* eslint-disable prettier/prettier */
// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values';

// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';

// Import the ethers library
import {ethers} from 'ethers';

export const createWallet = async () => {
  const provider = new ethers.providers.JsonRpcProvider('');
  return provider;
};
