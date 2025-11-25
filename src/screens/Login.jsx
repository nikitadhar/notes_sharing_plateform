import { useRecoilState } from "recoil";
import { useState } from "react";
import Logo from "../components/Logo";
import { emailRegex, passwordRegex } from "../modules/regex";
import { post } from "../services/api-services";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "../utils/toastUtils";
import { adminAuthState } from "../services/RecoilService";
// Login.jsx
 function Login() {
  // const [authState, setAuthState] = useRecoilState(adminAuthState);  
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate=useNavigate()
  const onSubmitForm=async(e)=>{
    console.log("cdc")
    e.preventDefault();
    const res=await post("Users/login",{"email":"nikitadhar142017@gmail.com",
"password":"123456"});
    console.log("res/.....",res)
      if (res?.statusCode === 200) {
      // setAuthState(res?.data);
      const userId = res?.data?.userId;
      showSuccessToast("User loggedin succeessfully!");
      navigate("/dash");
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={onSubmitForm}>
        <div>
          <Logo />
        </div>
        <br />
        {/* <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Login</h2> */}

        <input
          type="email"
          placeholder="Email"
          value={userData?.email}
          required
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
          onChange={(e) => {
            const value = e.target.value;
            if (emailRegex.test(value) || value === "") {
              setUserData({ ...userData, email: value });
            }
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={userData?.password}
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
          onChange={(e) => {
                      const value = e.target.value;
          
                      if (passwordRegex.test(value) || value === "") {
                        setUserData({ ...userData, password: value });
                      }
                    }}   
       />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Don't have an account? <a href="register" className="text-blue-500 underline">Register</a>
        </p>
      </form>
    </div>
  );
}
export default Login;