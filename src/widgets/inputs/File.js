import React from 'react'
// styles
import './style/style.scss'

const File = e => {

    return <div className={`text-input ${e.styling}`}>
        <div className={`label-2 ${e.label_styling}`}>
            {e.label} &nbsp;
            {e.required 
                ? <span className="required">*</span> 
                : ''
            }
        </div>
        <input 
            type={e.type}
            name={e.name}
            required={e.required}
        ></input>
    </div>
}

export default File
