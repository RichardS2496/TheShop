import "../styles/login.css";
import { useState } from "react";

export function Login() {
  const [isRegistered, setIsRegistered] = useState(false);

  function switchToLogin() {
    setIsRegistered(false);
  }

  function switchToRegister() {
    setIsRegistered(true);
  }

  return (
    <section className="login-section ">
      <div className="w-full h-2/4 flex flex-row rounded-xl overflow-hidden  border-2">
        <div className="bg-slate-500 w-5/12 h-full p-8 flex flex-col items-start justify-center">
          <div className="btns-section flex flex-row gap-4">
            <button onClick={switchToLogin} className="bg-white">
              Login
            </button>
            <button onClick={switchToRegister} className="bg-white">
              Sign Up
            </button>
          </div>

          {isRegistered ? (
            <div>
              <h2 className="self-start">Signup</h2>
              <form className="flex flex-col  gap-4" action="">
                <div className="flex flex-col self-start">
                  <label htmlFor="email-field">Email</label>
                  <input type="text" id="email-field" />
                </div>
                <div className="flex flex-col self-start">
                  <label htmlFor="password-field">Password</label>
                  <input type="password" id="password-field" />
                </div>

                <button>Signup</button>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="self-start">Login</h2>
              <form className="flex flex-col  gap-4" action="">
                <div className="flex flex-col self-start">
                  <label htmlFor="email-field">Email</label>
                  <input type="text" id="email-field" />
                </div>
                <div className="flex flex-col self-start">
                  <label htmlFor="password-field">Password</label>
                  <input type="password" id="password-field" />
                </div>

                <button>Login</button>
              </form>
            </div>
          )}
        </div>

        <div className="bg-orange-500 w-7/12 h-full">
          <img src="src\assets\hero_img.png" alt="" />
          <p></p>
        </div>
      </div>
    </section>
  );
}
