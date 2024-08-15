import { Button } from "../ui/button.tsx";

interface Props {
  label: string;
}

const DefaultButton = ({ label }: Props) => {
  return (
    <>
      <Button
        type="submit"
        className="w-full md:w-24 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
      >
        {label}
      </Button>
    </>
  );
};

export default DefaultButton;
