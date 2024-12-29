import { Link } from "react-router-dom";

const About = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        color: "#333",
    };

    const sectionStyle = {
        width: "100%",
        maxWidth: "1200px",
        marginBottom: "40px",
    };

    const headingStyle = {
        fontSize: "2.5rem",
        color: "#007bff",
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

    const teamSectionStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    };

    const teamMemberStyle = {
        backgroundColor: "#fff",
        padding: "20px",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        marginBottom: "20px",
    };

    const teamMemberImageStyle = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginBottom: "15px",
    };

    const teamMemberNameStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
    };

    const teamMemberRoleStyle = {
        fontSize: "1.2rem",
        color: "#007bff",
        marginBottom: "10px",
    };

    const teamMemberDescriptionStyle = {
        fontSize: "1rem",
        color: "#555",
    };

    return (
        <div style={containerStyle}>
            {/* About Overview */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>About Us</h2>
                <p style={paragraphStyle}>
                    We are a leading company that provides innovative solutions in web development, digital marketing, and
                    consulting. Our team is dedicated to delivering exceptional results that help businesses grow and thrive in
                    today digital world. With years of experience and a passion for technology, we strive to create impactful
                    solutions tailored to your unique needs.
                </p>
            </section>

            {/* Our Mission */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>Our Mission</h2>
                <p style={paragraphStyle}>
                    Our mission is to empower businesses by providing cutting-edge digital solutions that drive growth and
                    innovation. We are committed to delivering quality services that enhance operational efficiency and improve
                    customer experiences. Through our expertise and collaborative approach, we aim to help you achieve your
                    business objectives.
                </p>
            </section>

            {/* Our Vision */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>Our Vision</h2>
                <p style={paragraphStyle}>
                    Our vision is to become a global leader in digital transformation, helping businesses of all sizes leverage
                    technology to improve their processes and create value. We envision a future where every organization is
                    equipped with the tools and strategies needed to succeed in an increasingly digital world.
                </p>
            </section>

            {/* Our Team */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>Meet Our Team</h2>
                <div style={teamSectionStyle}>
                    {/* Team Member 1 */}
                    <div style={teamMemberStyle}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2Mc7jVHBWUUInUpknepIvgvPHdSI1MMurDxF0sYbpeQZx-1UikqfiuypbjzRhRj678E&usqp=CAU"
                            alt="Team Member 1"
                            style={teamMemberImageStyle}
                        />
                        <h3 style={teamMemberNameStyle}>John Doe</h3>
                        <p style={teamMemberRoleStyle}>CEO & Founder</p>
                        <p style={teamMemberDescriptionStyle}>
                            John is a visionary leader with over 10 years of experience in the tech industry. His passion for
                            innovation drives the company mission to deliver cutting-edge solutions.
                        </p>
                    </div>
                    {/* Team Member 2 */}
                    <div style={teamMemberStyle}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYR0TAT4xCZgg-7cvDs2gH02sMGHAIbFDYQ&s"
                            alt="Team Member 2"
                            style={teamMemberImageStyle}
                        />
                        <h3 style={teamMemberNameStyle}>Jane Smith</h3>
                        <p style={teamMemberRoleStyle}>Chief Marketing Officer</p>
                        <p style={teamMemberDescriptionStyle}>
                            Jane leads our marketing efforts, crafting strategies that drive customer engagement and brand growth.
                            With her expertise, she ensures our clients’ messages are heard loud and clear.
                        </p>
                    </div>
                    {/* Team Member 3 */}
                    <div style={teamMemberStyle}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklYrXgeDnknKKgwwuTUcv8fkEf_GiqGKqWQ&s"
                            alt="Team Member 3"
                            style={teamMemberImageStyle}
                        />
                        <h3 style={teamMemberNameStyle}>Michael Lee</h3>
                        <p style={teamMemberRoleStyle}>Head of Development</p>
                        <p style={teamMemberDescriptionStyle}>
                            Michael is responsible for overseeing all development projects. His technical expertise ensures that we
                            build high-quality, scalable solutions that meet client needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our History */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>Our History</h2>
                <p style={paragraphStyle}>
                    Founded in 2015, we started as a small team of passionate individuals dedicated to solving real-world
                    problems through technology. Over the years, we are expanded our team, refined our services, and helped
                    hundreds of businesses achieve their goals. Our journey has been one of continuous growth and evolution, and
                    we are just getting started.
                </p>
            </section>

            {/* Contact Call to Action */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>Ready to Work with Us?</h2>
                <p style={paragraphStyle}>
                    We are excited to help you take your business to the next level. Contact us today to learn more about our
                    services and how we can collaborate to bring your vision to life.
                </p>
                <Link to="/contacts" style={{ fontSize: "1.2rem", color: "#007bff", textDecoration: "underline" }}>
                    Get in Touch
                </Link>
            </section>
        </div>
    );
};

export default About;
