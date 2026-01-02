import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Input from '../../Components/inputField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
export default function Signup() {
    return (
        <Paper sx={{ width: '50%', p: '20px', m: 'auto', textAlign: 'center' }} >
            <Stack>
                <Typography variant="h4" component="h2">
                  Signup
                </Typography>
                <Box display="flex" gap="20px">
                    <Input label="first name"
                        sx={{
                            width: "50%",
                        }} />
                    <Input label="last name" sx={{ width: "50%" }} />
                </Box>
                <Input label="email" />
                <Input label="password" />
                <Input label="phone number" />
            </Stack>
        </Paper>
    )
}
