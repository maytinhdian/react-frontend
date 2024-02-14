import { ArrowCircleRightSharp, CatchingPokemon } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";

function home() {
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <CatchingPokemon/>
            </IconButton>
            <Typography variant="h6" component='div' sx={{flexGrow:1}}>
                TMT Innovative Sollutions
            </Typography>
            <Stack direction={'row'} spacing={2}>
                <Button color="inherit">Customer</Button>
                <Button color="inherit">Asset</Button>
                <Button color="inherit">Product</Button>
                <Button color="inherit">About</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  );
}

export default home;
