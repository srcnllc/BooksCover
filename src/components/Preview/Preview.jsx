import React from 'react';
import html2canvas from 'html2canvas';
import styles from './Preview.module.scss';

export default function Preview({ canvasColor, filePreview, selectedBook, titleStyles, authorStyles ,positionTitle,positionauthor}) {
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
                left: positionTitle.x,
                top: positionTitle.y,
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
                left: positionauthor.x,
                top: positionauthor.y,
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
