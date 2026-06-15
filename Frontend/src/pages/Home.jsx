import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-page">
        <section className="hero">
          <h1>Welcome to MERN Portal</h1>

          <p>
            Build, Manage and Explore your application
            with a modern and responsive interface.
          </p>

          <button>Get Started</button>
        </section>

        <section className="features">
          <div className="card">
            <h3>Secure Login</h3>
            <p>
              Authentication and authorization for users.
            </p>
          </div>

          <div className="card">
            <h3>Fast Performance</h3>
            <p>
              Optimized frontend and backend architecture.
            </p>
          </div>

          <div className="card">
            <h3>Responsive Design</h3>
            <p>
              Works smoothly on all devices.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;