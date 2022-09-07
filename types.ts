export type Themes = 'GitHub' | 'Halloween' | 'GitLab' | 'GitHubDark' | 'Dracula'

export interface Theme {
  name: Themes
  textColor: string
  levelColors: [
    string, // level 0
    string, // level 1
    string, // level 2
    string, // level 3
    string //  level 4
  ]
  background: string
  mode?: 'light' | 'dark'
}

export interface Contribution {
  week: number
  days: { count: number; level: number }[]
}

export interface RemoteContribution {
  week: number
  days: { count: number }[]
}

export interface RemoteData {
  username: string
  year: string
  min: number
  max: number
  median: number
  contributions?: RemoteContribution[]
  p80: number
  p90: number
  p99: number
}

export interface ErrorData {
  message?: string
}

export interface GraphData {
  username: RemoteData['username']
  data: RemoteData[]
}

export type GraphSize = 'normal' | 'medium' | 'large'

export interface GraphSettings {
  size?: GraphSize
  showOrigin?: boolean
  theme?: Themes
}
