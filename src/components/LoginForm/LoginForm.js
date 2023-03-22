import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit =  e => {
    e.preventDefault();
    const form = e.currentTarget;

    let info = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
     dispatch(logIn(info));
      form.reset();
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blueviolet' }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
              '& label.Mui-focused': {
                color: 'blueviolet',
              },

              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'blueviolet',
                },
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, bgcolor: 'blueviolet',
                '&:hover': {
                  backgroundColor: '#4B0082',
                },
                '&:focus': {
                  backgroundColor: '#4B0082',
                }
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default LoginForm;