const _ = require('lodash')
const path = require('path')
const {
  createFilePath,
} = require('gatsby-source-filesystem')
const {
  fmImagesToRelative,
} = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allPosts: allMarkdownRemark(limit: 1000) {
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
              tags
              templateKey
              author
              title
            }
          }
        }
      }
      allAuthors: allMarkdownRemark(filter: {frontmatter: {templateKey: { eq: "author" }}}) {
        edges {
          node {
            frontmatter {
              title
              thumbnail {
                publicURL
              }
            }
          }
        }
      }
    }

  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e =>
        console.error(e.toString())
      )
      return Promise.reject(result.errors)
    }

    const posts = result.data.allPosts.edges
    const authorData = result.data.allAuthors.edges

    posts.forEach(edge => {
      let authorName = null
      const {
        node: {
          frontmatter: {
            templateKey,
            author,
            title
          }
        }
      } = edge

      const isBlogPost = templateKey === 'blog-post'
      const isAuthor = templateKey === 'author'
      if (isBlogPost) {
        authorName = author
      } else if (isAuthor) {
        authorName = title
      }

      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(
            templateKey
          )}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          authorName,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = ({ getNodes, actions }) => {
  const nodes = getNodes()
  const authors = nodes.filter(node => node.frontmatter && node.frontmatter.templateKey === 'author')

  let authorThumbnailMap = {}
  authors.forEach(author => {
    authorThumbnailMap[author.frontmatter.title] = author.frontmatter.thumbnail
  })

  const { createNodeField } = actions

  nodes.forEach(node => {
    if (node.frontmatter && node.frontmatter.templateKey === 'blog-post') {
      createNodeField({
        node,
        name: 'authorName',
        value: node.frontmatter.author
      })

      createNodeField({
        node,
        name: 'authorThumbnail',
        value: authorThumbnailMap[node.frontmatter.author]
      })
    }
  })
}
