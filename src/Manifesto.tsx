import React, { useEffect } from "react";
import './Manifesto.css';

const Manifesto: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('manifesto-page');
    return () => {
      document.body.classList.remove('manifesto-page');
    };
  }, []);

  return (
    <main className="manifesto-main">
      <h1 className="manifesto-title">SIX SIDED</h1>
      <h2 className="manifesto-subtitle">
        Our Pledge for Good Work, Good Business and Good Impact
      </h2>
      <div className="manifesto-content">
        <p>
          Six Sided exists to prove that an ethical business can be a successful business. Born of Six core principles, we focus on positive-impact engineering consultancy and R&amp;D to make doing good easier. Six Sided tackles the multifaceted nature of current environmental and social problems, to create solutions that are practical, scalable, and respectful.
        </p>
        <ul className="manifesto-list">
          <li>
            <strong>1. Good Work – INTEGRITY</strong>
            <br />
            Engineering offers countless solutions, and when used responsibly, has created the possibility for an incredible quality of life. At Six Sided, we act with honesty, follow through on our commitments, and hold ourselves to high ethical standards in every decision and every project. It is these ethical standards that are the needle on the compass for us and guide us to the best solution for each problem we tackle.
          </li>
          <li>
            <strong>2. Good Business – RESPONSIBILITY</strong>
            <br />
            Six Sided is committed to building a competitive, resilient, and sustainable business. We adopt sustainability in the widest sense; financially, environmentally, ethically and socially. We select projects with a clear net positive impact, as a duty of care toward the environment, society, and future generations is our business.
          </li>
          <li>
            <strong>3. Good People – RESPECT</strong>
            <br />
            We are invested in our employees’ growth, fostering a culture of continuous learning and mutual respect. We believe in fair treatment, including equitable pay and transparent decision making. We believe in trusting employees to deliver, and to know what is right for them. Our teams have a voice in defining what good work means and in shaping the company’s future.
          </li>
          <li>
            <strong>4. Good Decisions – TRANSPARENCY</strong>
            <br />
            Good decisions rely on openness and trust. Our advisory board provides independent perspectives on the challenges we tackle. We accept that information and stakeholder needs evolve, and we welcome constructive challenges to our ethos. We commit to transparency to earn and maintain trust.
          </li>
          <li>
            <strong>5. Good Impact – IMPACT</strong>
            <br />
            We are driven by meaningful, measurable results. We listen to those affected by our work to ensure our solutions leave a lasting positive legacy. We strive to make doing good the simplest choice, to empower communities and stakeholders to make decisions that will endure.
          </li>
          <li>
            <strong>6. Good Response – EQUITY</strong>
            <br />
            We understand that context is everything. We meet problems where they start, recognising each challenge as unique and to approach it with humility and fairness. We believe that ethical business is for everyone: employees, stakeholders, shareholders, communities, and future generations. We invite our community to challenge us, support us, and grow with us — because good work, good business, and good impact can and should be inseparable.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Manifesto;