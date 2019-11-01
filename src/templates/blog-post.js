import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { authorType } from '../types/author'

import { graphql } from 'gatsby'

import Layout from 'src/components/Layout/index'
import AuthorInfo from 'src/components/AuthorInfo'
import SeoHelper from 'src/components/SeoHelper'
import Content, {
  HTMLContent,
} from 'src/components/Content'
import JobListings from 'src/components/JobListings'
import PostHeader from '../components/PostHeader'
import RelatedArticles from 'src/components/RelatedArticles'

import * as grid from 'src/css/grid.module.css'
import * as style from './blog-style.module.css'

export const BlogPostTemplate = ({
  title,
  date,
  author,
  image,
  content,
  contentComponent,
  jobListings,
}) => {
  const PostContent = contentComponent || Content

  const wrapperClass = cn(
    style.post_wrapper,
    jobListings && style.split
  )

  return (
    <>
      <PostHeader
        title={title}
        author={author}
        date={date}
        image={image}
      />
      <div className={wrapperClass}>
        <PostContent
          content={content}
          className={!jobListings ? style.post : null}
        />
        {jobListings && jobListings}
      </div>
    </>
  )
}

BlogPostTemplate.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  author: authorType,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  jobListings: PropTypes.node,
}

const BlogPost = ({ data }) => {
  const { post, author, relatedArticles } = data

  const {
    title,
    description,
    featuredimage,
    date,
  } = post.frontmatter

  return (
    <Layout fullWidth>
      <SeoHelper
        title={title}
        description={description}
        imageSrc={featuredimage.childImageSharp.resize.src}
      />
      <BlogPostTemplate
        title={title}
        date={date}
        author={author.frontmatter}
        image={featuredimage.childImageSharp.fluid}
        contentComponent={HTMLContent}
        content={post.html}
        description={description}
        jobListings={
          <JobListings className={style.listing} />
        }
      />
      <div className={style.author}>
        <div className={grid.container_small}>
          <h2>About the Author</h2>
          <AuthorInfo author={author.frontmatter} />
        </div>
      </div>
      <div className={grid.container}>
        <RelatedArticles posts={relatedArticles.edges} />
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $authorName: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 1200, height: 675) {
              src
            }
          }
        }
      }
    }
    relatedArticles: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" } }
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
    author: markdownRemark(
      frontmatter: {
        templateKey: { eq: "author" }
        title: { eq: $authorName }
      }
    ) {
      frontmatter {
        description
        github
        title
        twitter
        position
        thumbnail {
          publicURL
        }
      }
    }
  }
`
