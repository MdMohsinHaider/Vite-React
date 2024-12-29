import { Link } from "react-router-dom";

const Navbar = () => {
    const navStyle = {
        display: "flex",
        justifyContent: "space-between", // Improved for more spacing and alignment
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#282c34",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Adds subtle shadow to make navbar stand out
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#61dafb",
        fontSize: "18px",
        padding: "10px 15px",
        transition: "all 0.3s ease", // Smooth transition for hover effects
    };

    const linkHoverStyle = {
        color: "#ffffff", // Change color on hover for better user interaction
        backgroundColor: "#61dafb", // Add background color on hover
        borderRadius: "5px", // Slightly round the corners on hover
    };

    return (
        <nav style={navStyle}>
            <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/" style={linkStyle} activeStyle={linkHoverStyle}>Home</Link>
                <Link to="/services" style={linkStyle} activeStyle={linkHoverStyle}>Services</Link>
                <Link to="/about" style={linkStyle} activeStyle={linkHoverStyle}>About</Link>
                <Link to="/contacts" style={linkStyle} activeStyle={linkHoverStyle}>Contacts</Link>
            </div>
        </nav>
    );
};

export default Navbar;
