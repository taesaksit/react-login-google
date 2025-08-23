
import GoogleLoginButton from "../components/GoogleLoginButton";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: ส่งข้อมูล email/password ไป backend
        console.log("Email:", email, "Password:", password);
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        Login
                    </button>
                </form>

                <div className="my-6 flex items-center justify-center space-x-2">
                    <span className="border-t w-1/3 border-gray-300"></span>
                    <span className="text-gray-500 text-sm">OR</span>
                    <span className="border-t w-1/3 border-gray-300"></span>
                </div>

                <div className="flex justify-between gap-4">
                    <GoogleLoginButton />
                </div>
            </div>
        </div>
    );
}
