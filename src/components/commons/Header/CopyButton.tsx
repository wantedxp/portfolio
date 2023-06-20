import { CopyIcon } from "@/icons/CopyIcon";

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  function handleCopy() {
    navigator.clipboard.writeText(textToCopy);
  }

  return (
    <button
      className="inline-flex justify-center items-center"
      onClick={handleCopy}
    >
      <CopyIcon title="Clique aqui para copiar" />
    </button>
  );
}
