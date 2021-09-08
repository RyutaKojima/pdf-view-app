import {useState} from "react";
import {Flex, Icon, IconButton, Input} from "@chakra-ui/react";
import {AiOutlineZoomIn, AiOutlineZoomOut} from "react-icons/ai";

const ZoomControlPanel = () => {
    const [value, setValue] = useState(100)
    const setRangedValue = (value) => {
        const newNum = Number(value)
        if (isNaN(newNum)) {
            return
        }
        const newValue = Math.min(200, Math.max(40, newNum))
        setValue(newValue)
    }

    return (
        <Flex alignItems='center'>
            <IconButton aria-label="Search database"
                        icon={<Icon as={AiOutlineZoomOut}/>}
                        onClick={() => {
                            setRangedValue(value - 10)
                        }}
            />

            <Input size="xs"
                   w={12}
                   value={value}
                   onChange={(e) => {
                       setRangedValue(Number(e.target.value))
                   }}
            />

            <IconButton aria-label="Search database"
                        icon={<Icon as={AiOutlineZoomIn}/>}
                        onClick={() => {
                            setRangedValue(value + 10)
                        }}
            />
        </Flex>
    )
}

export default ZoomControlPanel
