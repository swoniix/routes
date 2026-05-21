import './singup.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-left">
        <button className="back-btn">‹</button>

        <div className="login-title">
          <h1>
            LOG IN TO <br />
            YOUR ACCOUNT
          </h1>
        </div>

        <div className="login-photo">
          <div className="table"></div>
          <div className="chair"></div>
        </div>
      </div>

      <div className="login-right">
        <form className="login-form">
          <label htmlFor="email">Email or mobile number</label>
          <input id="email" type="text" />

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
            <input id="password" type="password" />
            <button type="button" className="eye-btn">👁</button>
          </div>

          <a href="/" className="forgot">
            Forgot your password?
          </a>

          <div className="save-row">
            <div className="checkbox-block">
              <input id="save" type="checkbox" />
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
  );
}