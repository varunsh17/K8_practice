import "./App.css";
import { useEffect, useState } from "react";

const url = "http://express-service/";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">{data ? JSON.stringify(data) : "Loading..."}</div>
  );
}

export default App;
