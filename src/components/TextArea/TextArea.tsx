import { ChangeEvent, HTMLProps } from 'react'
import styles from './TextArea.module.css'

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  id: string
  name: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  label?: string
}
const TextArea = ({ id, name, onChange, label, ...delegated }: TextAreaProps) => {
  return (
    <div className={styles.container}>
      { label && <label className={styles.label} htmlFor={id}>{label}</label> }
      <textarea className={styles.textarea} id={id} name={name} onChange={onChange} {...delegated} />
    </div>
  )
}
export default TextArea
