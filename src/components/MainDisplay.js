import { Box } from "@material-ui/core";
import Image from "../img/mainBack.jpg";

function MainDisplay(props) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      {props.children}
    </Box>
  );
}

export default MainDisplay;
