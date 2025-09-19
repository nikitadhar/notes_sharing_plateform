import Logo from "../components/Logo";

// Register.jsx
export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <div>
        <Logo />
      </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-blue-400"
        />

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
