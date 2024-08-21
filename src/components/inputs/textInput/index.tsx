import { IFormInput } from "@/components/form/index.tsx";
import { Input } from "@/components/ui/input.tsx";
import { UseFormRegister } from "react-hook-form";

interface ITextInput {
  fullName: string;
}

interface Props {
  id: string;
  name: keyof IFormInput;
  label: string;
  placeholder: string;
  register: UseFormRegister<IFormInput>;
}

const TextInput = ({ label, id, name, placeholder, register }: Props) => {
  return (
    <>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <Input
          id={id}
          type="text"
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
    </>
  );
};

export default TextInput;
