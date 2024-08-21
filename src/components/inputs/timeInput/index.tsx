import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Clock4Icon as ClockIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { IFormInput } from "@/components/form/index.tsx";

interface Props {
  label: string;
  name: keyof IFormInput;
  control: Control<IFormInput>;
  register: UseFormRegister<IFormInput>;
}

const TimeInput = ({ label, name, control, register }: Props) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [open, setOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState(false);

  const handleHourChange = (value: number) => {
    setHour(value);
    scrollToSelectedHour(value);
    setScrollTo(true);
  };

  const handleMinuteChange = (value: number) => {
    setMinute(value);
    scrollToSelectedMinute(value);
    setScrollTo(true);
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
    setScrollTo(true);
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

        setScrollTo(false);
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
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            const timeString = `${hour.toString().padStart(2, "0")}:${minute
              .toString()
              .padStart(2, "0")}`;

            useEffect(() => {
              field.onChange(timeString);
            }, [hour, minute]);

            return (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id="scheduledTimeTemple"
                    variant="outline"
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-md w-full hover:bg-muted/0"
                    onClick={setHourMinuteSelected}
                    {...field}
                    value={timeString}
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
                              onClick={() =>
                                handleHourChange((hour - 1 + 24) % 24)
                              }
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
                              onClick={() =>
                                handleMinuteChange((minute + 1) % 60)
                              }
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
            );
          }}
        />
      </div>
    </>
  );
};

export default TimeInput;
