import React from "react";
import { Input } from "../ui/input.tsx";

interface Props {
  label: string;
}
const FileInput: React.FC<Props> = ({ label }) => {
  return (
    <>
      <label
        htmlFor="street-address"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">
        <Input id="paymentVoucher" type="file" placeholder="Comprovante" />
      </div>
    </>
  );
};

export default FileInput;
