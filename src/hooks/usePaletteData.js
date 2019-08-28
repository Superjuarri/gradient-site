import { graphql, useStaticQuery } from 'gatsby'
export const usePaletteData = () => {
  const { allMongodbMainPalettes } = useStaticQuery(
    graphql`
      query Palettes {
        allMongodbMainPalettes {
          nodes {
            mongodb_id
            name
            colors
          }
        }
      }
    `
  )
  return { allMongodbMainPalettes }
}
