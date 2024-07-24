import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
    container: {
        height: '100vh',
        backgroundImage: 'url("https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',  // Adjust the path to match your file location
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    headerText: {
        fontSize: '3em',
    },
    content: {
        maxWidth: '800px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
    },
    link: {
        color: '#ffd700',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

const AboutPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.headerText}></h1>
            <div style={styles.content}>
                <section>
                    <h2>Welcome to GameApp!</h2>
                    <p>GameApp is your ultimate destination for buying and exploring a wide range of games.</p>
                </section>
                <section>
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide gamers with an easy-to-use platform where they can discover, purchase, and enjoy the best games available.</p>
                </section>
                <section>
                    <h2>Meet the Team</h2>
                    <p>Our team is composed of dedicated professionals who are passionate about gaming and technology.</p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or feedback, feel free to <a href="http://localhost:5174/contacts" style={styles.link}>contact us</a>.</p>
                </section>
                <section>
                    <h2>Our Values</h2>
                    <p>We believe in quality, innovation, and customer satisfaction. These core values drive us to constantly improve and provide the best experience for our users.</p>
                </section>
                <section>
                    <h2>Our History</h2>
                    <p>GameApp was founded in 2020 with the vision of creating a seamless gaming experience. Since then, we have grown into a thriving community of gamers and developers.</p>
                </section>
                <section>
                    <h2>Future Plans</h2>
                    <p>We are continuously working on new features and partnerships to enhance your gaming experience. Stay tuned for exciting updates!</p>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;
