'use client'

import React, { useState } from 'react';
import pdfToText from "react-pdftotext";

const PDFTextExtractor = () => {
  const [extractedText, setExtractedText] = useState('');



  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    pdfToText(file)
        .then((text) => {
            setExtractedText(text);
        })
        .catch((err) => {
            console.error(err);
        });
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />

      <div>{extractedText}</div>
    </div>
  );
};

export default PDFTextExtractor;