import {Box, Flex, Icon, IconButton, Spacer} from "@chakra-ui/react"
import {AiOutlineDownload, AiOutlinePrinter} from "react-icons/ai"
import Pager from "../molecules/Pager";
import ZoomControlPanel from "../molecules/ZoomControlPanel";

const ToolbarRight = ({file}) => {
    return (
        <Flex alignItems='center'>
            <IconButton
                aria-label="Search database"
                icon={<Icon as={AiOutlineDownload}/>}
                onClick={() => {
                    window.open(file, '_blank')
                }}
            />
            <IconButton
                aria-label="Search database"
                icon={<Icon as={AiOutlinePrinter}/>}
                onClick={() => {
                    window.print()
                }}
            />
        </Flex>
    )
}

const PdfViewerToolbar = ({overridePageNo, numPages, file, onChangePage}) => {
    return (
        <Box p={1} bg="gray.200" border="1px" borderColor="gray.300">
            <Flex>
                <Pager overridePageNo={overridePageNo} numPages={numPages} onChangePage={onChangePage}/>
                <Spacer/>
                <ZoomControlPanel/>
                <Spacer/>
                <ToolbarRight file={file}/>
            </Flex>
        </Box>
    )
}


export default PdfViewerToolbar