import React, { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import FormV1 from "./Components/form/FormV1";
import FormV2 from "./Components/form/FormV2";

const App = () => {
  const [count, setCount] = useState(0);

  console.log('Se renderizo de nuevo la ui');
  const [user, setUser] = useState({
    name: 'Luis',
    lastName: 'Correa'
  });

  // let count = 0;
  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <FormV1 />
      <FormV2 />
      {/* <Navbar user={user} setUser={setUser}/>
      <Navbar user={user} setUser={setUser}/> */}

      {/* <main>
        <button onClick={() => {
          setCount(count + 1)
        }}>Incrementar +1</button>

        <button onClick={() => {
          setCount(count - 1)
          console.log(count);
        }}>Decremento -1</button>
        <h1>{count}</h1>
      </main> */}
    </>
  )
}

export default App;
