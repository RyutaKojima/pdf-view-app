import {useEffect, useState} from "react";
import {chakra, Flex, IconButton, NumberInput, NumberInputField} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";

const Pager = ({overridePageNo, numPages, onChangePage}) => {
    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        setPageNo(overridePageNo)
    }, [overridePageNo])

    const handleSubmit = (e) => {
        e.preventDefault()
        onChangePage(pageNo)
    }
    const handlePrevButton = () => {
        if (pageNo > 1) {
            const newPageNo = pageNo - 1
            setPageNo(newPageNo)
            onChangePage(newPageNo)
        }
    }
    const handleNextButton = () => {
        if (pageNo < numPages) {
            const newPageNo = pageNo + 1
            setPageNo(newPageNo)
            onChangePage(newPageNo)
        }
    }
    const handleInputPageNo = (newValue) => {
        setPageNo(Number(newValue))
    }

    return (
        <chakra.form onSubmit={handleSubmit}>
            <Flex alignItems='center'>
                <IconButton aria-label="Prev page" icon={<ChevronUpIcon/>} onClick={handlePrevButton}/>
                <NumberInput size="sm" maxW={16} min={1} value={pageNo} onChange={handleInputPageNo}>
                    <NumberInputField/>
                </NumberInput>
                <p>/</p>
                <p>{numPages}</p>
                <IconButton aria-label="Next page" icon={<ChevronDownIcon/>} onClick={handleNextButton}/>
            </Flex>
        </chakra.form>
    )
}

export default Pager
