import { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Container,
    Alert
} from "@mui/material";
import { login } from "../services/login";

export default function LoginForm() {

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);

        if (validate()) {
            console.log("Form Data:", formData);
            setSuccess(true);
            login(formData)
        }
    };

    return (
        <div maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}
            >
                <Typography variant="h4" textAlign="center">
                    login
                </Typography>

                {success && <Alert severity="success">login Successful!</Alert>}

                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                />

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    fullWidth
                />


                <Button variant="contained" type="submit" size="large">
                    login 
                </Button>
            </Box>
        </div>
    );
}
