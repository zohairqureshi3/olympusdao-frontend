import { NodeHelper } from "./helpers/NodeHelper";
import { EnvHelper } from "./helpers/Environment";
import ethereum from "./assets/tokens/wETH.svg";
import arbitrum from "./assets/arbitrum.png";
import avalanche from "./assets/tokens/AVAX.svg";
import polygon from "./assets/tokens/matic.svg";

export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-protocol-metrics";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

interface IPoolGraphURLS {
  [index: string]: string;
}

export const POOL_GRAPH_URLS: IPoolGraphURLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

export enum NetworkId {
  MAINNET = 1,
  TESTNET_RINKEBY = 4,

  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 421611,

  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,

  POLYGON = 137,
  POLYGON_TESTNET = 80001,
}

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  [NetworkId.TESTNET_RINKEBY]: {
    DAI_ADDRESS: "0x43b80dfF823eB929C9976Cb25EBe2Ed9D55111e8", // duplicate
    OHM_ADDRESS: "0xe3C6e46ee7bC5Bd908dDbbB31E3F0529770BCAc2",
    STAKING_ADDRESS: "0xbEE1f3e638121dA337398E0e423C7fd0d4d54e77",
    STAKING_HELPER_ADDRESS: "0x6D39cf984fc11DDEb981E3765844b5C44bB19C79",
    OLD_STAKING_ADDRESS: "0x2d554305247Df430eAc1842aC68A8C21d7Ef759e",
    SOHM_ADDRESS: "0x906f4131204bE4977d11cbd642567f315F784268",
    WSOHM_ADDRESS: "0x63b24f5c189CeE810448b3D2d61db6d938865b03",
    OLD_SOHM_ADDRESS: "0x63EaF87Fec1106B3D4FfBD21fA49E2cb3f0BF890",
    MIGRATE_ADDRESS: "0x714B2a9EE5c0c3a2676A7BfD24Df403B04A8ECFc",
    DISTRIBUTOR_ADDRESS: "0x1dD67B390ee2F115dF656cC5B2cbF18206984C96",
    BONDINGCALC_ADDRESS: "0xaEB3e7A9c9e9e1a47B1537186Cd1620603ebF151",
    CIRCULATING_SUPPLY_ADDRESS: "0x4C64088b7DDCC3e24eC7156c449b1a6530A079f2",
    TREASURY_ADDRESS: "0x9a8d953Cc1365a006A61Ac3118FbC8d3B83ba7Fb",
    REDEEM_HELPER_ADDRESS: "0xeD45360acC5C6963E85f9768e9953C949474e67e",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
    GIVING_ADDRESS: "0x83D4FE6Ead62547758E094ee5BDb343ADbC2AeB9",
    MOCK_GIVING_ADDRESS: "0xfC93B6fC25D751ef1141EAB01C3f51Ecd484Ba05",
    MOCK_SOHM: "0x22C0b7Dc53a4caa95fEAbb05ea0729995a10D727",
    MIGRATOR_ADDRESS: "0xEFE764B95Fc230fAaa86730Dd4fE997aab8EeA43",
    GOHM_ADDRESS: "0xD7680dab03fe9D917cb0e10d2C26Bffb9f9D794c",
    OHM_V2: "0xd7B98050962ec7cC8D11a83446B3217257C754B7",
    TREASURY_V2: "0x71862dE5E3cB4c28fb8b786cbD106B53dc88D909",
    SOHM_V2: "0xebED323CEbe4FfF65F7D7612Ea04313F718E5A75",
    STAKING_V2: "0x06984c3A9EB8e3A8df02A4C09770D5886185792D",
  },
  [NetworkId.MAINNET]: {
    DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
    OHM_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
    STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
    SOHM_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
    WSOHM_ADDRESS: "0xca76543cf381ebbb277be79574059e32108e3e65",
    OLD_SOHM_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
    BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
    CRUCIBLE_OHM_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
    LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
    MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
    REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
    FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
    FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    FUSE_36_SOHM: "0x252d447c54F33e033AD04048baEAdE7628cB1274", // Fraximalist Money Market
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
    BONDINGCALC_V2: "0x7b1a5649145143F4faD8504712ca9c614c3dA2Ae",
    MIGRATOR_ADDRESS: "0x184f3FAd8618a6F458C16bae63F70C426fE784B3",
    GOHM_ADDRESS: "0x0ab87046fBb341D058F17CBC4c1133F25a20a52f",
    OHM_V2: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
    TREASURY_V2: "0x9a315bdf513367c0377fb36545857d12e85813ef",
    SOHM_V2: "0x04906695D6D12CF5459975d7C3C03356E4Ccd460",
    STAKING_V2: "0xB63cac384247597756545b500253ff8E607a8020",
    FIATDAO_WSOHM_ADDRESS: "0xe98ae8cD25CDC06562c29231Db339d17D02Fd486",
    GIVING_ADDRESS: "0x2604170762A1dD22BB4F96C963043Cd4FC358f18",
  },
  [NetworkId.ARBITRUM]: {
    DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
    OHM_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
    STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
    SOHM_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
    OLD_SOHM_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
    BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
    WSOHM_ADDRESS: "0x739ca6D71365a08f584c8FC4e1029045Fa8ABC4B",
    MIGRATOR_ADDRESS: "0x1e7902a8b0adbf81042b5e30bdfa281f0b928d6d", // good
    GOHM_ADDRESS: "0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1", // good
    REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
  }, // TODO: Replace with Arbitrum contract addresses when ready
  [NetworkId.ARBITRUM_TESTNET]: {
    DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
    OHM_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
    STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
    SOHM_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
    OLD_SOHM_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
    BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
    // TODO (appleseed-lusd): swap this out
    PICKLE_OHM_LUSD_ADDRESS: "0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f",
    REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
  }, // TODO: Replace with Arbitrum Testnet contract addresses when ready
  [NetworkId.AVALANCHE_TESTNET]: {
    DAI_ADDRESS: "",
    OHM_ADDRESS: "",
    STAKING_ADDRESS: "", // The new staking contract
    STAKING_HELPER_ADDRESS: "", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "",
    SOHM_ADDRESS: "",
    OLD_SOHM_ADDRESS: "",
    PRESALE_ADDRESS: "",
    AOHM_ADDRESS: "",
    MIGRATE_ADDRESS: "",
    DISTRIBUTOR_ADDRESS: "",
    BONDINGCALC_ADDRESS: "",
    CIRCULATING_SUPPLY_ADDRESS: "",
    TREASURY_ADDRESS: "",
    PICKLE_OHM_LUSD_ADDRESS: "",
    REDEEM_HELPER_ADDRESS: "",
    // WSOHM_ADDRESS: "",
    // GOHM_ADDRESS: "",
    // MIGRATOR_ADDRESS: ""
  }, // TODO: Avalanche Testnet addresses
  [NetworkId.AVALANCHE]: {
    DAI_ADDRESS: "",
    OHM_ADDRESS: "",
    // STAKING_ADDRESS: "", // The new staking contract
    STAKING_HELPER_ADDRESS: "", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "",
    SOHM_ADDRESS: "",
    OLD_SOHM_ADDRESS: "",
    PRESALE_ADDRESS: "",
    AOHM_ADDRESS: "",
    MIGRATE_ADDRESS: "",
    DISTRIBUTOR_ADDRESS: "",
    BONDINGCALC_ADDRESS: "",
    CIRCULATING_SUPPLY_ADDRESS: "",
    TREASURY_ADDRESS: "",
    PICKLE_OHM_LUSD_ADDRESS: "",
    REDEEM_HELPER_ADDRESS: "",
    WSOHM_ADDRESS: "0x8cd309e14575203535ef120b5b0ab4dded0c2073",
    GOHM_ADDRESS: "0x321e7092a180bb43555132ec53aaa65a5bf84251",
    MIGRATOR_ADDRESS: "0xB10209BFbb37d38EC1B5F0c964e489564e223ea7",
  }, // TODO: Avalanche Mainnet addresses
  [NetworkId.POLYGON]: {
    GOHM_ADDRESS: "0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195",
  },
};

/**
 * Network details required to add a network to a user's wallet, as defined in EIP-3085 (https://eips.ethereum.org/EIPS/eip-3085)
 */

interface INativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

interface INetwork {
  chainName: string;
  chainId: number;
  nativeCurrency: INativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  image: SVGImageElement;
  imageAltText: string;
  uri: () => string;
}

// These networks will be available for users to select. Other networks may be functional
// (e.g. testnets, or mainnets being prepared for launch) but need to be selected directly via the wallet.
export const USER_SELECTABLE_NETWORKS = [NetworkId.MAINNET, NetworkId.ARBITRUM, NetworkId.AVALANCHE];

// Set this to the chain number of the most recently added network in order to enable the 'Now supporting X network'
// message in the UI. Set to -1 if we don't want to display the message at the current time.
export const NEWEST_NETWORK_ID = NetworkId.AVALANCHE;

export const NETWORKS: { [key: number]: INetwork } = {
  [NetworkId.MAINNET]: {
    chainName: "Ethereum",
    chainId: 1,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.MAINNET),
  },
  [NetworkId.TESTNET_RINKEBY]: {
    chainName: "Rinkeby Testnet",
    chainId: 4,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [""],
    blockExplorerUrls: ["https://rinkeby.etherscan.io/#/"],
    image: ethereum,
    imageAltText: "Ethereum Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.TESTNET_RINKEBY),
  },
  [NetworkId.ARBITRUM]: {
    chainName: "Arbitrum",
    chainId: 42161,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://explorer.arbitrum.io/#/"],
    image: arbitrum,
    imageAltText: "Arbitrum Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.ARBITRUM),
  },
  [NetworkId.ARBITRUM_TESTNET]: {
    chainName: "Arbitrum Testnet",
    chainId: 421611,
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/#/"],
    image: arbitrum,
    imageAltText: "Arbitrum Logo",
    uri: () => EnvHelper.alchemyArbitrumTestnetURI,
  },
  [NetworkId.AVALANCHE_TESTNET]: {
    chainName: "Avalanche Fuji Testnet",
    chainId: 43113,
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://testnet.snowtrace.io/#/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => EnvHelper.alchemyAvalancheTestnetURI,
  },
  [NetworkId.AVALANCHE]: {
    chainName: "Avalanche",
    chainId: 43114,
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.AVALANCHE),
  },
  [NetworkId.POLYGON]: {
    chainName: "Polygon",
    chainId: 137,
    nativeCurrency: {
      name: "Polygon",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com"],
    blockExplorerUrls: ["https://polygonscan.com/"],
    image: polygon,
    imageAltText: "Polygon Logo",
    uri: () => NodeHelper.getMainnetURI(NetworkId.POLYGON),
  },
  [NetworkId.POLYGON_TESTNET]: {
    chainName: "Polygon Mumbai Testnet",
    chainId: 80001,
    nativeCurrency: {
      name: "Polygon",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    image: polygon,
    imageAltText: "Polygon Logo",
    uri: () => "", // NodeHelper.getMainnetURI(NetworkId.POLYGON_TESTNET),
  },
};

// VIEWS FOR NETWORK is used to denote which paths should be viewable on each network
// ... attempting to prevent contract calls that can't complete & prevent user's from getting
// ... stuck on the wrong view
interface IViewsForNetwork {
  dashboard: boolean;
  stake: boolean;
  wrap: boolean;
  zap: boolean;
  threeTogether: boolean;
  bonds: boolean;
  network: boolean;
}

export const VIEWS_FOR_NETWORK: { [key: number]: IViewsForNetwork } = {
  [NetworkId.MAINNET]: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  [NetworkId.TESTNET_RINKEBY]: {
    dashboard: true,
    stake: true,
    wrap: true,
    zap: true,
    threeTogether: true,
    bonds: true,
    network: true,
  },
  [NetworkId.ARBITRUM]: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
  [NetworkId.ARBITRUM_TESTNET]: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
  [NetworkId.AVALANCHE]: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
  [NetworkId.AVALANCHE_TESTNET]: {
    dashboard: true,
    stake: false,
    wrap: true,
    zap: false,
    threeTogether: false,
    bonds: false,
    network: true,
  },
};