import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Giriş Yap</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>E-Posta:</label>
          <input type="email" name="email" required style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Şifre:</label>
          <input type="password" name="password" required style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Giriş Yap</button>
      </form>
      <div style={styles.linkGroup}>
        <span>Hesabınız yok mu? </span>
        <Link to="/register" style={styles.link}>
          Kayıt Ol
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
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  linkGroup: {
    marginTop: "20px",
    color:"#ffffff"
  },
  link: {
    color: "#ffffff",
    textDecoration: "underline",
  },
};

export default Login;
