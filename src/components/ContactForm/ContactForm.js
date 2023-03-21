import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectContacts, selectOperation } from 'redux/contacts/contactSelectors';
import { addContact } from 'redux/contacts/ContactOperations';
import { Loader } from 'components/Loader/Loader';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const operation = useSelector(selectOperation);

  const dispatch = useDispatch();
  

  const handleSubmit =  e => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = form;

    let value = {
      name: name.value,
      number: number.value,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return toast(`${name.value} is already in contacts.`, {
        duration: 3000,
      });
    }

     dispatch(addContact(value));
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
            padding: '20px',
          }}
        >
          <Typography component="h1" variant="30px" sx={{ color: 'bleack' }}>
            New Contact
          </Typography>
          <Box
            component="form"
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
                  id="name"
                  label="Name contact"
                  name="name"
                  type="text"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  name="number"
                  label="Number"
                  type="tel"
                  autoComplete="new-tel"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={operation === 'add'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                mt: 3,
                mb: 2,
                bgcolor: 'blueviolet',
                '&:hover': {
                  backgroundColor: '#4B0082',
                },
                '&:focus': {
                  backgroundColor: '#4B0082',
                }
              }}
            >
              {operation === 'add' ? (
                <>
                  <Loader
                    color={'blueviolet'}
                    size={20}
                  />
                  <span>Add ... </span>
                </>
              ) : (
                'Add contact'
              )}
            </Button>
          </Box>
        </Box>
       
      </Container>
      </ThemeProvider>
  );
}





