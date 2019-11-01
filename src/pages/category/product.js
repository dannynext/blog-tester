import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import SeoHelper from 'src/components/SeoHelper'
import BlogRoll from 'src/components/BlogRoll'

const ProductPostsPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SeoHelper title="Product" />
      <h1>Product</h1>
      <BlogRoll posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query ProductPostsQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          category: { eq: "product" }
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

export default ProductPostsPage
