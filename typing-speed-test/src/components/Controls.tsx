type Props = {
  reset: () => void;
};

export default function Controls({reset}: Props) {
  return (
    <div className="flex gap-4">
      <button onClick={reset} className="px-4 py-2 bg-red-600 text-white rounded">
        Reset
      </button>
 
    </div>
  );
}
