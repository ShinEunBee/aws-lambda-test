import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("-");
  const testUrl = import.meta.env.VITE_TEST_FUNCTION_URL;

  async function testFunc() {
    const res = await fetch(testUrl, { method: "GET" });
    const data = await res.json();
    setText(data.time);
  }

  return (
    <>
      <button onClick={testFunc}>다시 호출</button>
      <div>{text}</div>
    </>
  );
}

export default App;
