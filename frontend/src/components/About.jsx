import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  container: {
    height: "150vh",
    backgroundImage:
      'url("https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "15px",
    color: "#fff",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  content: {
    maxWidth: "800px",
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    zIndex: 2,
    position: "relative",
    backdropFilter: "blur(5px)",
  },
  headerText: {
    fontSize: "3em",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  sectionHeader: {
    fontSize: "2em",
    marginBottom: "15px",
    color: " hsl(209, 58%, 53%)",
  },
  text: {
    fontSize: "1.1em",
    lineHeight: "1.5",
  },
  link: {
    color: " hsl(209, 58%, 53%)",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#ffa500",
  },
};

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      {/* <h1 style={styles.headerText}>About GameApp</h1> */}
      <div style={styles.content}>
        <section>
          <h2 style={styles.sectionHeader}>Welcome to E-GAME!</h2>
          <p style={styles.text}>
            GameApp is your ultimate destination for buying and exploring a wide
            range of games.
          </p>
        </section>
        <section>
          <h2 style={styles.sectionHeader}>Our Mission</h2>
          <p style={styles.text}>
            Our mission is to provide gamers with an easy-to-use platform where
            they can discover, purchase, and enjoy the best games available.
          </p>
        </section>
        <section>
          <h2 style={styles.sectionHeader}>Meet the Team</h2>
          <p style={styles.text}>
            Our team is composed of dedicated professionals who are passionate
            about gaming and technology.
          </p>
        </section>
        <section>
          <h2 style={styles.sectionHeader}>Contact Us</h2>
          <p style={styles.text}>
            If you have any questions or feedback, feel free to{" "}
            <a href="http://localhost:5173/contacts" style={styles.link}>
              contact us
            </a>
            .
          </p>
        </section>
        <section>
          <h2 style={styles.sectionHeader}>Our Values</h2>
          <p style={styles.text}>
            We believe in quality, innovation, and customer satisfaction. These
            core values drive us to constantly improve and provide the best
            experience for our users.
          </p>
        </section>
        <section>
          <h2 style={styles.sectionHeader}>Our History</h2>
          <p style={styles.text}>
            GameApp was founded in 2020 with the vision of creating a seamless
            gaming experience. Since then, we have grown into a thriving
            community of gamers and developers.
          </p>
        </section>
        <section>
          <h2 style={styles.sectionHeader}>Future Plans</h2>
          <p style={styles.text}>
            We are continuously working on new features and partnerships to
            enhance your gaming experience. Stay tuned for exciting updates!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
