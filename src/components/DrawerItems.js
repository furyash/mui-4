import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import FastForwardIcon from "@material-ui/icons/FastForward";
import CreateIcon from "@material-ui/icons/Create";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlaceIcon from "@material-ui/icons/Place";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import StarIcon from "@material-ui/icons/Star";
import LocalBarIcon from "@material-ui/icons/LocalBar";

function DrawerItems() {
  let menuColor = "rgb(178, 0, 54)";

  return (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <FastForwardIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Quick Items" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CreateIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Order Items" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Full Menu" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HourglassFullIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Quantity Items" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Quality Items" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccessTimeIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Menu by Time" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PlaceIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Menu by Place" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalBarIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Desert and Beverages" />
        </ListItem>
      </List>
    </div>
  );
}

export default DrawerItems;
