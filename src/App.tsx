import Header from "./components/header/index.tsx";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-3.5 max-w-full bg-white">
      <Header />
      <Outlet />
    </div>
  );
}
