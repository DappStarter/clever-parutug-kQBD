require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet return magic exchange inner private slot ghost'; 
let testAccounts = [
"0xf7e41b9950bc8a849bb52d27f2473b6b02c6710f9ca3001aea5a69eccdf88512",
"0x2468d0579139959d7bc66e34f5a71b9b33397a86de95dbabaec4cfdc74941b28",
"0xa22c5bcc1aa7af68fe776ed9fbbba48ca1d0bf0b91356d6af0fb55eadf83feab",
"0x6d1c1a05bbfaf022203c618d1c057bd22af33bc9bfc3b8a6b9e45ad3e6b7add8",
"0xe7128b7389b4e0e851ec608a34654129443413242e8025aba0b56d5250904d92",
"0xc23291a43fb61655a4efe6c54d6aa7409f7a7fe40e675bcc453d8dfc278c74c6",
"0xdd0181400cb0566a25a6a1d024074f09fa49c90c2795e1c6deca6c2d89bcda36",
"0xd5cf2e9649191162152c7434e255bd7f528acaca7699cc6b8ae09a08ee57c109",
"0x52d7c33d5efc1191831744a58764ad74216d43d1e5e3a169756425c7b62e3dc1",
"0x3d59d9336c9d8a1e58f7d6351d4754e469e6a4a897080397fe961e674b35e364"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

