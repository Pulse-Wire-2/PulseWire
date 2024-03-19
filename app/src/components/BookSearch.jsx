import { useState } from "react";

const BookSearch = ({ onChange }) => {
  const [strInput, setStrInput] = useState('');

  const handleInputChange = (e) => {
    console.log("Input changed:", e.target.value);
    setStrInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onChange(strInput);
  };

  return (
    <form onSubmit={handleSearch} className="form">
      <label htmlFor="str-input">Search By Author Name</label>
      <input
        type="text"
        value={strInput}
        onChange={handleInputChange}
      />
      <button className='btn' type="submit">Search</button>
    </form>
  );
};

export default BookSearch;
