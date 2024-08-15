// import {
//   Button,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
// } from "@headlessui/react";
import { useState } from "react";
import List from "../list/index.tsx";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.tsx";
import { Button } from "../ui/button.tsx";
import { UserPlus } from "lucide-react";

interface UnderlineCustomProps {
  tab1: boolean;
  tab2: boolean;
}

const UnderlineCustom = ({ tab1, tab2 }: UnderlineCustomProps) => {
  return (
    <div className="w-auto px-4 h-2 bg-gray-500 rounded-2xl flex items-center justify-between">
      <div>
        <div
          className={`h-2 w-auto bg-sky-600 rounded-2xl ${
            !tab1 ? "hidden" : ""
          }`}
        />
      </div>
      <div>
        <div
          className={`h-2 w-auto bg-sky-600 rounded-2xl ${
            !tab2 ? "hidden" : ""
          }`}
        />
      </div>
    </div>
  );
};

const TabCustom = () => {
  const [isTab1Active, setIsTab1Active] = useState(true);
  const [isTab2Active, setIsTab2Active] = useState(false);

  const navigate = useNavigate();

  const handleTab1Click = () => {
    setIsTab1Active(true);
    setIsTab2Active(false);
  };

  const handleTab2Click = () => {
    setIsTab1Active(false);
    setIsTab2Active(true);
  };

  return (
    <Tabs
      defaultValue="inscritos"
      className="flex flex-col max-w-3xl w-full self-center"
    >
      <TabsList className="m-4">
        <TabsTrigger
          value="inscritos"
          onClick={handleTab1Click}
          className="text-md h-8 w-full"
        >
          Inscritos
        </TabsTrigger>
        <TabsTrigger
          value="confirmados"
          onClick={handleTab2Click}
          className="text-md h-8 w-full"
        >
          Confirmados
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inscritos" className="m-4">
        <Button
          variant="outline"
          className="w-40 right rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-700 hover:text-muted active:bg-sky-700"
          onClick={() => navigate("/criar")}
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Nova inscrição
        </Button>
        <List />
      </TabsContent>
      <TabsContent value="inscritos" className="m-4"></TabsContent>
    </Tabs>
  );
};

export default TabCustom;
