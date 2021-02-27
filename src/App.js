import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
