import { Button } from "@/components/ui/button.tsx";
import { Calendar } from "@/components/ui/calendar.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { cn } from "@/lib/utils.ts";
import { format } from "date-fns";
import React from "react";
import { CalendarIcon } from "lucide-react";
import { ptBR } from "date-fns/locale";

interface Props {
  label: string;
  placeHolder?: string;
}

const CalendarInput: React.FC<Props> = ({
  label,
  placeHolder = "Selecione uma data",
}) => {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "mt-1 w-full justify-start text-left font-normal hover:bg-transparent",
              !date && "text-muted-foreground"
            )}
          >
            {date ? (
              format(date, "dd/MM/yyyy", { locale: ptBR })
            ) : (
              <span>{placeHolder}</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={ptBR}
            disabled={{ dayOfWeek: [0] }}
            showOutsideDays={false}
            style={{
              textTransform: "capitalize",
            }}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CalendarInput;
