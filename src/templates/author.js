import * as React from 'react'
import Layout from 'src/components/Layout'
import AuthorInfo from 'src/components/AuthorInfo'
import BlogRoll from 'src/components/BlogRoll'

import { graphql } from 'gatsby'

import * as grid from 'src/css/grid.module.css'
import * as style from './author-style.module.css'

export default function AuthorPage({ data }) {
  const {
    author: { frontmatter: author },
    authorPosts: { edges: posts },
  } = data
  const { title } = author

  return (
    <Layout fullWidth>
      <div className={style.author}>
        <div className={grid.container_small}>
          <h2>
            All Posts by{' '}
            <span className={style.name}>{title}</span>
          </h2>
          <AuthorInfo author={author} />
        </div>
      </div>
      <div className={grid.container}>
        <BlogRoll posts={posts} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AuthorPostsByID($id: String!, $authorName: String) {
    author: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        github
        twitter
        description
        position
        thumbnail {
          publicURL
        }
      }
    }
    authorPosts: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          author: { eq: $authorName }
        }
      }
    ) {
      edges {
        node {
          id
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
            category
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
