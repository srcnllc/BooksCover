import React from 'react';
import styles from './ChooseBooks.module.scss';

export default function ChooseBooks({ data, setSelectedBook, selectedBook, setActiveIndex }) {
  const handleNextClick = () => {
    console.log('Selected Book ID:', selectedBook);
    setActiveIndex((prevIndex) => prevIndex + 1);
  };
  const handleSelectChange = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    setSelectedBook({
      title: selectedOption.getAttribute('data-title'),
      author: selectedOption.getAttribute('data-author'),
    });
  };
  return (
    <div className={styles.form}>
      <select name="book" id="book" onChange={handleSelectChange}>
        <option value="">Select book to edit cover page</option>
        {data.results.books.map((item, index) => (
          <option key={index} value={item.id} data-title={item.title} data-author={item.author}>
            {item.title}
          </option>
        ))}
      </select>
      <div>
        <button className="btn dark" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
