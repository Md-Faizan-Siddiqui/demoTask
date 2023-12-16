import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { routes } from "../../lib/routes";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window, Component } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar
        sx={{
          display: { md: "flex", sm: "flex", xs: "none" },
        }}
      >
        <Box>
          <DehazeRoundedIcon
            sx={{ color: "#B5B5B5" }}
            onClick={handleDrawerToggle}
          />
        </Box>
      </Toolbar>
      <List sx={{ padding: "16px" }}>
        {routes.map((text, index) => (
          <>
            <ListItem
              key={index}
              onClick={() => {
                navigate(text?.route);
              }}
              sx={{
                borderRadius: "6px",
                cursor: "pointer",
                mb:"17px",
                color: text.route == location.pathname ? "#fff" : "#848484",
                background:
                  text.route == location.pathname ? "#7A5CFA" : "none",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "30px",
                  color: text.route == location.pathname ? "#fff" : "#848484",
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.menu} />
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: "none", xs: "block" },
          background: "#F9F9F9",
          boxShadow: "none",
          "& .css-hyum1k-MuiToolbar-root": {
            minHeight: "90px",
            pl: "30px",
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <DehazeRoundedIcon
              sx={{
                color: "#B5B5B5",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              mt: "90px",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              mt: "25px",
              border: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: "17px",
          mr: "50px",
        }}
      >
        <Component />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
