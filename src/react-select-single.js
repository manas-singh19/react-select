import "./styles.css";
import { useState } from "react";
import Select from "react-select";

export default function ReactSelectSingle() {
  const [defaultValue, setDefaultValue] = useState({
    label: "Option 2",
    value: 2
  });

  const options = [
    {
      label: "Option 1",
      value: 1
    },
    {
      label: "Option 2",
      value: 2
    },
    {
      label: "Option 3",
      value: 3
    }
  ];
  return (
    <div className="App">
      <Select
        defaultValue={defaultValue}
        onChange={(e) => setDefaultValue(e)}
        options={options}
      />
    </div>
  );
}
