/* eslint-disable @typescript-eslint/no-explicit-any */
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Control } from "react-hook-form";
import { IFormInput } from "@/components/form/index.tsx";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form.tsx";

interface Props {
  name: keyof IFormInput;
  label: string;
  sim: any;
  nao: any;
  control: Control<IFormInput>;
}

const RadioGroupInput = ({ label, sim, nao, name, control }: Props) => {
  return (
    <>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <FormField
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <FormItem>
              <FormControl>
                <RadioGroup
                  className="flex space-x-6 pl-3 py-3"
                  onValueChange={(value) =>
                    field.onChange(value === "Sim" ? true : false)
                  }
                  defaultValue={field.value ? "Sim" : "Não"}
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem onClick={sim} value="Sim" id="r1" />
                    </FormControl>
                    <FormLabel htmlFor="r1" className="cursor-pointer">
                      Sim
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem onClick={nao} value="Nao" id="r2" />
                    </FormControl>
                    <FormLabel htmlFor="r2" className="cursor-pointer">
                      Não
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          );
        }}
      />
    </>
  );
};

export default RadioGroupInput;
