import React, {useState} from 'react'
// styles
import './style/style.scss'

const Select = e => {
    const [focus, setFocus] = useState(false)
    const [properties, setProperties] = useState('')

    console.log(properties)

    return <div className={`text-input ${e.styling}`}>
        <div className={focus ? `label-2 ${e.label_styling}` : `label ${e.label_styling}`}>
            {e.label} &nbsp;
            {e.required 
                ? <span className="required">*</span> 
                : ''
            }
        </div>
        <select
            // eslint-disable-next-line no-sequences
            onChange={e.onChange, i => setProperties(i.target.value)}
            name={e.name}
            required={e.required}
            onFocus={() => setFocus(true)}
            value={e.value}
            onBlur={properties.length > 0 ? {} : () => setFocus(false)}
        >
            <option key={null} value={null}></option>
            {
                e.options.map(item => {
                    return (
                        <option 
                            key={item.value} 
                            value={item.value}
                        >
                            {item.name}
                        </option>
                    )
                })
            }
        </select>
    </div>
}

export default Select
