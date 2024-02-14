import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TMT Innovative Sollutions
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/customer");
              }}
            >
              Customer
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/product");
              }}
            >
              Product
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button color="inherit">About</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
