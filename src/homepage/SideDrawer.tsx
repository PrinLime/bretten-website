import { Drawer, Typography } from "@mui/material";

interface SideDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  openDrawer,
  setOpenDrawer,
}) => (
  <>
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(!openDrawer);
      }}
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
        },
      }}
    ></Drawer>

    {/* Main Content (This part will be shown below the AppBar) */}
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Welcome to My Website</Typography>
      <p>Content goes here...</p>
    </div>
  </>
);

export default SideDrawer;
