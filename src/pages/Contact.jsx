const Contact = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        color: "#333",
    };

    const headingStyle = {
        fontSize: "3rem",
        color: "#007bff",
        marginBottom: "20px",
    };

    const subHeadingStyle = {
        fontSize: "2rem",
        color: "#0056b3",
        marginTop: "40px",
        marginBottom: "20px",
    };

    const formContainerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "600px",
        marginTop: "30px",
    };

    const inputStyle = {
        width: "100%",
        padding: "12px",
        marginBottom: "20px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        fontSize: "1rem",
        outline: "none",
    };

    const buttonStyle = {
        padding: "15px 30px",
        fontSize: "1.2rem",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    const paragraphStyle = {
        fontSize: "1.2rem",
        color: "#555",
        maxWidth: "800px",
        lineHeight: "1.8",
        marginBottom: "40px",
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Contact Us</h1>
            <p style={paragraphStyle}>
                We had love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to
                reach out. Our team is here to assist you.
            </p>

            <h2 style={subHeadingStyle}>Get in Touch</h2>

            <div style={formContainerStyle}>
                <form>
                    <input
                        type="text"
                        placeholder="Your Name"
                        style={inputStyle}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        style={inputStyle}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        style={{ ...inputStyle, height: "150px" }}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <h2 style={subHeadingStyle}>Our Location</h2>
            <p style={paragraphStyle}>
                We are located in the heart of the city. Visit us to discuss how we can work together and achieve
                incredible results.
            </p>

            <div style={{ width: "100%", maxWidth: "800px", marginTop: "40px" }}>
                {/* This can be replaced with an actual embedded map or an image */}
                <img
                    src="https://mediacdn.cincopa.com/v2/270978/12!1YFBAooo3CQLsC/1/01.jpg"
                    alt="Location Map"
                    style={{ width: "100%", borderRadius: "8px" }}
                />
            </div>

            <h2 style={subHeadingStyle}>Contact Details</h2>
            <p style={paragraphStyle}>
                You can reach us via phone or email. We look forward to connecting with you!
            </p>
            <ul style={{ listStyleType: "none", padding: "0", textAlign: "center" }}>
                <li style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                    <strong>Email:</strong> contact@ourwebsite.com
                </li>
                <li style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                    <strong>Phone:</strong> +123 456 7890
                </li>
            </ul>
        </div>
    );
};

export default Contact;
