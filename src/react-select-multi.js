import "./styles.css";
import { useState } from "react";
import Select from "react-select";

export default function ReactSelectMulti() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
    // Add more options as needed
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  return (
    <div className="App">
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleSelectChange}
      />
    </div>
  );
}
