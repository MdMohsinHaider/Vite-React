import { Link } from "react-router-dom";

const Services = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        color: "#333",
    };

    const sectionStyle = {
        width: "100%",
        maxWidth: "1200px",
        marginBottom: "40px",
    };

    // Hero section with background image
    const heroSectionStyle = {
        width: "100%",
        height: "80vh", // Adjust the height based on your design
        background: "url('https://mediacdn.cincopa.com/v2/270978/16!1YFBAooo3CARtD/1/02.jpg') no-repeat center center/cover", // Set background image
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const heroTextStyle = {
        fontSize: "2.5rem",
        fontWeight: "bold",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background to improve text visibility
        padding: "20px",
        borderRadius: "10px",
    };

    const headingStyle = {
        fontSize: "2rem",
        color: "#007bff",
        marginTop: "40px",
        marginBottom: "20px",
        textAlign: "center",
    };

    const paragraphStyle = {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#555",
        marginBottom: "30px",
        textAlign: "center",
    };

    const serviceContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        padding: "0 20px",
    };

    const serviceCardStyle = {
        backgroundColor: "#fff",
        padding: "30px",
        width: "30%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        marginBottom: "20px",
    };

    const serviceTitleStyle = {
        fontSize: "1.5rem",
        color: "#007bff",
        marginBottom: "15px",
    };

    const ctaSectionStyle = {
        width: "100%",
        textAlign: "center",
        padding: "50px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
    };

    const ctaTitleStyle = {
        fontSize: "2rem",
        marginBottom: "20px",
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

    const testimonialContainerStyle = {
        width: "100%",
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#f9f9f9",
    };

    const testimonialStyle = {
        maxWidth: "800px",
        margin: "0 auto",
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "#333",
        marginBottom: "20px",
    };

    const testimonialNameStyle = {
        fontWeight: "bold",
        marginTop: "15px",
    };

    return (
        <div style={containerStyle}>
            {/* Hero Section with Background Image */}
            <div style={heroSectionStyle}>
                <div style={heroTextStyle}>
                    <h1>Our Services</h1>
                    <p>We provide innovative solutions for all your business needs</p>
                </div>
            </div>

            {/* Service Overview */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>What We Offer</h2>
                <p style={paragraphStyle}>
                    Our services are tailored to help your business succeed. Whether you are looking for web development,
                    digital marketing, or custom software solutions, we have the expertise to deliver the best results for
                    your company.
                </p>
            </section>

            {/* Our Services Cards */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>Our Services</h2>
                <div style={serviceContainerStyle}>
                    <div style={serviceCardStyle}>
                        <h3 style={serviceTitleStyle}>Consulting</h3>
                        <p>Our expert consultants help streamline your business operations and maximize efficiency.</p>
                    </div>
                    <div style={serviceCardStyle}>
                        <h3 style={serviceTitleStyle}>Web Development</h3>
                        <p>Custom website development services to bring your ideas to life with cutting-edge technology.</p>
                    </div>
                    <div style={serviceCardStyle}>
                        <h3 style={serviceTitleStyle}>Digital Marketing</h3>
                        <p>Increase your reach and online presence with our targeted digital marketing campaigns.</p>
                    </div>
                </div>
            </section>

            {/* More Services */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>Additional Services</h2>
                <p style={paragraphStyle}>
                    We also offer a wide range of additional services to meet your business needs. These include mobile
                    app development, cloud solutions, SEO optimization, and much more. Our team is dedicated to providing
                    you with the best solutions tailored to your needs.
                </p>
            </section>

            {/* Testimonials Section */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>What Our Clients Say</h2>
                <div style={testimonialContainerStyle}>
                    <p style={testimonialStyle}>
                        This team completely transformed our business. They understood our challenges and provided
                        solutions that made a real impact.
                        <br />
                        <span style={testimonialNameStyle}>- John Doe, CEO of Example Co.</span>
                    </p>
                    <p style={testimonialStyle}>
                        Their expertise in digital marketing helped us grow our online sales exponentially in just
                        a few months. Highly recommended!
                        <br />
                        <span style={testimonialNameStyle}>- Jane Smith, Marketing Director</span>
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section style={ctaSectionStyle}>
                <h2 style={ctaTitleStyle}>Ready to Get Started?</h2>
                <p>Contact us today to discuss how we can help you achieve your business goals!</p>
                <Link to="/contacts" style={ctaButtonStyle}>Get in Touch</Link>
            </section>
        </div>
    );
};

export default Services;
