import type { Path, UseFormRegister } from "react-hook-form";
import type { IFormValues } from "../../types/types";
import cls from './Textarea.module.css';

type TextareaProps = {
  label: string;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error: boolean
};

const Textarea = ({label, name, register, required, error}: TextareaProps) => {
  return (
    <div className={cls.field}>
      <label htmlFor={name} className={cls.label}>{label}</label>
      <textarea rows={6} name={name} id={name} {...register(name, {required})} className={`${cls.textarea} ${error && cls.error}`}></textarea>
      <span className={`${cls['error-message']} ${error && cls.visible}`}>Введите {label}</span>
    </div>
  )
}

export default Textarea;