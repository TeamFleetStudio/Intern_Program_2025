type Props = {
  text: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  timeLeft: number;
};

export default function TypingArea({ text, input, setInput, timeLeft }: Props) {

  const mistakeCount = text.split("").slice(0, input.length)
  .filter((char, i) => input[i] !== char).length;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold"> Type the following paragraph </h1>
      <p className="text-lg leading-relaxed">
        {text.split("").map((char, index) => {
          let color = "";

          if (index < input.length) {
            color =
              input[index] === char
                ? "text-green-600"
                : "bg-red-400";
          }

          return (
            <span key={index} className={color}>
              {char}
            </span>
          );
        })}
      </p>

      <textarea
        className="w-full mt-4 border p-3 rounded"
        value={input}
        onChange={(e) => {

          const value = e.target.value;
          if (value.length < input.length) {
            setInput(value);
            return;
          }
          if (mistakeCount >= 5) return;

          setInput(value);
        }}
        disabled={timeLeft === 0}
      />

      {timeLeft === 0 && (
        <p className="mt-4 text-red-600 font-semibold"> ⏱️ Time's up! Test ended.</p>
      )}
      {mistakeCount >= 5 && (
        <p className="mt-4 text-red-600 font-semibold">
          ❌ 5 mistakes reached. Fix errors to continue.
        </p>
      )}

    </div>
  );
}
