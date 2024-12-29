import { Link } from "react-router-dom";

const NotFound = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        color: "#343a40",
        textAlign: "center",
    };

    const headingStyle = {
        fontSize: "5rem",
        margin: "0",
    };

    const paragraphStyle = {
        fontSize: "1.5rem",
        margin: "10px 0 20px 0",
    };

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        textDecoration: "none",
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>404</h1>
            <p style={paragraphStyle}>Oops! The page you are looking for does not exist.</p>
            <Link to="/" style={buttonStyle}>
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
