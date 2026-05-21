import './singup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Singup = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = emailOrPhone.replace(/\D/g, '')
    if (!emailOrPhone.trim()) {
      newErrors.emailOrPhone = 'Email or mobile number is required'
    } else if (emailOrPhone.includes('@') && !emailRegex.test(emailOrPhone)) {
      newErrors.emailOrPhone = 'Enter a valid email address'
    } else if (!emailOrPhone.includes('@') && phoneDigits.length < 10) {
      newErrors.emailOrPhone = 'Enter a valid mobile number'
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      alert('Form submitted successfully');
    }
  }
  return (
    <div className="login-page">
      <div className="login-left">
        <Link to="/" className="back-btn">
          ‹
        </Link>
        <h1 className="login-heading">
          LOG IN TO <br />
          YOUR ACCOUNT
        </h1>
        <img
          src="/login.jpg"
          alt="Login decoration"
          className="login-left-image"
        />
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email or mobile number</label>
          <input
            id="email"
            type="text"
            value={emailOrPhone}
            onChange={(event) => setEmailOrPhone(event.target.value)}
            className={errors.emailOrPhone ? 'input-error' : ''}
          />
          {errors.emailOrPhone && (
            <p className="error-text">{errors.emailOrPhone}</p>
          )}
          <p className="hint">
            By entering your mobile number and one-time code sign-in option,
            you agree to receive a one-time verification code via SMS from IKEA.
            Message and data rates may apply.
          </p>
          <a href="/" className="privacy">
            More info about Privacy Policy
          </a>
          <label htmlFor="password" className="password-label">
            Password
          </label>
          <div className="password-box">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={errors.password ? 'input-error' : ''}
            />
            <button type="button" className="eye-btn">
              <img
                src="/Vector.png"
                alt="v"
              />
            </button>
          </div>
          {errors.password && (
            <p className="error-text">{errors.password}</p>
          )}
          <a href="/" className="forgot">
            Forgot your password?
          </a>
          <div className="save-row">
            <div className="checkbox-block">
              <input
                id="save"
                type="checkbox"
                checked={saveInfo}
                onChange={(event) => setSaveInfo(event.target.checked)}
              />
              <label htmlFor="save">Save information</label>
            </div>
            <span className="info-icon">i</span>
          </div>
          <button type="submit" className="continue-btn">
            CONTINUE
          </button>
          <div className="create-block">
            <p>Do not have an account yet? Create one:</p>
            <button type="button" className="create-btn">
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Singup;