export default function Card(props) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{props.card.name}</h2>
      <p style={styles.description}>{props.card.description}</p>
      <h3 style={styles.interestsHeader}>Interests</h3>
      <ul style={styles.interestsList}>
        {props.card.interests.map((interest, index) => (
          <li key={index} style={styles.interestItem}>
            {interest}
          </li>
        ))}
      </ul>
      <div style={styles.socialLinks}>
        {props.card.socialMedias.map((socialMedia, index) => (
          <a
            key={index}
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.link, marginLeft: "0px" }}
          >
            {socialMedia.name}
          </a>
        ))}
      </div>

      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
            background: "#cecdcd",
            border: "1.5px solid black",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          type="button"
          onClick={() => props.openModal(props.index)}
        >
          Edit
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
            background: "#cecdcd",
            border: "1.5px solid black",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          type="button"
          onClick={() => props.deleteCard(props.card._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// Styles
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
  },
  name: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  socialLinks: {
    display: "flex",
    marginBottom: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#fff", // Text color
    padding: "10px 15px", // Padding for the button
    borderRadius: "5px", // Border radius for rounded corners
    backgroundColor: "#007BFF", // Background color for the button
    display: "inline-block", // Display as inline-block to be side by side
    margin: "10px", // Margin between buttons
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle lift
  },
  interestsHeader: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  interestsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: "14px",
    marginBottom: "5px",
    color: "#555",
  },
};
