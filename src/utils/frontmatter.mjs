import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export const remarkReadingTime = () => (tree, { data }) => {
  const text = toString(tree)
  const readingTime = Math.ceil(getReadingTime(text).minutes)
  data.astro.frontmatter.readingTime = readingTime
}
