import * as React from 'react'
import { useParams } from 'react-router-dom'

export default function Grid ({ fetchInitialData, data }) {
  const [repos, setRepos] = React.useState(() => {
    return __isBrowser__
      ? window.__INITIAL_DATA__
      : data
  })

  const [loading, setLoading] = React.useState(
    repos ? false : true
  )

  const fetchNewRepos = React.useRef(
    repos ? false : true
  )

  const { id } = useParams()

  React.useEffect(() => {
    if (fetchNewRepos.current === true) {
      setLoading(true)

      fetchInitialData(id)
        .then((repos) => {
          setRepos(repos)
          setLoading(false)
        })
    } else {
      fetchNewRepos.current = true
    }
  }, [id, fetchNewRepos])

  if (loading === true) {
    return <i className='loading'>🤹‍♂️</i>
  }

  return (
    <ul className='grid'>
      {repos.map(({ name, owner, stargazers_count, html_url }, i) => (
        <li key={name}>
          <h2>#{i+1}</h2>
          <h3><a href={html_url}>{name}</a></h3>
          <p>by <a href={`https://github.com/${owner.login}`}>@{owner.login}</a></p>
          <p>{stargazers_count.toLocaleString()} stars</p>
        </li>
      ))}
    </ul>
  )
}