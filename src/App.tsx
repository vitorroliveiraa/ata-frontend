import Header from "./components/header/index.tsx";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
}
