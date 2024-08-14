import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import React from "react";

type OptionsSelect = {
  value: string;
  text: string;
};

interface Props {
  label: string;
  placeHolder?: string;
  selectLabel?: string;
  options: OptionsSelect[];
}

const SelectInput: React.FC<Props> = ({
  label,
  placeHolder = "Selecione uma opção",
  selectLabel = "",
  options = [],
}) => {
  return (
    <>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeHolder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{selectLabel}</SelectLabel>
              {options.map((i) => (
                <SelectItem value={i.value}>{i.text}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SelectInput;
