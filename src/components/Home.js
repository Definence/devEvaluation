import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const Home = ({ history }) => {
  const [country, changeCountry] = useState('')
  const isDisabled = country === ''
  const onChange = ({ target: { value } }) => changeCountry(value)
  const onSubmit = (e) => {
    e.preventDefault()
    history.push(`/countries/${country}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Enter country' value={country} onChange={onChange} />
      <button disabled={isDisabled}>Submit</button>
    </form>
  )
}

export default withRouter(Home)
