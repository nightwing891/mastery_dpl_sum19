import React from 'react'

const SearchSuggestions = (props) => {

  if(props.results.length > 0) {
    const options = props.results.map(r => (
      <li key={r.id}>
      Test
        {r.title}
      </li>
    ))
    return <ul>{options}</ul>
  }
  return <></>
}

export default SearchSuggestions