export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Typing Speed Test</h1>

      <select className="bg-gray-800 px-3 py-1 rounded">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </header>
  );
}
