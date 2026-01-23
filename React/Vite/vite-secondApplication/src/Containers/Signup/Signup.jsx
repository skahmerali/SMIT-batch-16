import { useEffect, useState } from "react";
import { Signup } from "../../services/auth/auth";

const SignupForm = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [shouldSignup, setShouldSignup] = useState(false);

  useEffect(() => {
    if (!shouldSignup) return;

    const handleSignup = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const userData = await Signup({
          email: userEmail,
          password: userPassword,
          firstName: userFirstName,
          lastName: userLastName,
          role: 'admin',
        });
        setUser(userData);
      } catch (err) {
        setError(err.message || "Signup failed");
        setUser(null);
      } finally {
        setIsLoading(false);
        setShouldSignup(false); // reset trigger
      }
    };

    handleSignup();
  }, [shouldSignup, userEmail, userPassword]);

  return (
    <div>
      {/* firstName, lastName, email, password, role  */}
      <input
        type="email"
        placeholder="Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="fname"
        placeholder="first name"
        value={userFirstName}
        onChange={(e) => setUserFirstName(e.target.value)}
      />
      <input
        type="lname"
        placeholder="last name"
        value={userLastName}
        onChange={(e) => setUserLastName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <br />
      <button
        onClick={() => setShouldSignup(true)}
        disabled={
          isLoading ||
          !userEmail ||
          !userPassword ||
          !userFirstName ||
          !userLastName
        }
      >
        {isLoading ? "Signup in..." : "Signup"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && <h2>Welcome, {user.newUser.fName}</h2>}
    </div>
  );
};

export default SignupForm;
