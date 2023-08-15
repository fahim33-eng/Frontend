import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
  },
});

const PdfDocument = ({ userInputs }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>User Input PDF</Text>
        <Text style={styles.content}>First Name: {userInputs.firstName}</Text>
        <Text style={styles.content}>Last Name: {userInputs.lastName}</Text>
        {/* Include other user input fields */}
      </View>
    </Page>
  </Document>
);

export default PdfDocument;