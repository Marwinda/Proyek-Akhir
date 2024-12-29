import PropTypes from "prop-types";

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "1234") {
      onLogin(); // Panggil fungsi onLogin setelah login berhasil
    } else {
      alert("Username atau Password salah!"); // Pesan kesalahan jika login gagal
    }
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Menambahkan validasi untuk props
LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;