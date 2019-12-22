import React from 'react';
import './styles/App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.css';


function print() {
  const filename  = 'Diploma Omar Bueno.pdf';

  html2canvas(document.querySelector('#diplomacompleto')).then(canvas => {
    let pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
    pdf.save(filename);
  });
}

function App() {
  var parsedUrl = new URL(window.location.href);
  var nombre = parsedUrl.searchParams.get("nombre");
  var twitter = parsedUrl.searchParams.get("twitter");
  var premio = parsedUrl.searchParams.get("premio");
  return (
    <React.Fragment>
      <div className="container-fluid" id="diplomacompleto">
        <div className="diploma">
          <h1>Diploma Omar Bueno</h1>
          <h2>A</h2>
          <p className="nombre">{nombre} <span className="twitter"><a href={`https://twitter.com/${twitter}`}>@{twitter}</a></span></p>
          <p className="motivo">por obtener con éxito el reconocimiento a:</p>
          <h3>{premio}</h3>
        </div>
      </div>
      <br />
      <button className="btn btn-success" onClick={print}>Generar PDF del diploma</button>

      
    </React.Fragment>
  );
}

export default App;
