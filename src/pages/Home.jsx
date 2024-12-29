import { Link } from "react-router-dom";

const Home = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        color: "#333",
    };

    const heroSectionStyle = {
        width: "100%",
        height: "80vh", // Adjusted height for better UI
        background: "url('https://cdn.wallpapersafari.com/24/37/K4wNkq.jpg') no-repeat center center/cover",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const heroTextStyle = {
        fontSize: "2rem",
        fontWeight: "bold",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        borderRadius: "10px",
        width: "80%",
        maxWidth: "600px",
    };

    const headingStyle = {
        fontSize: "2rem",
        color: "#007bff",
        marginTop: "40px",
        marginBottom: "20px",
    };

    const paragraphStyle = {
        fontSize: "1rem",
        lineHeight: "1.6",
        maxWidth: "800px",
        marginBottom: "30px",
        color: "#555",
    };

    const serviceContainerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginBottom: "40px",
        padding: "20px",
    };

    const serviceCardStyle = {
        backgroundColor: "#ffffff",
        padding: "20px",
        width: "80%",
        maxWidth: "300px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        marginBottom: "20px", // Space between cards
    };

    const serviceTitleStyle = {
        fontSize: "1.5rem",
        color: "#007bff",
        marginBottom: "15px",
    };

    const ctaButtonStyle = {
        padding: "15px 30px",
        fontSize: "1.2rem",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
    };

    const ctaSectionStyle = {
        width: "100%",
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
    };

    const ctaTitleStyle = {
        fontSize: "1.8rem",
        marginBottom: "20px",
    };

    const testimonialContainerStyle = {
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        textAlign: "center",
        width: "100%",
    };

    const testimonialStyle = {
        maxWidth: "800px",
        margin: "0 auto",
        fontSize: "1rem",
        lineHeight: "1.8",
        color: "#333",
    };

    const testimonialNameStyle = {
        fontWeight: "bold",
        marginTop: "20px",
    };

    return (
        <div style={containerStyle}>
            {/* Hero Section */}
            <div style={heroSectionStyle}>
                <div style={heroTextStyle}>
                    <h1>Welcome to Our Website!</h1>
                    <p>Providing innovative solutions for your business success.</p>
                </div>
            </div>

            {/* Introduction */}
            <h2 style={headingStyle}>About Us</h2>
            <p style={paragraphStyle}>
                We are a team of dedicated professionals committed to delivering exceptional products and services to
                help your business grow. Our solutions are tailored to your unique needs, and we focus on providing
                results that matter. Learn more about what we do and how we can help you achieve success.
            </p>

            {/* Our Services */}
            <h2 style={headingStyle}>Our Services</h2>
            <div style={serviceContainerStyle}>
                <div style={serviceCardStyle}>
                    <h3 style={serviceTitleStyle}>Consulting</h3>
                    <p>Expert business consulting to optimize your operations and strategies.</p>
                </div>
                <div style={serviceCardStyle}>
                    <h3 style={serviceTitleStyle}>Development</h3>
                    <p>Custom software development to solve your specific business challenges.</p>
                </div>
                <div style={serviceCardStyle}>
                    <h3 style={serviceTitleStyle}>Marketing</h3>
                    <p>Digital marketing strategies that help you reach the right audience.</p>
                </div>
            </div>

            {/* Testimonial Section */}
            <h2 style={headingStyle}>What Our Clients Say</h2>
            <div style={testimonialContainerStyle}>
                <p style={testimonialStyle}>
                    Working with this team was an amazing experience! They understood our needs and delivered solutions
                    that exceeded our expectations.
                    <br />
                    <span style={testimonialNameStyle}>- John Doe, CEO of Example Co.</span>
                </p>
                <p style={testimonialStyle}>
                    The team was professional, timely, and always available to help. Their expertise is unparalleled.
                    <br />
                    <span style={testimonialNameStyle}>- Jane Smith, Marketing Director</span>
                </p>
            </div>

            {/* Call to Action Section */}
            <div style={ctaSectionStyle}>
                <h2 style={ctaTitleStyle}>Ready to Get Started?</h2>
                <p>Contact us today to find out how we can help your business grow and succeed.</p>
                <Link to="/contacts" style={ctaButtonStyle}>Get in Touch</Link>
            </div>
        </div>
    );
};

export default Home;
