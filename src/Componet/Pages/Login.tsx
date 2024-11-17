import LoginForm from "../Forms/Login/LoginForm";

const Login = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const appVersion = process.env.REACT_APP_VERSION;

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white ">
      <p>{apiUrl}</p>
      <LoginForm />
    </div>
  );
};

export default Login;
