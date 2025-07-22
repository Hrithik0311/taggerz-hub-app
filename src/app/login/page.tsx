/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Yw2uG5E3P4B
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <>
      <main className="container">
        <div className="auth-form-container">
          <h2>Login</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert('Logged in successfully!');
              window.location.href = '/';
            }}
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="m@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </main>
    </>
  );
}
