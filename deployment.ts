import * as scripts from "./built"

export const deployment = {
  vesting: {
    script: {
      type: 'PlutusV2',
      script:
      scripts.plutus.validators.btnVest.compiledCode,
    },
    policy: '762ee0946ca532fa90efbe8ee491248b602ca84d59490cbdc6e59a6c',
    referenceUtxo: {
      txHash:
        '5014bfeb7119e7e18fa00d3f37f40ddfe337131b77fd1408ca6e21f1d97599d5',
      outputIndex: 0,
      assets: {
        lovelace: 6999440n,
      },
      address: 'addr1w98v2rexyjaxyppmaezyfz7fkwy059ewpde7l9xr4vhcp9qhtzss2',
      datumHash: undefined,
      datum: undefined,
      scriptRef: {
        type: 'PlutusV2',
        script:
          `590584${scripts.plutus.validators.btnVest.compiledCode}`,
      },
    },
  },
  btn: {
    script: {
      type: 'PlutusV2',
      script:
      scripts.plutus.validators.btnMint.compiledCode,
    },
    policy: '1b53409569d634d14b78869e529c3ffde568c70f74b573d48db0d399',
    referenceUtxo: {
      txHash:
        '5014bfeb7119e7e18fa00d3f37f40ddfe337131b77fd1408ca6e21f1d97599d5',
      outputIndex: 1,
      assets: {
        lovelace: 7934710n,
      },
      address: 'addr1w98v2rexyjaxyppmaezyfz7fkwy059ewpde7l9xr4vhcp9qhtzss2',
      datumHash: undefined,
      datum: undefined,
      scriptRef: {
        type: 'PlutusV2',
        script:
          `59065d${scripts.plutus.validators.btnMint.compiledCode}`,
      },
    },
  },
}
