import { Box } from "@material-ui/core";
import Image from '../img/mainBack.jpg'

function MainDisplay(props) {
    return (
        <Box sx={{ backgroundImage : `url(${Image})`,
                    flexGrow : 1 }}>
            {props.children}
            hello
        </Box>
    );
}

export default MainDisplay;