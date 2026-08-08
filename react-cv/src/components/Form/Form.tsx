import { useForm, type SubmitHandler } from "react-hook-form";
import type { IFormValues } from "../../types/types";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import cls from "./Form.module.css";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    try {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      );

      toast("Сообщение отправлено!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
        <Input
          name="name"
          label="Имя"
          register={register}
          required
          error={!!errors.name}
        />
        <Input
          name="email"
          label="email"
          register={register}
          required
          error={!!errors.email}
        />
        <Input
          name="subject"
          label="Тема"
          register={register}
          error={!!errors.subject}
        />
        <Textarea
          name="message"
          label="Сообщение"
          register={register}
          required
          error={!!errors.message}
        />
        <input className={cls["btn-submit"]} type="submit" />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="dark"
      />
    </>
  );
};

export default Form;
