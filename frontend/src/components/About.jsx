import React from 'react';
import Navbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    container: {
        height: '100vh',
        backgroundImage: 'url("/background.jpg")',  // Adjust the path to match your file location
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
            <h1 style={styles.headerText}>About GameApp</h1>
            <div style={styles.content}>
                <section>
                    <h2>Welcome to GameApp!</h2>
                    <p>GameApp is your ultimate destination for buying and exploring a wide range of games.</p>
                </section>
                <section>
                    <h2>Our Mission</h2>a
                    <p>Our mission is to provide gamers with an easy-to-use platform where they can discover, purchase, and enjoy the best games available.</p>
                </section>
                <section>
                    <h2>Meet the Team</h2>
                    <p>Our team is composed of dedicated professionals who are passionate about gaming and technology.</p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or feedback, feel free to <a href="http://127.0.0.1:5173/contacts" style={styles.link}>contact us</a>.</p>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;
