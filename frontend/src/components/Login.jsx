import React from 'react';
import Navbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const backgroundStyle = {
  height: '100vh',
  margin: '0',
  backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/23/88/08/360_F_323880864_TPsH5ropjEBo1ViILJmcFHJqsBzorxUB.jpg")', // Correct URL format
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1
};

const formContainerStyle = {
  backgroundColor: 'rgba(0,0,0, 0.7)',
  color: 'white',
  fontWeight: 'bold',
  border: '3px solid #f1f1f1',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  width: '80%',
  maxWidth: '400px',
  padding: '20px',
  textAlign: 'center'
};

function Login() {
  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <Navbar />
      <div style={formContainerStyle}>
        <h2>Login Page</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
