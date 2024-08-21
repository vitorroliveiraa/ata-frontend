import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TextInput from "../inputs/textInput/index.tsx";
import CalendarInput from "../inputs/calendarInput/index.tsx";
import SelectInput from "../inputs/selectInput/index.tsx";
import TimeInput from "../inputs/timeInput/index.tsx";
import RadioGroupInput from "../inputs/radioGroupInput/index.tsx";
import { Button } from "../ui/button.tsx";
import DefaultButton from "../button/index.tsx";
import { useState } from "react";
import FileInput from "../fileInput/index.tsx";
import { useForm, Control } from "react-hook-form";
import { Form as FormDefault } from "../ui/form.tsx";

const validDocuments = [
  { value: "rg", text: "RG" },
  { value: "cpf", text: "CPF (Novo)" },
  { value: "passaporte", text: "Passaporte" },
  { value: "rne", text: "RNE" },
];

const specialNeeds = [
  { value: "nao", text: "Não" },
  { value: "cadeirante", text: "Cadeirante" },
  { value: "idoso", text: "Idoso" },
  { value: "gestante", text: "Gestante" },
  { value: "outro", text: "Outro" },
];

const scheduledTempleOrdinance = [
  { value: "batisterio", text: "Batistério" },
  { value: "iniciatoria", text: "Iniciatória" },
  { value: "investidura", text: "Investidura" },
  { value: "selamento", text: "Selamento" },
];

export type IFormInput = {
  fullName: string;
  yellowFeverVaccine: Date; //confirmar tipo da data retornada
  typeDocumentation: string | number; //varias options
  documentNumber: number; //como validar? quantidade? consultar em algum lugar?
  dateBirth: Date; //confirmar tipo da data retornada
  specialNeeds: string; //varias options
  typeOrdinanceTemple: string; //varias options
  scheduledTimeTemple: string; //como validar e armazenar data e hora
  paymentMade: boolean; //se true, precisa validar arquivo anexado
  paymentVoucher: string; //verificar como validar uma imagem
};

export default function Form() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  // control,
  // register,
  // handleSubmit,
  // formState: { errors },
  const form = useForm<IFormInput>();

  function handleForm(data: IFormInput) {
    console.log(data);
  }

  return (
    <FormDefault {...form}>
      <form onSubmit={form.handleSubmit(handleForm)}>
        <div className="flex items-center justify-between p-4">
          <button
            className="text-black rounded-full p-3 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="size-7" />
          </button>
          <h1 className="text-center text-2xl font-semibold">Inscrição</h1>
          <div className="w-6"></div>{" "}
          {/* Placeholder para manter o título centralizado */}
        </div>

        <div className="p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-4 min-w-full">
            <TextInput
              label="Nome completo (Igual documentação):"
              id="fullName"
              name="fullName"
              placeholder="Digite o nome completo"
              register={form.register}
            />

            <div className="border-b border-gray-900/10 pb-0">
              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <CalendarInput
                    label="Data da vacina febre amarela:"
                    name="yellowFeverVaccine"
                    control={form.control}
                  />
                </div>

                <div className="sm:col-span-3">
                  <SelectInput
                    name="typeDocumentation"
                    label="Qual tipo de documento será usado:"
                    options={validDocuments}
                    control={form.control}
                  />
                </div>

                <div className="sm:col-span-3">
                  <TextInput
                    id="documentNumber"
                    name="documentNumber"
                    label="Número do documento:"
                    placeholder="Digite o número sem caractere especial"
                    register={form.register}
                  />
                </div>

                <div className="sm:col-span-3">
                  <CalendarInput
                    name="dateBirth"
                    label="Data de nascimento:"
                    control={form.control}
                  />
                </div>

                <div className="sm:col-span-3">
                  <SelectInput
                    name="specialNeeds"
                    label="Portador de necessidades especiais:"
                    options={specialNeeds}
                    control={form.control}
                  />
                </div>

                <div className="sm:col-span-3">
                  <SelectInput
                    name="typeOrdinanceTemple"
                    label="Ordenança agendada no templo:"
                    options={scheduledTempleOrdinance}
                    register={form.register}
                    control={form.control}
                  />
                </div>

                <div className="sm:col-span-3">
                  <TimeInput
                    name="scheduledTimeTemple"
                    label="Horário agendado no Templo:"
                    control={form.control}
                    register={form.register}
                  />
                </div>

                <div className="sm:col-span-3">
                  <RadioGroupInput
                    name="paymentMade"
                    sim={() => {
                      setVisible(true);
                    }}
                    nao={() => {
                      setVisible(false);
                    }}
                    label="Pagamento Realizado?"
                    control={form.control}
                  />
                </div>

                <div className="sm:col-span-3 mb-8">
                  {visible && <FileInput label="Anexar comprovante:" />}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse items-center gap-4 md:flex-row md:justify-end md:gap-8">
              <Button
                type="button"
                variant="secondary"
                className="w-full md:w-24 text-sm font-semibold leading-6 bg-secondary text-gray-900 bg-gray-100"
              >
                Cancelar
              </Button>
              <DefaultButton label="Concluir" />
            </div>
          </div>
        </div>
      </form>
    </FormDefault>
  );
}
