export const pagesPath = {
  "distributed_medical_datebase": {
    $url: (url?: { hash?: string }) => ({ pathname: '/distributed-medical-datebase' as const, hash: url?.hash })
  },
  "eth_dapp": {
    $url: (url?: { hash?: string }) => ({ pathname: '/eth-dapp' as const, hash: url?.hash })
  },
  "eth_nft_collection": {
    $url: (url?: { hash?: string }) => ({ pathname: '/eth-nft-collection' as const, hash: url?.hash })
  },
  "eth_nft_game": {
    $url: (url?: { hash?: string }) => ({ pathname: '/eth-nft-game' as const, hash: url?.hash })
  },
  "polygon_generative_nft": {
    $url: (url?: { hash?: string }) => ({ pathname: '/polygon-generative-nft' as const, hash: url?.hash })
  },
  "smart_government": {
    $url: (url?: { hash?: string }) => ({ pathname: '/smart-government' as const, hash: url?.hash })
  },
  "social_network_3": {
    $url: (url?: { hash?: string }) => ({ pathname: '/social-network-3' as const, hash: url?.hash })
  },
  "solana_nft_drop": {
    $url: (url?: { hash?: string }) => ({ pathname: '/solana-nft-drop' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
