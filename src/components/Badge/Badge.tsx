import styles from './Badge.module.css'

interface BadgeProps {
  text: string
  color: string
}

const Badge = ({ text, color }: BadgeProps) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.badge}>{text}</div>
  )
}
export default Badge
