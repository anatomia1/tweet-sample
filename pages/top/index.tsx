import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const submit = ()=>{
    alert("clicked")
  }
  return (
    <div>
      <h1>Top Page</h1>
      
    </div>
  );
}