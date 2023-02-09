import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleChange = (i, event) => {
    const values = [...inputs];
    values[i].value = event.target.value;
    setInputs(values);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleRemoveInput = (i) => {
    const values = [...inputs];
    values.splice(i, 1);
    setInputs(values);
  };

  return (
    <form>
      {inputs.map((input, i) => (
        <div key={i}>
          <input type="text" value={input.value} onChange={(event) => handleChange(i, event)} />
          {i > 0 && (
            <button type="button" onClick={() => handleRemoveInput(i)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddInput}>
        Add Input
      </button>
    </form>
  );
};

export default Form;



