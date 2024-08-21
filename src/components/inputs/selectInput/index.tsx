import { IFormInput } from "@/components/form/index.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { UseFormRegister, Controller, Control } from "react-hook-form";

type OptionsSelect = {
  value: string;
  text: string;
};

interface Props {
  name: keyof IFormInput;
  label: string;
  placeHolder?: string;
  selectLabel?: string;
  options: OptionsSelect[];
  register?: UseFormRegister<IFormInput>;
  control: Control<IFormInput>;
}

const SelectInput = ({
  name,
  label,
  placeHolder = "Selecione uma opção",
  selectLabel = "",
  options = [],
  register,
  control,
}: Props) => {
  return (
    <>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              {...field}
              value={(field.value as string) || ""}
            >
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
          )}
        />
      </div>
    </>
  );
};

export default SelectInput;
