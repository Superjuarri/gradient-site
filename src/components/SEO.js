import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, url, description, name, username, lang }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultName,
          defaultUsername,
        },
      },
    }) => {
      const seo = {
        title: `${defaultTitle} | ${title}` || defaultTitle,
        url: `${url}`,
        description: description || defaultDescription,
        name: name || defaultName,
        username: username || defaultUsername,
      }
      return (
        <>
          <Helmet
            title={seo.title}
            htmlAttributes={{
              lang,
            }}
          >
            <link rel="canonical" href={seo.url} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
          </Helmet>
        </>
      )
    }}
  />
)
export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  lang: `en`,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        url
        defaultDescription: description
        defaultName: name
        defaultUsername: username
      }
    }
  }
`
