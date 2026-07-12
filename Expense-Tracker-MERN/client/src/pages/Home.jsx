import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="brand">TruePath</div>
        <nav className="home-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/tools">Tools</a>
          <a href="/blog">Blog</a>
          <a href="/testimonials">Testimonials</a>
        </nav>
        <button className="btn btn-get-started">Get Started</button>
      </header>

      <main className="hero-section">
        <div className="hero-copy">
          <span className="hero-eyebrow">Your Money. Your Control.</span>
          <h1>Take Control of Your Financial Future</h1>
          <p>
            Take control of your money with Savi. Track your spending, save smartly,
            all in one easy-to-use app.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Download Apps</button>
            <button className="btn btn-secondary">Explore our services</button>
          </div>

          <div className="trusted-section">
            <span>Trusted by 25K+ business teams</span>
            <div className="trusted-logos">
              <div>Notion</div>
              <div>Mailchimp</div>
              <div>Airtable</div>
              <div>Gumroad</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone-mockup phone-mockup-back" />
          <div className="phone-mockup phone-mockup-front">
            <div className="phone-header">
              <span>Good Evening</span>
              <strong>Jordan Osas</strong>
            </div>
            <div className="balance-card">
              <div>
                <span>Balance</span>
                <strong>$1595.86</strong>
              </div>
            </div>
            <div className="quick-actions">
              <button>Send</button>
              <button>Request</button>
              <button>Transfer</button>
              <button>History</button>
            </div>
            <div className="recent-activity">
              <div>Recent Activity</div>
              <div className="activity-item">
                <span>Received Money</span>
                <strong>+$213.00</strong>
              </div>
              <div className="activity-item">
                <span>Received Money</span>
                <strong>+$208.02</strong>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="feature-cards">
        <article className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Expense Tracking</h3>
          <p>
            Easily track your daily, weekly, and monthly expenses to stay in control
            of where your money goes.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Budget Planning</h3>
          <p>
            Set clear budgets, monitor progress, and avoid overspending with smart,
            intuitive budgeting tools.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">🧾</div>
          <h3>Multi-Account Support</h3>
          <p>
            Manage all your bank accounts in one place, track transfers, and keep
            everything synced.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Home;