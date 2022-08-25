import { HTMLProps } from 'react'
import styles from './IconButton.module.css'

interface IconButtonProps extends HTMLProps<HTMLButtonElement> {
  icon: JSX.Element
  extraClasses?: string
}

const IconButton = ({ icon, onClick, extraClasses = '' }: IconButtonProps) => {
  return (
    <button tabIndex={-1} className={`${styles.iconButton} ${extraClasses}`} onClick={onClick} type='button'>
      { icon }
    </button>
  )
}
export default IconButton
