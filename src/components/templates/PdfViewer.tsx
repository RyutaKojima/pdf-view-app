import React, {useCallback, useEffect, useRef, useState} from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import {range} from '../../plugins/range'
import PdfViewerToolbar from "../organisms/PdfViewerToolbar";
import {Center} from "@chakra-ui/react";
import StickyBox from "../atoms/StickyBox";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({pdfPath}) => {
    const [numPages, setNumPages] = useState(0);
    const [pageNo, setPageNo] = useState(1);
    const pageRef = useRef([])

    const handleScroll = useCallback(() => {
        const PAGE_CHANGE_THRESHOLD_Y = 100

        let currentPageNo = 1
        pageRef.current.forEach((ref, index) => {
            const domRect = ref.current.getBoundingClientRect();

            if (domRect.y <= PAGE_CHANGE_THRESHOLD_Y) {
                currentPageNo = index + 1
            }
        })

        setPageNo(currentPageNo)
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, {passive: true})
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function onDocumentLoadSuccess({numPages}) {
        range(1, numPages).forEach((_, i) => {
            pageRef.current[i] = pageRef.current[i] ?? React.createRef()
        })

        setNumPages(numPages);
    }

    return (
        <>
            <StickyBox zIndex="sticky">
                <PdfViewerToolbar overridePageNo={pageNo} numPages={numPages} file={pdfPath} onChangePage={(pageNo) => {
                    pageRef.current[pageNo - 1]?.current?.scrollIntoView();
                }}/>
            </StickyBox>
            <Center bg="gray.600">
                <Document
                    file={pdfPath}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {range(1, numPages).map((p, index) => {
                        return (
                            <Center key={`page-${p}`} ref={pageRef.current[index]} py="10px">
                                <Page pageNumber={p}/>
                            </Center>
                        )
                    })}
                </Document>
            </Center>
        </>
    )
}

export default PdfViewer
