import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Auth = ({ type }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setPostInputs({ ...postInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === 'signin') {
      try {
        const response = await fetch('http://127.0.0.1:8787/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: postInputs.email,
            password: postInputs.password
          })
        });
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);  // Store token in localStorage
          navigate('/movies');
        } else {
          alert(data.message || 'Signin failed');
        }
      } catch (err) {
        console.error(err);
        alert('Error occurred during signin');
      }
    
    } else {
      try {
        const response = await fetch('http://127.0.0.1:8787/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: postInputs.name,
            email: postInputs.email,
            password: postInputs.password
          })
        });
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate('/movies');
        } else {
          alert(data.message || 'Signup failed');
        }
      } catch (err) {
        console.error(err);
        alert('Error occurred during signup');
      }
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-4xl font-extrabold">
              {type === "signup" ? "Create Account" : "Sign In"}
            </div>
            <div className="text-slate-500">
              {type === "signin" ? (
                <span>
                  Don't have an account?{" "}
                  <Link
                    className="pl-2 underline text-blue-500"
                    to={type === "signin" ? "/signup" : "/signin"}
                  >
                    Sign up
                  </Link>
                </span>
              ) : (
                <span>
                  Already have an account?{" "}
                  <Link
                    className="pl-2 underline text-blue-500"
                    to={type === "signin" ? "/signup" : "/signin"}
                  >
                    Sign in
                  </Link>
                </span>
              )}
            </div>
          </div>
          <div className="pt-8">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Name"
                name="name"
                value={postInputs.name}
                onChange={handleInputChange}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="Email"
              name="email"
              value={postInputs.email}
              onChange={handleInputChange}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={postInputs.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={handleSubmit}
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LabelledInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold text-black pt-4">
        {label}
      </label>
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Auth;