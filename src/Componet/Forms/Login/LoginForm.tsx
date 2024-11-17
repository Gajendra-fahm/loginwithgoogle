import { SubmitHandler, useForm } from "react-hook-form";
import SigninWithGoogle from "./SigninWithGoogle";

interface IFormInput {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="w-[30%]  border px-2 py-2 rounded">
      <h2 className="mb-3">User Login </h2>

      <form method="POST" action="#" className=" space-y-6 " onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full flex flex-col  gap-4">
          <input
            {...register("username")}
            placeholder="username"
            className=" border rounded px-3 py-1"
          />
          <input
            {...register("password")}
            placeholder="password"
            className=" border rounded px-3 py-1 "
          />
          <button type="submit" className=" bg-zinc-600 text-white px-3 py-1  border rounded  ">Login</button>
         <SigninWithGoogle/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
