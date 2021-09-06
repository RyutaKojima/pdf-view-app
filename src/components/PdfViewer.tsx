import {useState} from "react";

import {Document, Page, pdfjs} from 'react-pdf';
import {range} from '../plugins/range'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({pdfPath}) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {range(1, numPages).map((p) => {
                return (<Page key={`page-${p}`} pageNumber={p}/>)
            })}
        </Document>
    )
}

export default PdfViewer
