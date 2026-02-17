type Props = {
  timeLeft: number;
  wpm: number;
};

export default function StatsBar({ timeLeft, wpm }: Props) {
  return (
    <div className="flex justify-between bg-white p-4 rounded shadow">
      <div>⏱ Time: {timeLeft}</div>
      <div>⚡ WPM: {wpm}</div>
    </div>
  );
}
