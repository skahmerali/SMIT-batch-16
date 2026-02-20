import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#111827" }}>
      <Toolbar>

        {/* Logo / Brand */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#38bdf8" }}
        >
          MyApp
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "white", textTransform: "none" }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/signup"
            sx={{ color: "white", textTransform: "none" }}
          >
            Register
          </Button>

          <Button
            component={Link}
            to="/login"
            sx={{ color: "white", textTransform: "none" }}
          >
            Login
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;