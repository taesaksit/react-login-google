import {toast} from 'react-toastify'
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GoogleLoginButton() {
    const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            localStorage.setItem("token-social-signin", tokenResponse.access_token);
            navigate("/home");
            toast.success("Login successful! 🎉");
            const userInfo = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                }
            );

            console.log("👤 User Info:", userInfo.data);
        },
        onError: (error) => {
            console.error("❌ Login Failed:", error);
        },
    });

    return (
        <button
            onClick={() => login()}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200"
        >
            <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
                Continue with Google
            </span>
        </button>
    );
}
