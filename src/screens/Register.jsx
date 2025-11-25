import { useState } from "react";
import Logo from "../components/Logo";
import { post } from "../services/api-services";
import { showErrorToast, showSuccessToast } from "../utils/toastUtils";
import { useNavigate } from "react-router-dom";
import { emailRegex, nameRegex, passwordRegex } from "../modules/regex";

// Register.jsx
export default function Register() {
  const [userData, setUserData] = useState({ fullName: "", email: "", password: "", cPassword: "" });
  const navigate = useNavigate();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    // console.log("Registered")
    if(userData?.password===userData?.cPassword){
      delete userData.cPassword;
      const res = await post("/Users", userData);
      if (res?.statusCode === 200) {
        showSuccessToast("User register succeessfully!");
        navigate("/");
      }
      else if (res?.statusCode === 422) {
        showErrorToast(res?.message);
      }
    }
    else{
      showErrorToast("Password and Confirm Password do not match.");
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={onSubmitForm}>
        <div>
          <Logo />
        </div>
        <br/>
        {/* <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Register</h2> */}

        <input
          type="text"
          placeholder="Full Name"
          value={userData?.fullName}
          required
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
          onChange={(e) => {
            const value = e.target.value;
            if (nameRegex.test(value) || value === "") {
              setUserData({ ...userData, fullName: value });
            }
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={userData?.email}
          required
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
          onChange={(e) => {
            const value = e.target.value;

            // Allow empty value (so user can clear input)
            if (emailRegex.test(value) || value === "") {
              setUserData({ ...userData, email: value });
            }
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={userData?.password}
          required
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
          onChange={(e) => {
            const value = e.target.value;

            if (passwordRegex.test(value) || value === "") {
              setUserData({ ...userData, password: value });
            }
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={userData?.cPassword}
          required
          className={`w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400
    ${userData.cPassword && userData.cPassword !== userData.password ? "border-red-500" : ""}`
          }
          onChange={(e) => {
            const value = e.target.value;

            // Allow only if matches regex OR empty (to clear input)
            if (passwordRegex.test(value) || value === "") {
              setUserData({ ...userData, cPassword: value });
            }
          }}
        />
{/* Helper Text */}
  {userData.cPassword &&
    userData.cPassword !== userData.password && (
      <p className="text-red-500 text-sm -mt-3">
        Password and Confirm Password do not match.
      </p>
    )}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 underline">Login</a>
        </p>
      </form>
    </div>
  );
}
