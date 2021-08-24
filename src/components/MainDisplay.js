import { Box } from "@material-ui/core";
import Image from "../img/mainBack.jpg";
import SideNav from "./SideNav";

function MainDisplay(props) {
  function transit() {}

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
      <SideNav transition={transit} />
    </Box>
  );
}

export default MainDisplay;
