import React from 'react';
import html2canvas from 'html2canvas';
import styles from './Preview.module.scss';

export default function Preview({ canvasColor, filePreview, selectedBook, titleStyles, authorStyles }) {
  const handleDownload = () => {
    const canvasElement = document.querySelector(`.${styles.canvas}`);
    html2canvas(canvasElement).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${selectedBook.title}.png`;
      link.click();
    });
  };
  return (
    <div>
      {filePreview && (
        <div className={styles.previewPage}>
          <div className={styles.canvas} style={{ backgroundColor: canvasColor }}>
            <h2
              style={{
                fontSize: titleStyles.size,
                color: titleStyles.color,
                letterSpacing: titleStyles.letterSpacing,
                textAlign: titleStyles.textAlign,
              }}
            >
              {selectedBook.title}
            </h2>
            <img src={filePreview} alt="Cover preview" />
            <h2
              style={{
                fontSize: authorStyles.size,
                color: authorStyles.color,
                letterSpacing: authorStyles.letterSpacing,
                textAlign: authorStyles.textAlign,
              }}
            >
              {selectedBook.author}
            </h2>
          </div>
          <button className="btn dark" onClick={handleDownload}>
            Downloand
          </button>
        </div>
      )}
    </div>
  );
}
