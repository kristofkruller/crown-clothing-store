import React from 'react'
import "./inputForm.scss"

const InputForm = ({label, ...inputFields}) => {
  return (
    <div className='group'>
        <input className='form-input' {...inputFields} />
        {label && (
            <label className={`${inputFields.value.length ? "shrink" : null} form-input-label`}>{label}</label>
        )}
    </div>
  )
}

export default InputForm