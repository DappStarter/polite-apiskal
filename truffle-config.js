require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan radar script common hidden arena army gentle'; 
let testAccounts = [
"0x1658fbb6609b85eb45ef3c997ae6ee40899eee5a280c7491acdc0d52eff6fe2d",
"0x775b46d96aaa766b53eaa289f6bd806588634e6f2839ff0e61927b5c810aa802",
"0x9ae9243981a76b42eee2794471a812a71c760d483f1ee4dda25d235defb4033a",
"0x63c58f9d7471f260167dc9b97ba2fbc4ea33c3b1624eebbe4bed09e9f162c9cb",
"0xf3e1a39259da0ee67fb7805cdde9adf40b397ec87fc7b2f310ba74fd7d686ead",
"0xffa8f4301a1a506421426ec82d0f87be27c33bfd92edf5a040c39c4283a129dd",
"0xc8b0c9ce8bba437d5bd7b0a8b22fc957529ba8bfaeb74c3ef8b8900524ee26fa",
"0x87587037b802972c0459d382706a16ff29860d653ced041f39692f5367c8bf6a",
"0xec1c936980fcc6f89fcb50ff3b63a9797af645ec652fd8118830648374e82ae0",
"0xffd5d2bae60ca3fe964fced18d3ee671def4a1b1bc694a6ac557f11514db3b46"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
