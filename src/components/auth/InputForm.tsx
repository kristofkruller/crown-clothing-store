import { InputHTMLAttributes, FC } from "react"

import "./inputForm.scss"

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const InputForm: FC<FormInputProps> = ({label, ...inputFields}) => {
  return (
    <div className='group'>
        <input className='form-input' {...inputFields} />
        {label && (
            <label className={`${inputFields.value && "shrink"} form-input-label`}>{label}</label>
        )}
    </div>
  )
}

export default InputForm