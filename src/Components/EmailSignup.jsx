function EmailSignup() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    alert("Successfully sent! You are now on The Vellora list.");
    
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="email-box">
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        aria-label="Email address"
        required
      />

      <button type="submit">
        Notify Me
      </button>
    </form>
  );
}

export default EmailSignup;