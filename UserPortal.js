import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.js";
import MissingHall from "../components/MissingHall.js";
import MissingHall1 from "../components/MissingHall1.js";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.white,
  },
  hide: {
    display: "none",
  },

  drawerPaper: {
    width: 300,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />

        <nav
          class="navbar navbar-expand navbar-white navbar-dark bg-dark mb-2"
          style={{ width: "1820px" }}
        >
          <IconButton
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            style={{ color: "white" }}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div class="navbar-brand  ">User Portal</div>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto navbar-right">
              <li className="nav-item active">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Report">
                  <b>F</b>ile <b>R</b>eport
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Trustee">
                  <b>A</b>dd <b>T</b>rustee
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/Image">
                  <b>S</b>earch <b>B</b>y <b>I</b>mage
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Reports">
                  <b>R</b>eports
                </Link>
              </li>
            </ul>
          </div>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {[
                <b>User Portal</b>,
                <b>Posts</b>,
                <b>Profile</b>,
                <b>Reports</b>,
                <b>Missing</b>,
              ].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[<b>Settings</b>, <b>Privacy</b>, ].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <button
                  type="button"
                  className="btn btn-primary btn-lg login-button"
                  style={{ marginLeft: "80px", marginTop: "-5px" }}
                >
                  Logout
                </button>
          </Drawer>
        </nav>
      </div>
      <MissingHall1 />
      <MissingHall />
    </div>
  );
}
