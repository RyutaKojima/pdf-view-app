import {NextApiRequest, NextApiResponse} from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const pdfUrl = String(req.query.url ?? `https://www.mlit.go.jp/report/press/content/001422027.pdf`)
    const response = await fetch(pdfUrl)

    res.setHeader('Content-Type', 'application/pdf')
    res.send(response.body)

    // NOTE: sample local file
    // const filePath= path.resolve('.', 'public/sample.pdf')
    // const fileBuffer= fs.readFileSync(filePath)
    // res.setHeader('Content-Type', 'application/pdf')
    // res.send(fileBuffer)
}

export default handler
