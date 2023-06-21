export interface IPhoto {
  id: number,
  is_blessed?: boolean,
  album?: string,
  caption?: string,
  published_date?: string,
  images?: {
    thumbnail?: {
      width?: number,
      url?: string,
      height?: number
    },
    medium?: {
      width?: number,
      url?: string,
      height?: number
    },
    large?: {
      width?: number,
      url?: string,
      height?: number
    }
  },
  source?: {
    name?: string,
    localized_name?: string
  },
  user?: {
    username?: string,
    review_count?: number,
    reviewer_badge?: string
  }
}
