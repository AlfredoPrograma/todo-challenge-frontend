import { ChangeEvent, HTMLProps } from 'react'
import styles from './TextInput.module.css'

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  id: string
  name: string
  label?: string
}

const TextInput = ({ id, name, label, onChange, ...delegated }: TextInputProps) => {
  return (
    <div className={styles.container}>
      { label && <label className={styles.label} htmlFor={id}>{label}</label> }
      <input className={styles.input} id={id} name={name} onChange={onChange} {...delegated} />
    </div>
  )
}
export default TextInput
