import { useStaticQuery, graphql } from 'gatsby'

export const useGradientData = () => {
  const { allMongodbMainGradients } = useStaticQuery(
    graphql`
      {
        allMongodbMainGradients {
          nodes {
            degree
            gradient
            mongodb_id
          }
        }
      }
    `
  )

  return { allMongodbMainGradients }
}
