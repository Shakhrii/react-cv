import cls from './Button.module.css';

type ButtonProps = React.PropsWithChildren<{
    onClick?: () => void
}>

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className={cls.button}>
        {children}
    </button>
  )
}
export default Button;