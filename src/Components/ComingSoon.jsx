
import { useEffect, useState } from "react";

import EmailSignup from "./EmailSignup";
import Footer from "./Footer";

function ComingSoon() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timings = [
      0,      // Stage 0 — Image 1
      5000,   // Stage 1 — Image 2
      10000,  // Stage 2 — Image 3
      15000,  // Stage 3 — Image 4
      20000,  // Stage 4 — Image 5 / Final
    ];

    const timers = timings.slice(1).map((time, index) =>
      setTimeout(() => {
        setStage(index + 1);
      }, time)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="vellora">

      {/* =================================================
          CINEMATIC BACKGROUND
      ================================================= */}

      <div className="vellora-background">

       
        <div
          className={`vellora-image image-one ${
            stage === 0 ? "image-active" : ""
          }`}
        />

        {/* IMAGE 2 — Mountain Experience */}
        <div
          className={`vellora-image image-two ${
            stage === 1 ? "image-active" : ""
          }`}
        />

        {/* IMAGE 3 — Transition to Vellora */}
        <div
          className={`vellora-image image-three ${
            stage === 2 ? "image-active" : ""
          }`}
        />

        {/* IMAGE 4 — The Vellora Reveal */}
        <div
          className={`vellora-image image-four ${
            stage === 3 ? "image-active" : ""
          }`}
        />

        {/* IMAGE 5 — Final Vellora */}
        <div
          className={`vellora-image image-five ${
            stage === 4 ? "image-active" : ""
          }`}
        />

        <div className="vellora-overlay" />

      </div>


      {/* =================================================
          CINEMATIC CONTENT
      ================================================= */}

      <section className="vellora-content">

        {/* ================= STAGE 0 ================= */}

        <div
          className={`vellora-stage ${
            stage === 0 ? "stage-active" : ""
          }`}
        >
          <p className="vellora-eyebrow">
            BARLOWGANJ · MUSSOORIE
          </p>

          <h1>
            Experience the
            <br />
            <em>majestic.</em>
          </h1>
        </div>


        {/* ================= STAGE 1 ================= */}

        <div
          className={`vellora-stage ${
            stage === 1 ? "stage-active" : ""
          }`}
        >
          <h2>
            Where the mountains
            <br />
            <em>slow time.</em>
          </h2>
        </div>


        {/* ================= STAGE 2 ================= */}

        <div
          className={`vellora-stage ${
            stage === 2 ? "stage-active" : ""
          }`}
        >
          

          <h2>
            We are bringing you
            <br />
            <em>something extraordinary.</em>
          </h2>
        </div>
        <div
          className={`vellora-stage ${
            stage === 3 ? "stage-active" : ""
          }`}
        >
          <p className="vellora-eyebrow">
           COMING SOON
          </p>

          <h2>
            IN THE HILLS OF
            <br />
            <em> MUSSORRIE</em>
          </h2>
        </div>



        {/* ================= STAGE 3 ================= */}

       


        {/* ================= STAGE 4 ================= */}

        <div
          className={`vellora-stage vellora-final-stage ${
            stage === 4 ? "stage-active" : ""
          }`}
        >
          <p className="vellora-eyebrow">
            BARLOWGANJ · MUSSOORIE
          </p>

       
<h1 className="vellora-logo" aria-label="THE VELLORA">
  {"THE VELLORA".split("").map((letter, index) => (
    <span
      key={index}
      className="vellora-letter"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
</h1>



          <p className="vellora-final-tagline">
            A beautiful stay is coming to the hills.
          </p>

          <div className="coming-text">
            <span />
            COMING SOON
            <span />
          </div>
          <br/>
          <br/>
          <br/>
          <br/>

          <EmailSignup />
          <br/>

          <p className="vellora-note">
            Be the first to know when we open our doors.
          </p>
        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </main>
  );
}

export default ComingSoon;

