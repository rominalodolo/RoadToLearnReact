import React, { useState } from 'react';

// const StandaloneTextInput = () => (
//   <div>
//     <label>
//       My uncontrolled Input: <input type="text" />
//     </label>
//   </div>
// );

// const StandaloneTextInput = () => {
//   const [value, setValue] = useState('Hello React');

//   const handleChange = event => setValue(event.target.value);

//   return (
//     <div>
//       <label>
//         My still uncontrolled Input:
//         <input type="text" onChange={handleChange} />
//       </label>

//       <p>
//         <strong>Output:</strong> {value}
//       </p>
//     </div>
//   );
// };

const StandaloneTextInput = () => {
  const [value, setValue] = useState('Hello React');

  const handleChange = event => setValue(event.target.value);

  return (
    <div>
      <label>
        My controlled Input:
        <input type="text" value={value} onChange={handleChange} />
      </label>

      <p>
        <strong>Output:</strong> {value}
      </p>
    </div>
  );
};

export default StandaloneTextInput;
