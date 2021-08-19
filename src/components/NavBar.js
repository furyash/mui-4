import { Box, Button, IconButton, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function NavBar(){
    return (
    <Toolbar>
        <IconButton edge="start" color="primary"><Menu/></IconButton>
        <Box sx={{ flexGrow: 1}}></Box>
        <Button variant="outlined" color="secondary">Login</Button>
    </Toolbar>
    );
}

export default NavBar;