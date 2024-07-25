import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import React, { useState } from "react";
import {
  CalendarIcon,
  Clock4Icon as ClockIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
} from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Label } from "@/components/ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import TextInput from "@/components/inputs/textInput/index.tsx";

const Registration = () => {
  const navigate = useNavigate();

  const [date, setDate] = React.useState<Date>();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState("am");

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

  return (
    <main>
      <div className="flex items-center justify-between bg-gray-100 p-4">
        <button className="text-black" onClick={() => navigate("/")}>
          <ArrowLeftIcon className="size-7" />
        </button>
        <h1 className="text-center text-2xl font-semibold">
          Cadastro do Líder Responsável
        </h1>
        <div className="w-6"></div>{" "}
        {/* Placeholder para manter o título centralizado */}
      </div>

      <div className="p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome completo (Igual documentação):
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <Input
              id="price"
              name="price"
              type="text"
              placeholder="Digite o nome completo"
            />
          </div>

          <div className="sm:col-span-3 mt-6">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Data da vacina febre amarela:
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Selecione uma data</span>}
                  <CalendarIcon className="ml-auto h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Qual tipo de documento será usado:
                </label>
                <div className="mt-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Documentos válidos</SelectLabel>
                        <SelectItem value="rg">RG</SelectItem>
                        <SelectItem value="cpf">Cadeirante</SelectItem>
                        <SelectItem value="passaporte">Passaporte</SelectItem>
                        <SelectItem value="rne">RNE</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <TextInput
                  label="Nome completo (Igual documentação):"
                  id="fullName"
                  name="fullName"
                  placeholder="Digite o nome completo"
                />
                {/* <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Número do documento:
                </label>
                <div className="mt-1">
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Digite o número sem caractere especial"
                    className=""
                  />
                </div> */}
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Data de nascimento:
                </label>
                <div className="mt-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Portador de necessidades especiais:
                </label>
                <div className="mt-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Documentos permitidos</SelectLabel>
                        <SelectItem value="rg">Não</SelectItem>
                        <SelectItem value="cpf">Cadeirante</SelectItem>
                        <SelectItem value="passaporte">Idoso</SelectItem>
                        <SelectItem value="rne">Gestante</SelectItem>
                        <SelectItem value="rne">Outro</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ordenança agendada no templo:
                </label>
                <div className="mt-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="rg">Batistério</SelectItem>
                        <SelectItem value="cpf">Iniciatória</SelectItem>
                        <SelectItem value="passaporte">Investidura</SelectItem>
                        <SelectItem value="rne">Selamento</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Data de nascimento
                </label>
                <div className="mt-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Horário agendado no Templo:
                </label>
                <div className="mt-1 grid gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="relative w-full">
                        <Input
                          type="text"
                          placeholder="HH:MM"
                          pattern="^([01]?[0-9]|2[0-3]):[0-5][0-9]$"
                          className="w-full pl-4 pr-8 rounded-md border border-muted focus:border-primary focus:ring-primary"
                        />
                        <span className="absolute inset-y-0 right-2 flex items-center">
                          <ClockIcon className="w-4 h-4 text-muted-foreground" />
                        </span>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <div className="grid gap-4 p-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="relative">
                            <Input
                              type="number"
                              min="1"
                              max="12"
                              placeholder="Hour"
                              value={hour}
                              className="w-auto rounded-md border border-muted focus:border-primary focus:ring-primary pr-8"
                            />
                            <div className="absolute inset-y-1 right-2 flex flex-col items-center justify-center gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 hover:bg-transparent text-muted-foreground hover:text-primary"
                                onClick={handleHourIncrement}
                              >
                                <ChevronUpIcon className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 hover:bg-transparent text-muted-foreground hover:text-primary"
                                onClick={handleHourDecrement}
                              >
                                <ChevronDownIcon className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="relative">
                            <Input
                              type="number"
                              min="0"
                              max="59"
                              placeholder="Minute"
                              value={minute}
                              className="w-full rounded-md border border-muted focus:border-primary focus:ring-primary pr-8"
                            />
                            <div className="absolute inset-y-0 right-2 flex flex-col items-center justify-center gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 hover:bg-transparent text-muted-foreground hover:text-primary"
                                onClick={handleMinuteIncrement}
                              >
                                <ChevronUpIcon className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 hover:bg-transparent text-muted-foreground hover:text-primary"
                                onClick={handleMinuteDecrement}
                              >
                                <ChevronDownIcon className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Select value={ampm} onValueChange={setAmpm}>
                          <SelectTrigger className="w-full text-muted-foreground">
                            <SelectValue placeholder="AM/PM" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="am">AM</SelectItem>
                            <SelectItem value="pm">PM</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Cancel</Button>
                          <Button type="submit">Save</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="p-4 border-2 rounded-md">
                  <div className="relative">
                    <h3 className="absolute -top-7 left-0 px-0 bg-gray-100 text-sm font-medium">
                      Pagamento Realizado?
                    </h3>
                  </div>
                  <RadioGroup
                    className="flex space-x-6 p-1"
                    defaultValue="default"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Sim" id="r1" />
                      <Label htmlFor="r1">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Não" id="r2" />
                      <Label htmlFor="r2">Não</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adicione um comprovante de pagamento:
                </label>
                <div className="mt-1">
                  <Input
                    id="paymentVoucher"
                    type="file"
                    placeholder="Comprovante"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registration;
