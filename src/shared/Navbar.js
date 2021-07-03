import * as React from 'react'
import { NavLink } from 'react-router-dom'

const languages = [
  {
    name: 'All',
    param: 'all'
  },
  {
    name: 'JavaScript',
    param: 'javascript',
  },
  {
    name: 'Ruby',
    param: 'ruby',
  },
  {
    name: 'Python',
    param: 'python',
  },
  {
    name: 'Java',
    param: 'java',
  }
]

export default function Navbar () {
  return (
    <ul className='nav'>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`/popular/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}