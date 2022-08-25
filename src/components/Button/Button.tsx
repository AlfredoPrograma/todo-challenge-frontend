import { HTMLProps } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick?: () => void
  extraClasses?: string
  children: JSX.Element | JSX.Element[] | string
}
const Button = ({ onClick, children, extraClasses = '' }: ButtonProps) => {
  return (
    <button tabIndex={-1} className={`${styles.button} ${extraClasses}`} onClick={onClick}>
      { children }
    </button>
  )
}
export default Button
