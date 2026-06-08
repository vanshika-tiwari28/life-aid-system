"use client";
import { useState } from "react";

export default function Page() {
  const [donors, setDonors] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/donor/search?bloodGroup=B%2B&city=Delhi"
      );

      const data = await res.json();
      console.log(data);

      setDonors(data);

    } catch (error) {
      console.log(error);
      alert("Still not working");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>TEST SEARCH</h2>

      <button onClick={handleSearch}>Click Me</button>

      <ul>
        {donors.map((d) => (
          <li key={d._id}>
            {d.name} - {d.city}
          </li>
        ))}
      </ul>
    </div>
  );
}