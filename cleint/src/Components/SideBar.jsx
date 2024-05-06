import { Drawer } from "@mui/material";
import React from "react";
import SideBarContent from "./SideBarContent";
import ComposeMail from "./ComposeMail";

const SideBar = ({ openDrawer }) => {
  return (
    <div>
      <Drawer
        anchor="left"
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{ keepMounted: true }}
        variant="persistent"
        sx={{ "& .MuiDrawer-paper": { marginTop: "64px", width:200, background:'#bf80ff', borderRight: 'none', height: 'calc(100vh - 64px)'} }}
      >
        <SideBarContent/>
        <ComposeMail />
      </Drawer>
    </div>
  );
};

export default SideBar;
