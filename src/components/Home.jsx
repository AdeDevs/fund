import { useState } from "react";
import ShowMore from "../assets/plus.png";
import ShowLess from "../assets/minus.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

function HomeScreen() {
  const [seeMore, setSeeMore] = useState([ false, false, false, false, false, false, ]);

  const toggleSection = (index) => {
    setSeeMore((prevSeeMore) =>
      prevSeeMore.map((item, i) => (i === index ? !item : item))
    );
  };
  return (
    <div className="home">
      <header>
        <div className="bottom">
          <div>
            <h1>Fund</h1>
            <ul>
              <li>Help</li>
              <li>Others</li>
            </ul>
          </div>
          <button>Start Fundraising</button>
        </div>
      </header>
      <main>
        <div className="flash">
          <section className="flash-header">
            <h1>
              Fund, Fast As <i>Flash</i>
            </h1>
            <p>
              Fundraise at the speed of thought! Elevate your cause in just a
              minute with our lightning-fast fundraising platform.
            </p>
          </section>
          <section className="flash-sub">
            <div>
              <h2>
                <ion-icon name="briefcase"></ion-icon>
              </h2>
              <h3>Ignite Impact</h3>
              <p>
                Spark joy by sharing your cause and the positive impact it
                brings. Cleary express how contributions will make a meaningful
                difference.
              </p>
            </div>
            <div>
              <h2>
                <ion-icon name="flash"></ion-icon>
              </h2>
              <h3>Spread The Word</h3>
              <p>
                Leverage the speed of social media and online networks. Share
                your fundraising campaign swiftly across various platforms
              </p>
            </div>
            <div>
              <h2>
                <ion-icon name="earth"></ion-icon>
              </h2>
              <h3>Connect Globally</h3>
              <p>
                Build a strong social network around your cause. Encourage
                supporters to share the campaign within their local communities.
              </p>
            </div>
          </section>
        </div>
        <div className="urgent">
          <section>
            <div className="flash-header">
              <h1>Urgent Fundraising</h1>
              <p>
                Time is of the essence! Join our mission NOW to take an
                immediate impact. Every second counts.
              </p>
            </div>
          </section>
          <section className="ongoing-fund">
            <div className="fund-box">
              <header className="fund-image"></header>
              <title>We Care</title>
              <p>GreenFund: Sustain Earth Now</p>
              <section className="fund-bar">
                <div className="bar-width"></div>
              </section>
              <section className="fund-footer">
                <h2>$50,240,210</h2>
                <h3>7 days left</h3>
              </section>
            </div>
            <div className="fund-box">
              <header className="fund-image2"></header>
              <title>Unicef</title>
              <p>SeniorHealth: Support Campaign</p>
              <section className="fund-bar">
                <div className="bar-width2"></div>
              </section>
              <section className="fund-footer">
                <h2>$4,350,347</h2>
                <h3>19 days left</h3>
              </section>
            </div>
            <div className="fund-box">
              <header className="fund-image3"></header>
              <title>Unity Foundation</title>
              <p>DisasterCare: Urgent Support</p>
              <section className="fund-bar">
                <div className="bar-width3"></div>
              </section>
              <section className="fund-footer">
                <h2>2,100,210</h2>
                <h3>23 days left</h3>
              </section>
            </div>
          </section>
        </div>
        <div className="join-us">
          <section>
            <div className="join-image"></div>
            <div className="join-image2"></div>
          </section>
          <p>Be The Part of Fundraiser With Over</p>
          <h1>217,924+</h1>
          <p>People From Around The World</p>
          <button>Join Fundraisers Now!</button>
          <section>
            <div className="join-image3"></div>
            <div className="join-image4"></div>
          </section>
        </div>

        <div className="faq">
            <h1>Frequently Asked Questions</h1>
          <section>
            <header>
              <h1> how can i make donation? </h1>
              <button
                onClick={() => toggleSection(1)}
                className={seeMore[1] ? "active" : ""}
              >
                <img src={seeMore[1] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[1] ? "active" : ""}`}>
              <p>
                Donations can be made directly through our website. Simply navigate to the "Donate" section, select the amount you wish to contribute, and follow the instructions to complete your donation. We accept various payment methods, including credit/debit cards and online payment platforms.
              </p>
            </main>
          </section>
          <section>
            <header>
              <h1> is my donation tax-deductible? </h1>
              <button
                onClick={() => toggleSection(2)}
                className={seeMore[2] ? "active" : ""}
              >
                <img src={seeMore[2] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[2] ? "active" : ""}`}>
              <p>
                Yes, donations made to our organization are generally tax-deductible. We are a registered non-profit organization, and upon completing your donation, you will receive a receipt via email, which you can use for tax filing purposes. Please consult with a tax advisor for specific details on how this applies to your situation.
              </p>
            </main>
          </section>
          <section>
            <header>
              <h1> Can i donate in honor or memory of someone? </h1>
              <button
                onClick={() => toggleSection(3)}
                className={seeMore[3] ? "active" : ""}
              >
                <img src={seeMore[3] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[3] ? "active" : ""}`}>
              <p>
                Yes, donations made to our organization are generally tax-deductible. We are a registered non-profit organization, and upon completing your donation, you will receive a receipt via email, which you can use for tax filing purposes. Please consult with a tax advisor for specific details on how this applies to your situation.
              </p>
            </main>
          </section>
          <section>
            <header>
              <h1> How will my donation be used? </h1>
              <button
                onClick={() => toggleSection(4)}
                className={seeMore[4] ? "active" : ""}
              >
                <img src={seeMore[4] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[4] ? "active" : ""}`}>
              <p>
                Yes, donations made to our organization are generally tax-deductible. We are a registered non-profit organization, and upon completing your donation, you will receive a receipt via email, which you can use for tax filing purposes. Please consult with a tax advisor for specific details on how this applies to your situation.
              </p>
            </main>
          </section>
          <section>
            <header>
              <h1> can i setup a recurring donation? </h1>
              <button
                onClick={() => toggleSection(5)}
                className={seeMore[5] ? "active" : ""}
              >
                <img src={seeMore[5] ? ShowLess : ShowMore} alt="" />
              </button>
            </header>
            <main className={`more ${seeMore[5] ? "active" : ""}`}>
              <p>
                Yes, we offer the option to set up recurring donations. During the donation process, simply select the recurring donation option and choose the frequency (e.g., monthly, quarterly). This helps provide us with steady support, allowing us to plan our projects more effectively and make a lasting impact.
              </p>
            </main>
          </section>
        </div>
      </main>
      <footer>
        <section className="head">
            <div>
                <h1>Fund</h1>
                <p>elevating experience and seize control of your smart home</p>
            </div>
            <div className="lists">
                
                <ul>
                    <h3>Donate</h3>
                    <li>Education</li>
                    <li>Social</li>
                    <li>Medicine</li>
                    <li>Disaster</li>
                </ul>
                
                <ul>
                    <h3>Help</h3>
                    <li>FAQ</li>
                    <li>Accesibility</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
                
                <ul>
                    <h3>Company</h3>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Careers</li>
                    <li>Pricing</li>
                </ul>
            </div>
        </section>
        <section className="tail">
            <div>
                <p>FundInc, 2024</p>
                <p>All Rights Reserved.</p>
            </div>
            <div className="socials">
                <ul>
                    <li> Instagram <img src={Instagram} alt="instagram"></img></li>
                    <li> Facebook <img src={Facebook} alt="facebook"></img></li>
                    <li> Twitter <img src={Twitter} alt="twitter"></img></li>
                    <li> Linkedin <img src={Linkedin} alt="linkedin"></img></li>
                </ul>
            </div>
        </section>
      </footer>
    </div>
  );
}

export default HomeScreen;
