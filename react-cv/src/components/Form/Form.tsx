import { useForm, type SubmitHandler } from "react-hook-form";
import type { IFormValues } from "../../types/types";
import { Input } from "../Input";
import cls from './Form.module.css';
import { Textarea } from "../Textarea";

const Form = () => {
  const { register, formState: { errors },handleSubmit } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
      <Input name="name" label="Имя" register={register} required error={!!errors.name}/>
      <Input name="email" label="email" register={register} required error={!!errors.email}/>
      <Input name="subject" label="Тема" register={register} error={!!errors.subject}/>
      <Textarea name="message" label="Сообщение" register={register} required error={!!errors.message}/>
      <input className={cls['btn-submit']} type="submit"/>
    </form>
  );
};

export default Form;
