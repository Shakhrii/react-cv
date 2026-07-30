import type { Path, UseFormRegister } from "react-hook-form";
import type { IFormValues } from "../../types/types";
import cls from './Input.module.css';

type InputProps = {
  label: string;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const Input = ({ label, name, register, required }: InputProps) => {
  return (
    <div className={cls.field}>
      <label htmlFor={name} className={cls.label}>{label}</label>
      <input className={cls.input} id={name} type="text" {...register(name, { required })} />
    </div>
  );
};

export default Input;
