import { useState } from "react";
import "./App.css";

type List = {
  id: string;
  text: string;
};

function App() {
  const [list, setList] = useState<List[]>([]);
  const testUrl = import.meta.env.VITE_TEST_FUNCTION_URL;

  async function testFunc() {
    const res = await fetch(`${testUrl}/list`).then((r) => r.json());

    setList(res.items);
  }

  return (
    <>
      <button onClick={testFunc}>다시 호출</button>

      <div>
        {list.map((line, index) => (
          <li key={index}>{line.text}</li>
        ))}
      </div>
    </>
  );
}

export default App;
