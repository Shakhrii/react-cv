import cls from './Icon.module.css';
type IconProps = React.PropsWithChildren<{
    onClick?: () => void;
}>

const Icon = ({children, onClick} : IconProps) => {
  return <button onClick={onClick} className={cls.icon}>{children}</button>;
}

export default Icon;