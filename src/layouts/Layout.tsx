import { Outlet } from "react-router-dom";
import {Navbar} from "./Nav";

export const LayoutComponent = () => {
    return (
        <div className="flex flex-col w-full h-[100vh]">
            <Navbar  />
            <main className="flex w-full h-full px-3">
                <Outlet />
            </main>
        </div>
    )
}