import "./App.css";
import { useEffect, useState } from "react";
import Card from "./component/card";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        console.log("response :>> ", response);
        setUsers(response);
      })
      .catch((error) => console.log(error));
  }, []);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log('response :>> ', response);
  //       // setUsers(response);
  //     })
  //     .catch((error) => {
  //       console.log("error :>> ", error);
  //     });
  // }, []);

  return (
    <div>
      {users.map((user) => {
       return <Card user={user} key={user.id}/>;
      })}
    </div>
    // <div className="App">
    //   {users.map((user) => {
    //     return <Card key={user.id} user={user} />;
    //   })}
    // </div>
  );
}

export default App;

// fetch("")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log("response :>> ", response);
//   })
//   .catch((error) => {
//     console.log("error :>> ", error);
//   });
