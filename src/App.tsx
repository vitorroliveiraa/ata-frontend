import Menu from "./components/menu/index.tsx";
import Body from "./components/body/index.tsx";
import TabCustom from "./components/tabCustom/index.tsx";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Menu />
      <Outlet />
    </div>
  );
}
