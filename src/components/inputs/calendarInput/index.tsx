import { Button } from "@/components/ui/button.tsx";
import { Calendar } from "@/components/ui/calendar.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { cn } from "@/lib/utils.ts";
import { format } from "date-fns";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { ptBR } from "date-fns/locale";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { IFormInput } from "@/components/form/index.tsx";

interface Props {
  name: keyof IFormInput;
  label: string;
  placeHolder?: string;
  register?: UseFormRegister<IFormInput>;
  control: Control<IFormInput>;
}

const CalendarInput = ({
  name,
  label,
  placeHolder = "Selecione uma data",
  register,
  control,
}: Props) => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selectedDate =
            field.value instanceof Date ? field.value : undefined;

          return (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "mt-1 w-full justify-start text-left font-normal hover:bg-transparent",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {selectedDate ? (
                    format(selectedDate, "dd/MM/yyyy", { locale: ptBR })
                  ) : (
                    <span>{placeHolder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  captionLayout="dropdown"
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    field.onChange(date);
                    setDate(date);
                  }}
                  locale={ptBR}
                  disabled={{ dayOfWeek: [0] }}
                  showOutsideDays={false}
                  style={{
                    textTransform: "capitalize",
                  }}
                />
              </PopoverContent>
            </Popover>
          );
        }}
      />
    </>
  );
};

export default CalendarInput;
