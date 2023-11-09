import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const handleDownload = (ref) => {
  console.log("download")
  const pdf = new jsPDF('p', 'mm', 'a4', true);
  const pdfRef=ref.current
  if(pdfRef){

    
  
    html2canvas(pdfRef).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0,0, );
      pdf.save("flashcard.pdf");
    })
    .catch ((error)=>{
      console.log("Error in genetarion of Pdf:",error);
    })
  };
};



export default handleDownload;
