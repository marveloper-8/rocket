import React, {useState} from 'react'
// styles
import './style/style.scss'

const Text = e => {
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
        <input 
            type={e.type}
            placeholder={e.placeholder}
            value={e.value}
            // eslint-disable-next-line no-sequences
            onChange={e.onChange, i => setProperties(i.target.value)}
            name={e.name}
            required={e.required}
            onFocus={() => setFocus(true)}
            onBlur={properties.length > 0 ? {} : () => setFocus(false)}
            autocomplete="off"
        />
    </div>
}

export default Text
