import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import {useRouter} from "next/router";
import PdfViewer from "../components/templates/PdfViewer";

export const Home = (): JSX.Element => {
    const router = useRouter();
    const [pdfPath, setPdfPath] = useState('');

    useEffect(() => {
        if (router.query?.url) {
            setPdfPath('/api/proxy?url=' + router.query.url)
        }
    }, [router.query])

    const usageDom = <div>
        <p>使い方</p>
        <p>{'/?url={pdf path}'}</p>
    </div>

    return (
        <>
            <Head>
                <title>PDF Viewer</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {pdfPath ? <PdfViewer pdfPath={pdfPath}/> : usageDom}
        </>
    )
}

export default Home
