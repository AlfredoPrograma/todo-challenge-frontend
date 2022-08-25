import { ChangeEvent, HTMLProps } from 'react'
import styles from './Select.module.css'

interface SelectOption {
  text: string
  value: string
}

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: SelectOption[]
  id: string
  name: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  label?: string
}

const Select = ({ options, label, id, name, onChange, ...delegated }: SelectProps) => {
  return (
    <div className={styles.container}>
      { label && <label className={styles.label} htmlFor={id}>{label}</label> }
      <select className={styles.select} id={id} name={name} onChange={onChange} {...delegated}>
        { options.map(_option => <option key={_option.value} value={_option.value}>{_option.text}</option>)}
      </select>
    </div>
  )
}
export type { SelectOption }
export default Select
