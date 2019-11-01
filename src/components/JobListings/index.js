import * as React from 'react'
import { kebabCase } from 'lodash'
import JobListing from './JobListing'
import classnames from 'classnames'
import * as style from './style.module.css'

// Prevents build from returning errors
const fetch =
  typeof window !== `undefined`
    ? require('node-fetch')
    : null

const url = `https://api.lever.co/v0/postings/nexttrucking?department=Engineering&limit=6`

const formatJobs = jobsArray => {
  const formattedJobs = jobsArray.map(job => {
    const {
      text,
      hostedUrl,
      categories: { location },
    } = job
    return { title: text, url: hostedUrl, location }
  })
  return formattedJobs
}

export default function JobListings({ className }) {
  const [jobs, setJobs] = React.useState()

  const fetchJobs = async endPoint => {
    const response = await fetch(endPoint)
    const data = await response.json()
    setJobs(formatJobs(data))
  }

  React.useEffect(() => {
    fetchJobs(url)
  }, [])

  const jobListingClass = classnames(
    className && className,
    style.wrapper
  )
  return (
    <div className={jobListingClass}>
      <h4 className={style.title}>Join our team!</h4>
      {jobs ? (
        jobs.map(job => (
          <JobListing
            key={`${kebabCase(job.url)}`}
            job={job}
          />
        ))
      ) : (
        <p className={style.loading}>Loading...</p>
      )}

      <a
        href="https://www.nexttrucking.com/careers/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.button}
      >
        View Open Postions
      </a>
    </div>
  )
}
