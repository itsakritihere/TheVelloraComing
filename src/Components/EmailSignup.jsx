
import toast from "react-hot-toast";

function EmailSignup() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    toast.success("Thanks for joining The Vellora. We're excited to have you with us - stay tuned for what's next");

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

