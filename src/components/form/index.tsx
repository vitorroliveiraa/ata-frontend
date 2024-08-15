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

const validDocuments = [
  { value: "RG", text: "RG" },
  { value: "Cadeirante", text: "Cadeirante" },
  { value: "Passaporte", text: "Passaporte" },
  { value: "RNE", text: "RNE" },
];

const specialNeeds = [
  { value: "Não", text: "Não" },
  { value: "Cadeirante", text: "Cadeirante" },
  { value: "Idoso", text: "Idoso" },
  { value: "Gestante", text: "Gestante" },
  { value: "Outro", text: "Outro" },
];

const scheduledTempleOrdinance = [
  { value: "batisterio", text: "Batistério" },
  { value: "iniciatoria", text: "Iniciatória" },
  { value: "investidura", text: "Investidura" },
  { value: "selamento", text: "Selamento" },
];

export default function Form() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  function method(formData) {
    const query = formData.get();
    alert(`You searched for '${query}'`);
  }

  return (
    <form onSubmit={method}>
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
            id="fullName "
            name="fullName "
            placeholder="Digite o nome completo"
          />

          <div className="border-b border-gray-900/10 pb-0">
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <CalendarInput label="Data da vacina febre amarela:" />
              </div>

              <div className="sm:col-span-3">
                <SelectInput
                  label="Qual tipo de documento será usado:"
                  options={validDocuments}
                />
              </div>

              <div className="sm:col-span-3">
                <TextInput
                  label="Número do documento:"
                  id="documentNumber"
                  name="documentNumber"
                  placeholder="Digite o número sem caractere especial"
                />
              </div>

              <div className="sm:col-span-3">
                <CalendarInput label="Data de nascimento:" />
              </div>

              <div className="sm:col-span-3">
                <SelectInput
                  label="Portador de necessidades especiais:"
                  options={specialNeeds}
                />
              </div>

              <div className="sm:col-span-3">
                <SelectInput
                  label="Ordenança agendada no templo:"
                  options={scheduledTempleOrdinance}
                />
              </div>

              <div className="sm:col-span-3">
                <TimeInput label="Horário agendado no Templo:" />
              </div>

              <div className="sm:col-span-3">
                <RadioGroupInput
                  sim={() => {
                    setVisible(true);
                  }}
                  nao={() => {
                    setVisible(false);
                  }}
                  label="Pagamento Realizado?"
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
  );
}
