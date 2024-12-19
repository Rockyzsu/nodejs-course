import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    (async () => {
      try{
      const req = await axios.get("http://localhost:22222/messages/nasa");
      console.log(req.data[0].author);
      setUser(req.data[0].author);
      }catch(err){
        console.log(err);
        setUser("Error");
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>CORS</h1>
      <h2>UserName： {user}</h2>
    </div>
  );
}

export default App;
