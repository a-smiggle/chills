import React, { Fragment, useEffect, useState } from "react";

export default function ModalLogin({ open, toggle }) {
  // Providers
  const PROVIDERS = { google: true, github: true, apple: true, facebook: true };

  // Variables
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [emailOk, setEmailOk] = useState(false);
  const [login, setLogin] = useState(true);
  const [forgotten, setForgotten] = useState(false);

  // Interaction Functions
  const isValidEmail = () => {
    setEmailOk(!/\S+@\S+\.\S+/.test(email));
  };
  const handleSignupProvider = async (provider) => {
    if (provider === "google") {
      // Do something
    }
    if (provider === "github") {
      // Do something
    }
    if (provider === "apple") {
      // Do something
    }
    if (provider === "facebook") {
      // Do something
    }
  };
  const handleSignUp = async () => {};
  const handleLoginProvider = async (provider) => {
    if (provider === "google") {
      // Do something
    }
    if (provider === "github") {
      // Do something
    }
    if (provider === "apple") {
      // Do something
    }
    if (provider === "facebook") {
      // Do something
    }
  };
  const handleLoginEmail = async () => {};
  const handleForgottenPassword = async () => {};

  // Effects
  useEffect(() => {
    if (password === cPassword) {
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  }, [password, cPassword]);

  useEffect(() => {
    isValidEmail();
  }, [email]);

  // UI Functions

  function ProviderButtonsLogin(provider) {
    if (provider === "google") {
      return (
        <button
          onClick={async () => handleLoginProvider(provider)}
          className="w-full justify-center border border-emerald-500 rounded p-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-110"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
        </button>
      );
    }
    if (provider === "github") {
      return (
        <button
          className="w-full justify-center border border-emerald-500 rounded p-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-110"
          onClick={async () => handleLoginProvider(provider)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
          </svg>
        </button>
      );
    }
    if (provider === "apple") {
      return (
        <button
          className="w-full justify-center border border-emerald-500 rounded p-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-110"
          onClick={async () => handleLoginProvider(provider)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"></path>
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"></path>
          </svg>
        </button>
      );
    }
    if (provider === "facebook") {
      return (
        <button
          className="w-full justify-center border border-emerald-500 rounded p-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-110"
          onClick={async () => handleLoginProvider(provider)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
          </svg>
        </button>
      );
    }
  }

  function ProviderButtonsSignup(provider) {
    if (provider === "google") {
      return (
        <button
          onClick={async () => handleSignupProvider(provider)}
          className="w-full justify-center border border-emerald-500 rounded p-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-110"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
        </button>
      );
    }
    if (provider === "github") {
      return (
        <button
          className="w-full justify-center border border-emerald-500 rounded p-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-110"
          onClick={async () => handleSignupProvider(provider)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
          </svg>
        </button>
      );
    }
    if (provider === "apple") {
      return (
        <button
          className="w-full justify-center border border-emerald-500 rounded p-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-110"
          onClick={async () => handleSignupProvider(provider)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"></path>
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"></path>
          </svg>
        </button>
      );
    }
    if (provider === "facebook") {
      return (
        <button
          className="w-full justify-center border border-emerald-500 rounded p-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-110"
          onClick={async () => handleSignupProvider(provider)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
          </svg>
        </button>
      );
    }
  }

  function ModalData() {
    if (forgotten) {
      return (
        <Fragment>
          <h1 className="pb-4 font-bold text-3xl text-center text-emerald-500">
            Forgotten Password
          </h1>
          <form>
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-emerald-500">Email address</span>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`mt-0  p-1 block w-full rounded border-2 focus:ring-0 dark:bg-slate-700 ${
                    emailOk
                      ? "border-x-transparent border-t-transparent border-b-red-300 hover:border-red-500 focus:border-red-500"
                      : "border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500"
                  }`}
                />
              </label>
            </div>
            <div className="flex justify-center py-4">
              <button
                disabled={emailOk}
                className="w-full justify-center cursor-pointer disabled:cursor-not-allowed border border-emerald-500 rounded px-4 py-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-90 disabled:scale-100"
                onClick={() => handleForgottenPassword()}
              >
                Reset Password
              </button>
            </div>
            <div className="flex justify-center pb-4">
              <button
                className="w-full justify-center rounded px-4 py-2 flex gap-2 items-center text-lg font-semibold bg-red-500 hover:text-white transition-colors duration-300 active:scale-90"
                onClick={() => setForgotten(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </Fragment>
      );
    }
    if (login) {
      return (
        <Fragment>
          <h1 className="pb-4 font-bold text-3xl text-center text-emerald-500">
            Log in
          </h1>
          <div className="flex justify-between gap-2">
            {Object.keys(PROVIDERS).map((provider) => {
              if (PROVIDERS[provider] === true)
                return ProviderButtonsLogin(provider);
              return null;
            })}
          </div>

          <div className="relative flex items-center py-5">
            <div className="grow border-t border-emerald-400"></div>
            <span className="mx-4 shrink text-emerald-400">or with Email</span>
            <div className="grow border-t border-emerald-400"></div>
          </div>
          <form>
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-emerald-500">Email address</span>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`mt-0 block w-full rounded border-2 p-1 focus:ring-0 dark:bg-slate-700 ${
                    emailOk
                      ? "border-red-300 hover:border-red-500 focus:border-red-500"
                      : "border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500"
                  }`}
                />
              </label>
              <label className="block">
                <span className="text-emerald-500">Password</span>
                <input
                  type="password"
                  placeholder=""
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="mt-0 block w-full rounded border-2 border-x-transparent border-t-transparent border-b-emerald-500 p-1 hover:border-emerald-500 focus:border-emerald-500 focus:ring-0 dark:bg-slate-700"
                />
              </label>
            </div>
            <p
              onClick={() => setForgotten(true)}
              className="pt-4 text-right text-emerald-500 hover:cursor-pointer hover:underline"
            >
              Forgot Password.
            </p>
            <div className="flex justify-center py-4">
              <button
                disabled={emailOk || password.length < 8}
                className="w-full justify-center border cursor-pointer disabled:cursor-not-allowed border-emerald-500 rounded px-4 py-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-90 disabled:scale-100"
                onClick={() => handleLoginEmail()}
              >
                Sign In
              </button>
            </div>
          </form>

          <p
            onClick={() => setLogin(false)}
            className="pt-4 text-center text-emerald-500 hover:cursor-pointer hover:underline"
          >
            Don&apos;t have an account? Sign up
          </p>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <h1 className="pb-4 font-bold text-3xl text-center text-emerald-500">
          Sign up
        </h1>
        <div className="flex justify-between gap-2">
          {Object.keys(PROVIDERS).map((provider) => {
            if (PROVIDERS[provider] === true)
              return ProviderButtonsSignup(provider);
            return null;
          })}
        </div>
        <div className="relative flex items-center py-5">
          <div className="grow border-t border-emerald-400"></div>
          <span className="mx-4 shrink text-emerald-400">or with Email</span>
          <div className="grow border-t border-emerald-400"></div>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-emerald-500">First Name</span>
              <input
                type="text"
                placeholder="john"
                value={firstName}
                minLength={2}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className={`mt-0 block w-full rounded border-2 p-1 focus:ring-0 dark:bg-slate-700 ${
                  firstName.length <= 2
                    ? "border-x-transparent border-t-transparent border-b-red-300 hover:border-red-500 focus:border-red-500"
                    : "border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500"
                }`}
              />
            </label>
            <label className="block">
              <span className="text-emerald-500">Last Name</span>
              <input
                type="text"
                placeholder="doe"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                minLength={2}
                className={`mt-0 block w-full rounded border-2 p-1 focus:ring-0 dark:bg-slate-700 ${
                  lastName.length <= 2
                    ? "border-x-transparent border-t-transparent border-b-red-300 hover:border-red-500 focus:border-red-500"
                    : "border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500"
                }`}
              />
            </label>
            <label className="block">
              <span className="text-emerald-500">Email address</span>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={`mt-0 block w-full rounded border-2 p-1 focus:ring-0 dark:bg-slate-700 ${
                  emailOk
                    ? "border-x-transparent border-t-transparent border-b-red-300 hover:border-red-500 focus:border-red-500"
                    : "border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500"
                }`}
              />
            </label>
            <label className="block">
              <span className="text-emerald-500">Password</span>
              <input
                type="password"
                placeholder=""
                value={password}
                minLength={8}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={`mt-0 block w-full rounded border-2 p-1 focus:ring-0 dark:bg-slate-700 ${
                  password.length <= 8
                    ? "border-x-transparent border-t-transparent border-b-red-300 hover:border-red-500 focus:border-red-500"
                    : "border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500"
                }`}
              />
            </label>
            <label className="block">
              <span className="text-emerald-500">Confirm Password</span>
              <input
                type="password"
                placeholder=""
                value={cPassword}
                minLength={8}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
                className={`mt-0 block w-full rounded border-2 p-1 focus:ring-0 dark:bg-slate-700 ${
                  showErrorMessage || cPassword.length <= 8
                    ? "border-x-transparent border-t-transparent border-b-red-300 hover:border-red-500 focus:border-red-500"
                    : "border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500"
                }`}
              />
            </label>
          </div>
          <div className="flex justify-center py-4">
            <button
              disabled={
                showErrorMessage ||
                emailOk ||
                firstName.length < 2 ||
                lastName.length < 2 ||
                password.length < 8 ||
                cPassword.length < 8
              }
              className="w-full justify-center cursor-pointer disabled:cursor-not-allowed border border-emerald-500 rounded px-4 py-2 flex gap-2 items-center text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300 active:scale-90 disabled:scale-100"
              onClick={() => handleSignUp()}
            >
              Sign up
            </button>
          </div>
        </form>

        <p
          onClick={() => setLogin(true)}
          className="text-emerald-500 hover:cursor-pointer hover:underline"
        >
          Already have an account? Login in
        </p>
      </Fragment>
    );
  }

  if (open)
    return (
      <Fragment>
        <div
          onClick={() => toggle(!open)}
          className="fixed inset-0 bg-gray-400 cursor-pointer"
        ></div>
        <div className="flex justify-center items-center my-auto ">
          <div className="max-w-xs md:max-w-5xl z-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 shadow-lg rounded-lg flex-col md:w-96">
            {ModalData()}
          </div>
        </div>
      </Fragment>
    );
  return null;
}
