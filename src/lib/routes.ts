import { IconProp } from "@fortawesome/fontawesome-svg-core"

export const ROUTE_ITEMS = {
  OVERVIEW: { 
    icon: ['fas', 'home'] as IconProp,
    link: '/',
    text: 'Acceuil'
  },
  PLAYERS: { 
    icon: ['fas', 'user'] as IconProp,
    link: '/players',
    text: 'Players'
  },
  MATCHS: { 
    icon: ['fas', 'basketball'] as IconProp,
    text: 'Matches', 
    link: '/matches' 
  }
}
