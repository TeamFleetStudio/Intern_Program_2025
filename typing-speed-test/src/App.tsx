import Header from "./components/Header";
import TypingArea from "./components/TypingArea";
import StatsBar from "./components/StatsBar";
import Controls from "./components/Controls";
import { paragraphs } from "./data/data";
import { useTyping } from "./hooks/useTyping";

export default function App() {
  const text = paragraphs[0];

  const {
    input, 
    setInput,
    timeLeft,
    wpm, 
    reset
  } = useTyping(text, 60);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <StatsBar timeLeft={timeLeft} wpm={wpm} />
        <TypingArea text={text} input={input} setInput={setInput} timeLeft={timeLeft} />
        <Controls reset={reset} />

      </div>
    </div>
  );
}
