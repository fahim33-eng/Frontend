import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

const PdfGenerator = () => {
  // Assume you have state for user inputs
  const userInputs = {
    firstName: 'John',
    lastName: 'Doe',
    // ...
  };
  return (
    <div>
      {/* Your user input form here */}
      <PDFDownloadLink document={<PdfDocument userInputs={userInputs} />} fileName="user_input.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PdfGenerator;





