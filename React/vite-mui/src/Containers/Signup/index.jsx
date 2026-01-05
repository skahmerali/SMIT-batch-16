import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Input from '../../Components/inputField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

export default function Signup({ theme }) {

    return (
        <Paper sx={{ width: theme.area.halfWidth, p: '20px', m: 'auto', textAlign: 'center' }} >
            <Stack>
                <EditIcon sx={{
                    color: {
                        xs: theme.palette.secondary.main,
                        md: theme.palette.primary.secondary
                    }
                }} />
                <Typography variant="heading2" component="h2">
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
