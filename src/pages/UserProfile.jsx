import { getAuth, signOut } from "firebase/auth";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

export function UserProfile() {
  const { user } = useContext(CartContext);
  const navigate = useNavigate();
  const auth = getAuth();

  function handleClickBack() {
    navigate("/");
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Something went wrong when logging out", error);
      });
  };

  const profilePicText = (word) => {
    if (!word) return "";
    const firstLetter = word.charAt(0).toUpperCase();
    return firstLetter;
  };

  return (
    <section className="userProfile-section ">
      <div className="flex flex-col gap-2">
        <h2 className=" text-4xl font-bold text-slate-400 text-start">
          Welcome,
        </h2>
        <h4 className="text-start text-xl font-semibold text-slate-700">
          {user ? user.email : "Guest"}{" "}
        </h4>
      </div>

      <div className="w-[140px] h-[140px] rounded-full bg-slate-900 flex items-center justify-center text-white text-4xl font-bold">
        {user ? profilePicText(user.email) : "?"}
      </div>
      <div className="flex flex-row gap-4 ">
        <button
          onClick={handleClickBack}
          className=" py-2 px-16 bg-orange-500 rounded-xl text-lg font-semibold text-white"
        >
          Back
        </button>
        <button
          onClick={handleLogout}
          className=" py-2 px-16 bg-red-500 rounded-xl text-lg font-semibold text-white"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
