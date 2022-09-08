import React, {useState} from 'react'
// styles
import './style/style.scss'

const Search = e => {
    const [focus, setFocus] = useState(false)
    const [properties, setProperties] = useState('')

    console.log(properties)

    return <span className="search-input">
        <img src={e.image} alt="icon" />
        <input 
            type={e.type}
            placeholder={e.placeholder}
            value={e.value}
            // eslint-disable-next-line no-sequences
            onChange={e.onChange, i => setProperties(i.target.value)}
            name={e.name}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        />
        <div className={focus ? "border border-active" : "border"}></div>
    </span>
}

export default Search
