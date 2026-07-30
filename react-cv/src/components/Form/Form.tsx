import { useForm, type SubmitHandler } from "react-hook-form";
import type { IFormValues } from "../../types/types";
import { Input } from "../Input";
import { Button } from "../Button";
import cls from './Form.module.css';

const Form = () => {
  const { register, handleSubmit } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
      <Input name="name" label="Имя" register={register} required/>
      <Input name="email" label="email" register={register} required/>
      <Input name="subject" label="Тема" register={register} required/>
      <Input name="message" label="Сообщение" register={register} required/>
      <Button>Написать мне</Button>
    </form>
  );
};

export default Form;
