import { Box, Button, IconButton, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function NavBar(props) {
  const { onTap, open, setColor } = props;
  let coloring = setColor;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        {!open && (
          <IconButton edge="start" color={coloring} onClick={onTap}>
            <Menu />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button sx={{ position: "fixed" }} variant="outlined" color="secondary">
          Login
        </Button>
      </Toolbar>
    </Box>
  );
}

export default NavBar;
