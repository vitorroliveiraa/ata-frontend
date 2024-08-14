/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Label } from "@/components/ui/label.tsx";

interface Props {
  label: string;
  sim: any;
  nao: any;
}

const RadioGroupInput = ({ label, sim, nao }: Props) => {
  function changeVisibilityFileInput() {}

  return (
    <>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <RadioGroup className="flex space-x-6 pl-3 py-3" defaultValue="Não">
        <div className="flex items-center space-x-2">
          <RadioGroupItem onClick={sim} value="Sim" id="r1" />
          <Label htmlFor="r1" className="cursor-pointer">
            Sim
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem onClick={nao} value="Não" id="r2" />
          <Label htmlFor="r2" className="cursor-pointer">
            Não
          </Label>
        </div>
      </RadioGroup>
    </>
  );
};

export default RadioGroupInput;
