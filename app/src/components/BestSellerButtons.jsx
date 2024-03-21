const BestSellerButtons = ({buttonClick}) => {
  
  const handleButtonClick = (e) => {
    e.preventDefault();
    const key = e.target.dataset.key;
    console.log("Clicked button with key:", key);
    buttonClick(key)
  }

  return (
    <div className="sectionBook">
      <button className="buttonLayout" data-key="Hardcover-Fiction" onClick={handleButtonClick}>Hardcover Fiction</button>
      <button className="buttonLayout" data-key="Hardcover-Nonfiction" onClick={handleButtonClick}>Hardcover NonFiction</button>
      <button className="buttonLayout" data-key="Series-Books" onClick={handleButtonClick}>Series Books</button>
      <button className="buttonLayout" data-key="Business-Books" onClick={handleButtonClick}>Business Books</button>
      <button className="buttonLayout" data-key="Graphic-Books-and-Manga" onClick={handleButtonClick}>Graphic Books and Manga</button>
    </div>
  )
}

export default BestSellerButtons;




























// import { useState } from "react";

// const BestSeller = ({ onChange }) => {
//   const [strInput, setStrInput] = useState('');

//   const handleInputChange = (e) => {
//     console.log("Input changed:", e.target.value);
//     setStrInput(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onChange(strInput);
//   };

//   return (
//     <form onSubmit={handleSearch} className="form">
//       <label htmlFor="str-input">Search By Author Name</label>
//       <input
//         type="text"
//         value={strInput}
//         onChange={handleInputChange}
//       />
//       <button className='btn' type="submit">Search</button>
//     </form>
//   );
// };

// export default BestSeller;
