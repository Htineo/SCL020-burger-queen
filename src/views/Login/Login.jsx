import Button from "../../componentes/common/Button";
import Input from "@material-tailwind/react/components/Input";
const Login = () => {
  const handlerSubmit = () => {
    console.log("key, bella");
  };
  return (
    <div className="bg-[url('./src/assets/fondo.jpg')] w-screen h-screen">
      <div className="flex flex-col items-center">
        <img
          className=" w-32 h-32 mt-10"
          src={"./src/assets/Logo.png"}
          alt=""
        />
        <span className="text-xs font-bold text-black">Fusión Queen</span>
      </div>
      <form className="mt-8 w-40 space-y-6 ">
        <Input type={"text"} placeholder={"E-mail"} />
        <Input type={"password"} placeholder={"Contraseña"} />
        <Button label={"Iniciar Sesión"} onClick={handlerSubmit} />
      </form>
    </div>
  );
};
export default Login;
