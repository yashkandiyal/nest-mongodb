import React, { useState } from "react";
import ThemeToggle from "./ToggleThemeButton";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password:string) => {
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (strongPassword.test(password)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
    } else if (passwordStrength === "Weak") {
      setError("Password is not strong enough.");
    } else {
      setError("");
      // Handle successful registration
      alert("Registration successful!");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col  items-center justify-center">
        <ThemeToggle />
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mt-3">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 dark:text-gray-200">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-600 dark:text-gray-300 mb-2"
                htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 dark:text-gray-300 mb-2"
                htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                required
              />
              <p
                className={`mt-2 ${
                  passwordStrength === "Strong"
                    ? "text-green-500"
                    : "text-red-500"
                }`}>
                {passwordStrength && `Password strength: ${passwordStrength}`}
              </p>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-600 dark:text-gray-300 mb-2"
                htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                required
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-300">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
