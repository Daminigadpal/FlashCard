import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadPDF = async (pdfRef, cards) => {
  const pdf = new jsPDF('p', 'mm', 'a4', true);

  for (let i = 0; i < cards.length; i++) {
    const cardRef = pdfRef.current.children[i];
    
    // Use Promise.all to wait for all promises to resolve
    await Promise.all([html2canvas(cardRef)]).then(([canvas]) => {
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0);
      if (i < cards.length - 1) {
        pdf.addPage(); // Add a new page for the next card
      }
    });
  }

  pdf.save("flashcards.pdf");
};

export default downloadPDF;
