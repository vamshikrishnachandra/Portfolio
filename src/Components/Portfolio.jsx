import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={styles.section}>
      <h2 style={styles.heading}>Portfolio</h2>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src={image}
            style={styles.image}
            alt={imageAltText}
          />
        </div>
        <div style={styles.projectList}>
          {projectList.map((project) => (
            <div style={styles.projectBox} key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={styles.projectTitle}>{project.title}</h3>
              </a>
              <p style={styles.projectDescription}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "4rem 1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2rem",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "2rem",
  },
  imageContainer: {
    flexBasis: "100%",
    maxWidth: "500px",
    flexGrow: 1,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  },
  projectList: {
    flexBasis: "100%",
    maxWidth: "600px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  projectBox: {
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  projectTitle: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default Portfolio;
