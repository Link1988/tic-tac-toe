import X from "@/components/Icons/X";
import Circle from "@/components/Icons/Circle";

type Props = {
  value: "X" | "O" | null;
  onClickPosition: () => void;
};

export default function Square({ value, onClickPosition }: Props) {
  return (
    <button
      onClick={onClickPosition}
      className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center border-4 border-white rounded-xl transition-all duration-300 ease-in-out text-white text-5xl sm:text-6xl font-bold hover:scale-105"
    >
      {value && (
        <span className="animate-scale-in">
          {value === "X" ? <X /> : <Circle />}
        </span>
      )}
    </button>
  );
}
