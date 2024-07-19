import {
  Button,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { useState } from "react";
import List from "../list/index.tsx";
import { useNavigate } from "react-router-dom";

const UnderlineCustom = ({ tab1, tab2 }) => {
  return (
    <div className="w-full h-2 bg-gray-500 rounded-2xl grid grid-flow-col justify-stretch">
      <div>
        <div
          className={`h-2 w-full bg-sky-600 rounded-2xl ${
            !tab1 ? "hidden" : ""
          }`}
        />
      </div>
      <div>
        <div
          className={`h-2 w-full bg-sky-600 rounded-2xl ${
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
    <TabGroup defaultIndex={0} className="flex flex-col">
      <TabList className="grid grid-flow-col justify-stretch">
        <Tab
          className={`text-lg font-bold py-3 rounded-md ${
            isTab1Active ? "text-sky-600" : "text-gray-500"
          }`}
          onClick={handleTab1Click}
        >
          Inscritos
        </Tab>
        <Tab
          className={`text-lg font-bold size  py-3 rounded-md ${
            isTab2Active ? "text-sky-600" : "text-gray-500"
          }`}
          onClick={handleTab2Click}
        >
          Confirmados
        </Tab>
      </TabList>
      <UnderlineCustom tab1={isTab1Active} tab2={isTab2Active} />
      <TabPanels className="m-4">
        <TabPanel className="text-center">
          <Button
            className="w-full rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-700 data-[active]:bg-sky-700"
            onClick={() => navigate("/criar")}
          >
            Nova inscrição
          </Button>
          <List />
        </TabPanel>
        <TabPanel>Content 2</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default TabCustom;
