// Login.jsx
export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Login</h2>

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
