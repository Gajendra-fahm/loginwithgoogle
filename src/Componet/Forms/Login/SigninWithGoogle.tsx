
import {useGoogleLogin} from "@react-oauth/google"
import { googleAuth } from "../../API/api";
import { useNavigate } from "react-router-dom";
const SigninWithGoogle = () => {

    const navigate = useNavigate()
    const responseGoogle = async (authResult:any)=>{
        console.log("authResult", authResult);
        try {
            if(authResult['code']){
                const result = await googleAuth(authResult["code"]);
                
        const { name, email, image } = result.data.user;
        const token = result.data.token;
        const obj ={name, email, image , token}
        localStorage.setItem("user-info", JSON.stringify(obj))
        
        navigate("/dashboard")
            }
        } catch (error) {
            
        }
        
    }

    const handleSigninwithGoogle = useGoogleLogin({
        onSuccess:responseGoogle,
        onError:responseGoogle,
        flow:"auth-code"
    })
  return (
    <div 
    onClick={handleSigninwithGoogle} className=" w-full flex items-center justify-center gap-3 border cursor-pointer rounded px-2 py-2 ">
      <img src="/images/Social icon.png" alt="" className="h-5" />
      <p>Sign in With Google</p>
    </div>
  );
};

export default SigninWithGoogle;
