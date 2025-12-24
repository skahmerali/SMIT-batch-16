import { login } from "../../services/auth/auth";

const LoginForm = () => {
    // 1. Initialize state variables for user, loading, and error states
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    // 2. Use useEffect to call the login function when the component mounts
    useEffect(() => {
        // Define an inner asynchronous function to handle the promise
        const performLogin = async () => {
            try {
                // Set loading to true while the function is running
                setIsLoading(true);
                setError(null);

                // Call the external login function
                const userData = await login(userEmail, userPassword);

                // 3. Use the state setter to store the returned values
                setUser(userData);
            } catch (err) {
                setError(err.message);
            } finally {
                // Set loading to false once complete
                setIsLoading(false);
            }
        };

        // Call the async function immediately
        performLogin();
    }, [userEmail, userPassword]); // The empty dependency array ensures this runs only once on mount

    function handlerChangeEmail(e) {
        setUserEmail(e.target.value);
    }
    function handlerChangePassword(e) {
        setUserPassword(e.target.value);
    }

    // 4. Render UI based on the state
    if (isLoading) {
        return <p>Logging in...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return (
        <div>
            <input type="text" onChange={handlerChangeEmail} />
            <input type="password" onChange={handlerChangePassword} />
            {user ? (
                <h1>Welcome, {user.name}! You are logged in.</h1>
            ) : (
                <p>Login failed. Please check credentials.</p>
            )}
        </div>
    );
};

export default LoginForm;