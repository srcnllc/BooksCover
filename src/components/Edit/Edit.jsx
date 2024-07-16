import React from 'react';
import styles from './Edit.module.scss';
import { MdInput } from 'react-icons/md';
import Draggable from 'react-draggable';
export default function Edit({
  canvasColor,
  setCanvasColor,
  handleFileChange,
  fileName,
  filePreview,
  setFilePreview,
  selectedBook,
  setActiveIndex,
  titleStyles,
  authorStyles,
  setTitleStyles,
  setAuthorStyles,
  handleStop,
  handleStop2
}) {
  const handleBackClick = () => {
    console.log('Selected Book ID:', selectedBook);
    setFilePreview(null);
  };
  const handleNextClick = () => {
    console.log('Selected Book ID:', selectedBook);
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handleTitleStylesChange = (event) => {
    const { name, value } = event.target;
    setTitleStyles((prevStyles) => ({
      ...prevStyles,
      [name]: name === 'size' || name === 'letterSpacing' ? `${value}px` : value,
    }));
  };
  const handleCanvasStylesChange = (event) => {
    setCanvasColor(event.target.value);
  };
  const handleAuthorStylesChange = (event) => {
    const { name, value } = event.target;
    setAuthorStyles((prevStyles) => ({
      ...prevStyles,
      [name]: name === 'size' || name === 'letterSpacing' ? `${value}px` : value,
    }));
  };
  return (
    <div className={styles.edit}>
      {filePreview ? null : (
        <div className={styles.formGroup}>
          <input
            type="file"
            id="cover"
            name="cover"
            className={styles.fileInput}
            accept="image/jpeg, image/png, image/gif"
            onChange={handleFileChange}
          />
          <label htmlFor="cover" className={styles.fileLabel}>
            <MdInput />
            {fileName ? fileName : 'Upload cover image'}
          </label>
        </div>
      )}
      {filePreview && (
        <div className={styles.editCover}>
          <div className={styles.editInput}>
            <h3>Select a textbox and style the text</h3>
            <div className={styles.canvasColor}>
              <label htmlFor="canvasColor">Canvas Background Color:</label>
              <input type="color" id="head" name="head" value={canvasColor} onChange={handleCanvasStylesChange} />
            </div>
            <div className={styles.titleEdit}>
              <h4>Title Edit</h4>
              <div className={styles.fontSize}>
                <label htmlFor="size1">Font Size</label>
                <input
                  type="number"
                  placeholder="22"
                  id="size"
                  name="size"
                  value={parseInt(titleStyles.size, 10)}
                  onChange={handleTitleStylesChange}
                />
              </div>
              <div className={styles.textColor}>
                <label htmlFor="color">Color</label>
                <select name="color" id="color" onChange={handleTitleStylesChange} value={titleStyles.color}>
                  <option value="black">Black</option>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                  <option value="white">White</option>
                </select>
              </div>
              <div className={styles.fontSpacing}>
                <label htmlFor="letterSpacing1">Letter Spacing</label>
                <input
                  type="number"
                  placeholder="22"
                  id="letterSpacing"
                  name="letterSpacing"
                  value={parseInt(titleStyles.letterSpacing, 10)}
                  onChange={handleTitleStylesChange}
                />
              </div>
            </div>
            <div className={styles.authorEdit}>
              <h4>Author Edit</h4>
              <div className={styles.fontSize}>
                <label htmlFor="size">Font Size</label>
                <input
                  type="number"
                  placeholder="22"
                  id="size"
                  name="size"
                  value={parseInt(authorStyles.size, 10)}
                  onChange={handleAuthorStylesChange}
                />
              </div>
              <div className={styles.textColor}>
                <label htmlFor="color">Color</label>
                <select name="color" id="color" onChange={handleAuthorStylesChange} value={authorStyles.color}>
                <option value="black">Black</option>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                  <option value="white">White</option>
                </select>
              </div>
              <div className={styles.fontSpacing}>
                <label htmlFor="letterSpacing">Letter Spacing</label>
                <input
                  type="number"
                  placeholder="22"
                  id="letterSpacing"
                  name="letterSpacing"
                  value={parseInt(authorStyles.letterSpacing, 10)}
                  onChange={handleAuthorStylesChange}
                />
              </div>

            </div>
          </div>
          <div className={styles.imagePreview}>
            <div className={styles.canvas} style={{ backgroundColor: canvasColor }}>
            <Draggable
              defaultPosition={{x: 0, y: 0}}
              bounds="parent"
              onStop={handleStop}

            >
            <h2
                style={{
                  fontSize: titleStyles.size,
                  color: titleStyles.color,
                  letterSpacing: titleStyles.letterSpacing,
                }}
              >
                {selectedBook.title}
              </h2>
          </Draggable>

              <img src={filePreview} alt="Cover preview" />
              <Draggable
              defaultPosition={{x: 0, y: 0}}
              bounds="parent"
              onStop={handleStop2}

            >
              <h2
                style={{
                  fontSize: authorStyles.size,
                  color: authorStyles.color,
                  letterSpacing: authorStyles.letterSpacing,
                }}
              >
                {selectedBook.author}
              </h2>
              </Draggable>
            </div>
          </div>
        </div>
      )}
      <div className={styles.buttons}>
        {filePreview && (
          <button className="btn dark" onClick={handleBackClick}>
            Back
          </button>
        )}
        {filePreview && (
          <button className="btn dark" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
