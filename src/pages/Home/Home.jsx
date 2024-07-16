import React, { useState } from 'react';
import styles from './Home.module.scss';
import Container from '../../components/Tools/Container/Container';
import Header from '../../components/Header/Header';
import ChooseBooks from '../../components/ChooseBooks/ChooseBooks';
import Edit from '../../components/Edit/Edit';
import Preview from '../../components/Preview/Preview';

export default function Home({ data }) {
  console.log('dataaa', data);

  const [activeIndex, setActiveIndex] = useState(0);
  const [fileName, setFileName] = useState('Click to Import Cover Image');
  const [filePreview, setFilePreview] = useState(null);
  const [selectedBook, setSelectedBook] = useState({ title: '', anchor: '' });
  const [canvasColor, setCanvasColor] = useState('black');
  const [positionTitle, setPositionTitle] = useState({ x: 0, y: 0 });
  const [positionauthor, setPositionauthor] = useState({ x: 0, y: 0 });
  
  const [titleStyles, setTitleStyles] = useState({
    size: '22px',
    color: 'white',
    letterSpacing: '0px',
  });
  const [authorStyles, setAuthorStyles] = useState({
    size: '22px',
    color: 'white',
    letterSpacing: '0px',
  });



  const handleStop = (e, data) => {
    setPositionTitle({ x: data.x, y: data.y });
  };
  const handleStop2 = (e, data) => {
    setPositionauthor({ x: data.x, y: data.y });

  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file?.name || '');
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFilePreview(fileURL);
    } else {
      setFilePreview(null);
    }
  };
  if (!data || !data.results || !data.results.books) {
    return <div>Loading...</div>;
  }
  return (
    <section className={styles.homePage}>
      <Container large>
        <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        {activeIndex === 0 && (
          <ChooseBooks
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
            setActiveIndex={setActiveIndex}
            data={data}
          />
        )}
        {activeIndex === 1 && (
          <Edit
            handleFileChange={handleFileChange}
            fileName={fileName}
            filePreview={filePreview}
            setFilePreview={setFilePreview}
            selectedBook={selectedBook}
            setActiveIndex={setActiveIndex}
            titleStyles={titleStyles}
            authorStyles={authorStyles}
            setTitleStyles={setTitleStyles}
            setAuthorStyles={setAuthorStyles}
            canvasColor={canvasColor}
            setCanvasColor={setCanvasColor}
            handleStop={handleStop}
            handleStop2={handleStop2}

            p
          />
        )}
        {activeIndex === 2 && (
          <Preview
            handleFileChange={handleFileChange}
            fileName={fileName}
            filePreview={filePreview}
            selectedBook={selectedBook}
            setActiveIndex={setActiveIndex}
            titleStyles={titleStyles}
            authorStyles={authorStyles}
            setTitleStyles={setTitleStyles}
            setAuthorStyles={setAuthorStyles}
            canvasColor={canvasColor}
            setCanvasColor={setCanvasColor}
            positionTitle={positionTitle}
            positionauthor={positionauthor}
          />
        )}
      </Container>
    </section>
  );
}
