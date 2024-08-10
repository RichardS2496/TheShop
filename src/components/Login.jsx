import "../styles/login.css";
import { useState } from "react";
import { appFirebase } from "../firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const auth = getAuth(appFirebase);

export function Login() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  function switchToLogin() {
    setIsRegistered(false);
    setErrorMessage("");
  }

  function switchToRegister() {
    setIsRegistered(true);
    setErrorMessage("");
  }

  async function authentication(e) {
    e.preventDefault();
    const email = e.target.elements["email-field"].value;
    const password = e.target.elements["password-field"].value;

    try {
      if (isRegistered) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setUserEmail(email);
      navigate("/", { state: { userEmail: email } });
    } catch (error) {
      if (isRegistered && error.code === "auth/email-already-in-use") {
        setErrorMessage("User is already registered with this email.");
      } else {
        setErrorMessage(
          "Authentication failed. Please check your credentials."
        );
      }
    }
  }

  return (
    <section className="login-section ">
      <div className="w-full h-fit flex  flex-row rounded-xl overflow-hidden  border-2">
        <div className=" w-5/12 p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold self-start">Welcome!</h2>
          <div className="btns-section flex flex-row gap-4">
            <button
              onClick={switchToLogin}
              className={`btn-login ${!isRegistered ? "active" : ""}`}
            >
              Login
            </button>
            <button
              onClick={switchToRegister}
              className={`btn-login ${isRegistered ? "active" : ""}`}
            >
              Sign Up
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500">{errorMessage}</p> // Mostrar mensaje de error
          )}

          <form
            className="flex flex-col  gap-4"
            action=""
            onSubmit={authentication}
          >
            <div className="input-container">
              <label className="label-forInput" htmlFor="email-field">
                Email
              </label>
              <input className="input-field" type="text" id="email-field" />
            </div>
            <div className="input-container">
              <label className="label-forInput" htmlFor="password-field">
                Password
              </label>
              <input
                className="input-field"
                type="password"
                id="password-field"
              />
            </div>

            <button className="final-btn">
              {isRegistered ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>

        <div className="bg-sky-950 w-7/12 flex flex-col justify-center items-center gap-4 p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35%"
            zoomAndPan="magnify"
            viewBox="0 0 285 165.000002"
            height="20%"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
              <clipPath id="2272516e9c">
                <path
                  d="M 19.359375 16.402344 L 114.78125 16.402344 L 114.78125 147.605469 L 19.359375 147.605469 Z M 19.359375 16.402344 "
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#2272516e9c)">
              <path
                fill="#FFFFFF"
                d="M 59.3125 123.125 C 57.449219 117.695312 54.042969 112.929688 49.511719 109.410156 L 38.371094 100.761719 C 26.929688 91.878906 19.980469 78.410156 19.378906 63.9375 C 19.378906 37.683594 40.664062 16.402344 66.917969 16.402344 C 93.171875 16.402344 114.457031 37.683594 114.457031 63.9375 C 113.851562 78.410156 106.90625 91.878906 95.464844 100.761719 L 84.324219 109.410156 C 79.792969 112.929688 76.382812 117.695312 74.523438 123.125 L 73.214844 126.945312 C 72.289062 129.636719 69.761719 131.441406 66.917969 131.441406 C 64.074219 131.441406 61.542969 129.636719 60.621094 126.945312 Z M 66.917969 147.605469 C 56.414062 147.605469 47.902344 146.328125 47.902344 144.753906 C 47.902344 143.179688 56.414062 141.902344 66.917969 141.902344 C 77.417969 141.902344 85.933594 143.179688 85.933594 144.753906 C 85.933594 146.328125 77.417969 147.605469 66.917969 147.605469 Z M 66.917969 101.019531 C 87.921875 101.019531 104.949219 83.992188 104.949219 62.988281 C 104.949219 41.984375 87.921875 24.957031 66.917969 24.957031 C 45.914062 24.957031 28.886719 41.984375 28.886719 62.988281 C 28.886719 83.992188 45.914062 101.019531 66.917969 101.019531 Z M 86.570312 66.753906 L 66.425781 66.753906 C 65.605469 66.753906 64.941406 67.417969 64.941406 68.238281 C 64.941406 69.054688 65.605469 69.71875 66.425781 69.71875 L 85.101562 69.71875 L 83.164062 73.625 C 82.75 74.453125 81.910156 74.976562 80.992188 74.976562 L 56.832031 74.976562 C 55.699219 75.015625 54.6875 74.261719 54.394531 73.160156 L 47.660156 47.941406 L 44.636719 47.941406 C 43.289062 47.941406 42.199219 46.839844 42.199219 45.480469 C 42.199219 44.125 43.289062 43.023438 44.636719 43.023438 L 49.515625 43.023438 C 50.648438 42.984375 51.660156 43.738281 51.953125 44.84375 L 53.367188 50.398438 L 86.796875 50.398438 C 88.511719 50.425781 90.085938 51.359375 90.941406 52.855469 C 91.785156 54.269531 91.867188 56.011719 91.164062 57.5 Z M 54.949219 87.648438 C 53.046875 85.746094 53.320312 82.382812 55.558594 80.140625 C 57.800781 77.898438 61.164062 77.628906 63.066406 79.53125 C 64.972656 81.4375 64.699219 84.796875 62.457031 87.039062 C 60.214844 89.28125 56.855469 89.554688 54.949219 87.648438 Z M 70.375 87.648438 C 68.46875 85.746094 68.742188 82.382812 70.984375 80.140625 C 73.226562 77.898438 76.585938 77.628906 78.492188 79.53125 C 80.398438 81.4375 80.125 84.796875 77.882812 87.039062 C 75.640625 89.28125 72.277344 89.554688 70.375 87.648438 Z M 70.375 87.648438 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
            <g fill="#FFFFFF" fillOpacity="1">
              <g transform="translate(114.481392, 69.797923)">
                <g>
                  <path d="M 0.484375 -40.28125 L 0.484375 -50.34375 L 35.890625 -50.34375 L 35.890625 -40.28125 L 23.921875 -40.28125 L 23.921875 0 L 12.453125 0 L 12.453125 -40.28125 Z M 0.484375 -40.28125 " />
                </g>
              </g>
            </g>
            <g fill="#FFFFFF" fillOpacity="1">
              <g transform="translate(147.801341, 69.797923)">
                <g>
                  <path d="M 3.65625 0 L 3.65625 -52.484375 L 14.46875 -52.484375 L 14.46875 -28.015625 L 14.59375 -28.015625 C 17.394531 -30.816406 20.382812 -32.21875 23.5625 -32.21875 C 25.101562 -32.21875 26.632812 -32.015625 28.15625 -31.609375 C 29.6875 -31.203125 31.15625 -30.570312 32.5625 -29.71875 C 33.96875 -28.863281 35.109375 -27.648438 35.984375 -26.078125 C 36.859375 -24.515625 37.296875 -22.695312 37.296875 -20.625 L 37.296875 0 L 26.484375 0 L 26.484375 -17.703125 C 26.484375 -19.328125 25.960938 -20.75 24.921875 -21.96875 C 23.890625 -23.1875 22.539062 -23.796875 20.875 -23.796875 C 19.25 -23.796875 17.773438 -23.164062 16.453125 -21.90625 C 15.128906 -20.644531 14.46875 -19.242188 14.46875 -17.703125 L 14.46875 0 Z M 3.65625 0 " />
                </g>
              </g>
            </g>
            <g fill="#FFFFFF" fillOpacity="1">
              <g transform="translate(185.087951, 69.797923)">
                <g>
                  <path d="M 35.34375 -14.15625 L 12.640625 -14.15625 C 12.640625 -11.957031 13.347656 -10.328125 14.765625 -9.265625 C 16.191406 -8.210938 17.738281 -7.6875 19.40625 -7.6875 C 21.15625 -7.6875 22.535156 -7.921875 23.546875 -8.390625 C 24.566406 -8.859375 25.726562 -9.785156 27.03125 -11.171875 L 34.84375 -7.265625 C 31.59375 -1.804688 26.179688 0.921875 18.609375 0.921875 C 13.890625 0.921875 9.84375 -0.691406 6.46875 -3.921875 C 3.09375 -7.160156 1.40625 -11.054688 1.40625 -15.609375 C 1.40625 -20.171875 3.09375 -24.078125 6.46875 -27.328125 C 9.84375 -30.585938 13.890625 -32.21875 18.609375 -32.21875 C 23.578125 -32.21875 27.613281 -30.785156 30.71875 -27.921875 C 33.832031 -25.054688 35.390625 -20.957031 35.390625 -15.625 C 35.390625 -14.894531 35.375 -14.40625 35.34375 -14.15625 Z M 12.9375 -20.140625 L 24.84375 -20.140625 C 24.59375 -21.765625 23.945312 -23.015625 22.90625 -23.890625 C 21.875 -24.765625 20.546875 -25.203125 18.921875 -25.203125 C 17.128906 -25.203125 15.703125 -24.734375 14.640625 -23.796875 C 13.585938 -22.867188 13.019531 -21.648438 12.9375 -20.140625 Z M 12.9375 -20.140625 " />
                </g>
              </g>
            </g>
            <g fill="#FFFFFF" fillOpacity="1">
              <g transform="translate(114.481392, 127.772146)">
                <g>
                  <path d="M 22.21875 -51.265625 C 24.9375 -51.265625 27.597656 -50.867188 30.203125 -50.078125 C 32.804688 -49.285156 34.742188 -48.5 36.015625 -47.71875 L 37.84375 -46.5 L 33.203125 -37.34375 C 32.835938 -37.59375 32.328125 -37.910156 31.671875 -38.296875 C 31.023438 -38.679688 29.804688 -39.195312 28.015625 -39.84375 C 26.222656 -40.5 24.554688 -40.828125 23.015625 -40.828125 C 21.097656 -40.828125 19.617188 -40.421875 18.578125 -39.609375 C 17.546875 -38.796875 17.03125 -37.695312 17.03125 -36.3125 C 17.03125 -35.625 17.273438 -34.984375 17.765625 -34.390625 C 18.253906 -33.796875 19.085938 -33.160156 20.265625 -32.484375 C 21.441406 -31.816406 22.476562 -31.28125 23.375 -30.875 C 24.269531 -30.46875 25.65625 -29.859375 27.53125 -29.046875 C 30.78125 -27.660156 33.550781 -25.773438 35.84375 -23.390625 C 38.144531 -21.015625 39.296875 -18.320312 39.296875 -15.3125 C 39.296875 -12.425781 38.773438 -9.90625 37.734375 -7.75 C 36.703125 -5.59375 35.28125 -3.90625 33.46875 -2.6875 C 31.664062 -1.46875 29.664062 -0.5625 27.46875 0.03125 C 25.269531 0.625 22.890625 0.921875 20.328125 0.921875 C 18.128906 0.921875 15.972656 0.695312 13.859375 0.25 C 11.742188 -0.195312 9.972656 -0.753906 8.546875 -1.421875 C 7.117188 -2.097656 5.832031 -2.757812 4.6875 -3.40625 C 3.550781 -4.0625 2.722656 -4.613281 2.203125 -5.0625 L 1.40625 -5.734375 L 7.140625 -15.375 C 7.628906 -14.96875 8.300781 -14.445312 9.15625 -13.8125 C 10.007812 -13.1875 11.523438 -12.34375 13.703125 -11.28125 C 15.878906 -10.226562 17.800781 -9.703125 19.46875 -9.703125 C 24.3125 -9.703125 26.734375 -11.347656 26.734375 -14.640625 C 26.734375 -15.335938 26.554688 -15.976562 26.203125 -16.5625 C 25.859375 -17.15625 25.25 -17.742188 24.375 -18.328125 C 23.5 -18.921875 22.726562 -19.390625 22.0625 -19.734375 C 21.394531 -20.085938 20.296875 -20.617188 18.765625 -21.328125 C 17.242188 -22.046875 16.113281 -22.585938 15.375 -22.953125 C 12.320312 -24.453125 9.960938 -26.332031 8.296875 -28.59375 C 6.628906 -30.851562 5.796875 -33.285156 5.796875 -35.890625 C 5.796875 -40.398438 7.460938 -44.085938 10.796875 -46.953125 C 14.140625 -49.828125 17.945312 -51.265625 22.21875 -51.265625 Z M 22.21875 -51.265625 " />
                </g>
              </g>
            </g>
            <g fill="#FFFFFF" fillOpacity="1">
              <g transform="translate(152.439286, 127.772146)">
                <g>
                  <path d="M 3.65625 0 L 3.65625 -52.484375 L 14.46875 -52.484375 L 14.46875 -28.015625 L 14.59375 -28.015625 C 17.394531 -30.816406 20.382812 -32.21875 23.5625 -32.21875 C 25.101562 -32.21875 26.632812 -32.015625 28.15625 -31.609375 C 29.6875 -31.203125 31.15625 -30.570312 32.5625 -29.71875 C 33.96875 -28.863281 35.109375 -27.648438 35.984375 -26.078125 C 36.859375 -24.515625 37.296875 -22.695312 37.296875 -20.625 L 37.296875 0 L 26.484375 0 L 26.484375 -17.703125 C 26.484375 -19.328125 25.960938 -20.75 24.921875 -21.96875 C 23.890625 -23.1875 22.539062 -23.796875 20.875 -23.796875 C 19.25 -23.796875 17.773438 -23.164062 16.453125 -21.90625 C 15.128906 -20.644531 14.46875 -19.242188 14.46875 -17.703125 L 14.46875 0 Z M 3.65625 0 " />
                </g>
              </g>
            </g>
            <g fill="#FFFFFF" fillOpacity="1">
              <g transform="translate(189.725895, 127.772146)">
                <g>
                  <path d="M 6.625 -3.71875 C 3.144531 -6.8125 1.40625 -10.78125 1.40625 -15.625 C 1.40625 -20.46875 3.210938 -24.441406 6.828125 -27.546875 C 10.453125 -30.660156 14.929688 -32.21875 20.265625 -32.21875 C 25.515625 -32.21875 29.9375 -30.648438 33.53125 -27.515625 C 37.132812 -24.390625 38.9375 -20.425781 38.9375 -15.625 C 38.9375 -10.820312 37.175781 -6.863281 33.65625 -3.75 C 30.132812 -0.632812 25.671875 0.921875 20.265625 0.921875 C 14.648438 0.921875 10.101562 -0.625 6.625 -3.71875 Z M 14.984375 -20.9375 C 13.578125 -19.550781 12.875 -17.78125 12.875 -15.625 C 12.875 -13.46875 13.546875 -11.707031 14.890625 -10.34375 C 16.234375 -8.976562 18.003906 -8.296875 20.203125 -8.296875 C 22.316406 -8.296875 24.054688 -8.988281 25.421875 -10.375 C 26.785156 -11.757812 27.46875 -13.507812 27.46875 -15.625 C 27.46875 -17.78125 26.765625 -19.550781 25.359375 -20.9375 C 23.953125 -22.320312 22.234375 -23.015625 20.203125 -23.015625 C 18.128906 -23.015625 16.390625 -22.320312 14.984375 -20.9375 Z M 14.984375 -20.9375 " />
                </g>
              </g>
            </g>
            <g fill="#FFFFFF" fillOpacity="1">
              <g transform="translate(227.012505, 127.772146)">
                <g>
                  <path d="M 35.875 -27.421875 C 38.8125 -24.234375 40.28125 -20.320312 40.28125 -15.6875 C 40.28125 -11.050781 38.8125 -7.125 35.875 -3.90625 C 32.945312 -0.6875 29.226562 0.921875 24.71875 0.921875 C 20.570312 0.921875 17.15625 -0.378906 14.46875 -2.984375 L 14.46875 15.875 L 3.65625 15.875 L 3.65625 -31.3125 L 14.34375 -31.3125 L 14.34375 -27.765625 L 14.46875 -27.765625 C 17.15625 -30.734375 20.570312 -32.21875 24.71875 -32.21875 C 29.226562 -32.21875 32.945312 -30.617188 35.875 -27.421875 Z M 26.703125 -10.375 C 28.109375 -11.757812 28.8125 -13.53125 28.8125 -15.6875 C 28.8125 -17.84375 28.140625 -19.601562 26.796875 -20.96875 C 25.453125 -22.332031 23.679688 -23.015625 21.484375 -23.015625 C 19.367188 -23.015625 17.628906 -22.320312 16.265625 -20.9375 C 14.898438 -19.550781 14.21875 -17.800781 14.21875 -15.6875 C 14.21875 -13.53125 14.921875 -11.757812 16.328125 -10.375 C 17.734375 -8.988281 19.453125 -8.296875 21.484375 -8.296875 C 23.554688 -8.296875 25.296875 -8.988281 26.703125 -10.375 Z M 26.703125 -10.375 " />
                </g>
              </g>
            </g>
          </svg>
          <p className="text-center text-white">
            This application is designed solely for educational and practical
            purposes. It does not engage in the sale or promotion of any
            products, and no personal data will be collected or stored.
          </p>
        </div>
      </div>
    </section>
  );
}
