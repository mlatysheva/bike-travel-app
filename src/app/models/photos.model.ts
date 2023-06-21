export interface IPhoto {
  id: number,
  is_blessed?: boolean,
  album?: string,
  caption?: string,
  published_date?: string,
  images?: {
    additionalProp?: {
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
