import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Kayıt Ol</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Ad Soyad:</label>
          <input type="text" name="fullname" required style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>E-Posta:</label>
          <input type="email" name="email" required style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Şifre:</label>
          <input type="password" name="password" required style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Kayıt Ol</button>
      </form>
      <div style={styles.linkGroup}>
        <span>Hesabınız var mı? </span>
        <Link to="/login" style={styles.link}>
          Giriş Yap
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 20px",
    textAlign: "center",
    marginTop: "100px", 
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#090979",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color:"#ffffff"
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color:"#ffffff"
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  linkGroup: {
    marginTop: "20px",
    color:"#ffffff"
    
  },
  link: {
    color: "#007bff",
    textDecoration: "underline",
    color:"#ffffff"
  },
};

export default Register;
