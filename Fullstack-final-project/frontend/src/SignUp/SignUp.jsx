import { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Container,
    Alert
} from "@mui/material";

export default function SignupForm() {

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};

        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            tempErrors.confirmPassword = "Passwords do not match";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);

        if (validate()) {
            console.log("Form Data:", formData);
            setSuccess(true);
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
                    Sign Up
                </Typography>

                {success && <Alert severity="success">Signup Successful!</Alert>}

                <TextField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    fullWidth
                />

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

                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    fullWidth
                />

                <Button variant="contained" type="submit" size="large">
                    Create Account
                </Button>
            </Box>
        </div>
    );
}
