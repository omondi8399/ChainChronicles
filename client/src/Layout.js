import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}