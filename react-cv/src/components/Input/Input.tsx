import type { Path, UseFormRegister } from "react-hook-form";
import type { IFormValues } from "../../types/types";
import cls from './Input.module.css';

type InputProps = {
  label: string;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  error: boolean
};

const Input = ({ label, name, register, required, error }: InputProps) => {
  return (
    <div className={cls.field}>
      <label htmlFor={name} className={cls.label}>{label}</label>
      <input className={`${cls.input} ${error && cls.error}`} id={name} type="text" {...register(name, { required })}/>
      <span className={`${cls.errorMessage} ${error && cls.visible}`}>Введите {label}</span>
    </div>
  );
};

export default Input;
