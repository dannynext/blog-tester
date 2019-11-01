import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import SeoHelper from 'src/components/SeoHelper'
import BlogRoll from 'src/components/BlogRoll'

const EngineeringPostsPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SeoHelper title="Engineering" />
      <h1>Engineering</h1>
      <BlogRoll posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query EngineeringPostsQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          category: { eq: "engineering" }
        }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          fields {
            slug
            authorName
            authorThumbnail {
              publicURL
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            featuredimage {
              childImageSharp {
                fluid(
                  maxWidth: 640
                  maxHeight: 470
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default EngineeringPostsPage
