import { Input } from "@/components/ui/input.tsx";
import React from "react";

interface Props {
  label: string;
  id: string;
  name: string;
  placeholder: string;
}

const TextInput: React.FC<Props> = ({ label, id, name, placeholder }) => {
  return (
    <>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <Input id={id} name={name} type="text" placeholder={placeholder} />
      </div>
    </>
  );
};

export default TextInput;
