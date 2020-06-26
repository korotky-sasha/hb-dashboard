export interface Article {
  headline: string,
  date: Date,
  image_src: string
}

export interface Statistic {
  name: string,
  number: number,
  image_src: string,
  line_color: string,
  hover: boolean
}
