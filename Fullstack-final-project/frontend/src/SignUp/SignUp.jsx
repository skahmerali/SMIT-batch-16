import { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Container,
    Alert,
    Paper
} from "@mui/material";
import { styled } from "@mui/system";
import { signup } from "../services/singup";

/* ---------------- Styled Components ---------------- */

const Background = styled(Box)({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 10s ease infinite",
    "@keyframes gradientMove": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" }
    }
});

const AnimatedCard = styled(Paper)({
    padding: "40px",
    width: "100%",
    maxWidth: "420px",
    borderRadius: "20px",
    backdropFilter: "blur(15px)",
    background: "rgba(255,255,255,0.05)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    animation: "fadeIn 1s ease",
    "@keyframes fadeIn": {
        from: { opacity: 0, transform: "translateY(30px)" },
        to: { opacity: 1, transform: "translateY(0)" }
    }
});

/* ---------------- Component ---------------- */

export default function SignupForm() {

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "hr"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};

        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);

        if (validate()) {
            signup(formData);
            setSuccess(true);
        }
    };

    return (
        <Background>
            <Container sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <AnimatedCard elevation={10}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                        <Typography
                            variant="h4"
                            textAlign="center"
                            sx={{
                                fontWeight: "bold",
                                color: "#38bdf8",
                                letterSpacing: 1
                            }}
                        >
                            Create Account
                        </Typography>

                        {success && (
                            <Alert severity="success">
                                Signup Successful!
                            </Alert>
                        )}

                        <TextField
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            variant="outlined"
                            fullWidth
                            sx={{
                                input: { color: "white" },
                                label: { color: "#94a3b8" },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "#334155" },
                                    "&:hover fieldset": { borderColor: "#38bdf8" },
                                    "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
                                }
                            }}
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
                            sx={{
                                input: { color: "white" },
                                label: { color: "#94a3b8" },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "#334155" },
                                    "&:hover fieldset": { borderColor: "#38bdf8" },
                                    "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
                                }
                            }}
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
                            sx={{
                                input: { color: "white" },
                                label: { color: "#94a3b8" },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "#334155" },
                                    "&:hover fieldset": { borderColor: "#38bdf8" },
                                    "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
                                }
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                mt: 2,
                                background: "linear-gradient(90deg, #38bdf8, #6366f1)",
                                fontWeight: "bold",
                                letterSpacing: 1,
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 10px 30px rgba(56,189,248,0.5)"
                                }
                            }}
                        >
                            Create Account
                        </Button>

                    </Box>
                </AnimatedCard>
            </Container>
        </Background>
    );
}