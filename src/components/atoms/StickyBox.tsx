import {FC} from "react";
import {Box, BoxProps} from "@chakra-ui/react";

const StickyBox: FC<BoxProps> = (props) => {
    return (<Box sx={{
            position: [
                '-webkit-sticky' /* Safari */,
                'sticky'
            ],
            top: '0',
        }}
                 {...props}>{props.children}</Box>
    )
}

export default StickyBox
