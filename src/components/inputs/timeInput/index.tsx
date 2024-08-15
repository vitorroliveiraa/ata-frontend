import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  CalendarIcon,
  Clock4Icon as ClockIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";

interface Props {
  label: string;
}

const TimeInput = ({ label }: Props) => {
  const [date, setDate] = React.useState<Date>();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState("am");
  const [open, setOpen] = useState(false);

  const [horaFinal, setHoraFinal] = useState("");

  const handleHourIncrement = () => {
    setHour((prevHour) => (prevHour === 12 ? 1 : prevHour + 1));
  };

  const handleHourDecrement = () => {
    setHour((prevHour) => (prevHour === 1 ? 12 : prevHour - 1));
  };

  const handleMinuteIncrement = () => {
    setMinute((prevMinute) => (prevMinute === 59 ? 0 : prevMinute + 1));
  };

  const handleMinuteDecrement = () => {
    setMinute((prevMinute) => (prevMinute === 0 ? 59 : prevMinute - 1));
  };

  function salvarHoraCompleta() {
    setHoraFinal(
      `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`
    );
    setOpen(false);
  }

  //codigo do novo picker
  const [hourw, setHourw] = useState(10);
  const [minutew, setMinutew] = useState(30);
  const [selectedTime, setSelectedTime] = useState("10:30");
  const [scrollTo, setScrollTo] = useState(false);

  const handleHourChange = (value: number) => {
    setHour(value);
    scrollToSelectedHour(value);
    setScrollTo(true); // Definir para rolar quando o valor mudar
  };
  const handleMinuteChange = (value: number) => {
    setMinute(value);
    scrollToSelectedMinute(value);
    setScrollTo(true); // Definir para rolar quando o valor mudar
  };
  const scrollToSelectedHour = (value: number) => {
    const hourElement = document.querySelector(`[data-hour="${value}"]`);
    if (hourElement) {
      hourElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const scrollToSelectedMinute = (value: number) => {
    const minuteElement = document.querySelector(`[data-minute="${value}"]`);
    if (minuteElement) {
      minuteElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const setHourMinuteSelected = () => {
    setOpen(true);
    setScrollTo(true); // Definir para rolar quando o popover abrir
  };

  useEffect(() => {
    if (open && scrollTo) {
      requestAnimationFrame(() => {
        const hourElement = document.querySelector(`[data-hour="${hour}"]`);
        const minuteElement = document.querySelector(
          `[data-minute="${minute}"]`
        );

        if (hourElement) {
          hourElement.scrollIntoView({
            behavior: "instant",
            block: "center",
          });
        }
        if (minuteElement) {
          minuteElement.scrollIntoView({
            behavior: "instant",
            block: "center",
          });
        }

        setScrollTo(false); // Resetar o estado após rolar
      });
    }
  }, [open, hour, minute, scrollTo]);

  return (
    <>
      <label
        htmlFor="scheduledTimeTemple"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1 grid gap-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="scheduledTimeTemple"
              variant="outline"
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-md w-full hover:bg-muted/0"
              onClick={setHourMinuteSelected}
            >
              <span className="font-medium">
                {`${hour.toString().padStart(2, "0")}:${minute
                  .toString()
                  .padStart(2, "0")}`}
              </span>
              <span className="">
                <ClockIcon className="w-4 h-4 text-muted-foreground" />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto">
            <div className="bg-background p-4 rounded-md shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hour">Hora</Label>
                  <div className="flex items-center gap-2">
                    <ScrollArea className="h-32 w-16 rounded-md border">
                      <div className="p-2 text-center">
                        {Array.from({ length: 24 }, (_, i) => (
                          <div
                            key={i}
                            data-hour={i}
                            className={`py-1 cursor-pointer hover:bg-muted/100 hover:text-primary hover:rounded-md ${
                              hour === i
                                ? "bg-primary text-primary-foreground rounded-md"
                                : ""
                            }`}
                            onClick={() => handleHourChange(i)}
                          >
                            {i.toString().padStart(2, "0")}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="flex flex-col gap-2 h-full">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-muted/100 rounded-md bg-gray-200 w-8 h-14"
                        onClick={() => handleHourChange((hour - 1 + 24) % 24)}
                      >
                        <ChevronUpIcon className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-muted/100 rounded-md bg-gray-200 w-8 h-14"
                        onClick={() => handleHourChange((hour + 1) % 24)}
                      >
                        <ChevronDownIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minute">Minuto</Label>
                  <div className="flex items-center gap-2">
                    <ScrollArea className="h-32 w-16 rounded-md border">
                      <div className="p-2 text-center">
                        {Array.from({ length: 60 }, (_, i) => (
                          <div
                            key={i}
                            data-minute={i}
                            className={`py-1 cursor-pointer hover:bg-muted/100 hover:text-primary hover:rounded-md ${
                              minute === i
                                ? "bg-primary text-primary-foreground rounded-md"
                                : ""
                            }`}
                            onClick={() => handleMinuteChange(i)}
                          >
                            {i.toString().padStart(2, "0")}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-muted/100 rounded-md bg-gray-200 w-8 h-14"
                        onClick={() =>
                          handleMinuteChange((minute - 1 + 60) % 60)
                        }
                      >
                        <ChevronUpIcon className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-muted/100 rounded-md bg-gray-200 w-8 h-14"
                        onClick={() => handleMinuteChange((minute + 1) % 60)}
                      >
                        <ChevronDownIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default TimeInput;
