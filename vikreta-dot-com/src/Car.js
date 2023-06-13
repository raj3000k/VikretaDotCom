import { View, Text } from "react-native";
import React from "react";
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: "ford" };
  }
}
export default function Car() {
  render();
  return (
    <div>
      <h1>My Car</h1>
    </div>
  );
}
