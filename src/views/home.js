import React from "react";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import "./home.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaRedditAlien,
  FaQuora,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nutrination Web</title>
        <meta property="og:title" content="Nutrination Web" />
      </Helmet>
      <section className="home-hero">
        <video
          src="/mainvideo%20(1)%20(1).mp4"
          loop
          muted
          poster="/mainvideo%20(3)-1500h.jpg"
          autoPlay
          className="home-video"
        ></video>
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/nnlogo-200h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img
                  alt="pastedImage"
                  src="/nnlogo-200h.png"
                  className="home-logo1"
                />
                <a className="Link">Blogs</a>
              </div>

              <div className="home-right">
                <div className="home-links1">
                  <div
                    style={{
                      display: "flex",
                      justifyItems: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <a className="link">
                      <FaFacebookF />
                    </a>
                    <a className="link">
                      <FaXTwitter />
                    </a>
                    <a className="link">
                      <FaInstagram />
                    </a>
                    <a className="link">
                      <FaYoutube />
                    </a>
                    <a className="link">
                      <FaRedditAlien />
                    </a>
                    <a className="link">
                      <FaQuora />
                    </a>
                  </div>
                </div>
                <div className="home-get-started">
                  <span className="home-text03">Sign in</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container02">
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text04">
            Fitness is not just about workouts; it&apos;s a lifestyle that
            transforms you from within.
          </h1>
          <p className="home-text05">
            We at NutriNation are creating The Only Platform you will ever need
            to stay Fit and Healthy :)
          </p>
          <div className="home-get-started1">
            <a
              target="_blank"
              className="home-text06"
              href="https://nutrinationweb.vercel.app/"
            >
              Join The Fitness Revolution
            </a>
          </div>
        </header>
      </section>
      <section className="home-features">
        <div className="home-cards">
          <div className="home-container03">
            <div className="home-schedule card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className="home-icon02"
              />
              <span className="home-text07">Complete Fitness Ecosystem</span>
              <span className="home-text08">
                Experience the pinnacle of fitness innovation — a complete
                ecosystem designed for your holistic well-being and personalized
                fitness excellence.
              </span>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.png"
                className="home-icon03"
              />
              <span className="home-text09">In-depth Health Tracking</span>
              <span className="home-text10">
                Explore comprehensive health tracking for a deeper understanding
                of your wellness journey, guiding you towards peak vitality with
                simplicity and precision.
              </span>
            </div>
          </div>
          <div className="home-container04">
            <div className="home-analyze card">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className="home-icon04"
              />
              <span className="home-text11">Simple and Convenient! </span>
              <span className="home-text12">
                Effortless health, simplified just for you — Discover the
                simplicity of achieving your health goals with our easy-to-use
                and convenient fitness platform.
              </span>
            </div>
            <div className="home-get-leads card">
              <img
                alt="pastedImage"
                src="/pastedimage-vyi5-200h.png"
                className="home-icon05"
              />
              <span className="home-text13">Precise Insights and Alerts</span>
              <span className="home-text14">
                Unlock the power of Data-Driven Insights and Prediction about
                your health. Our 24x7 personalized medical insights and alerts
                keep your health journey on track.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
            <span className="home-message-bold">
              &quot;You become healthy and fit by choosing nutritious foods, not
              just by exercising.{" "}
            </span>
            Good eating is where it all begins.
            <br />
            NutriNation bring Diet and Activity Management under one unified
            ecosystem for accurate data tracking, powerful insights and
            effective results!&quot;
          </span>
          <div className="home-author">
            <img alt="image" src="/harsh-200h.jpg" className="home-avatar" />
            <span className="home-quote1">—  Harashit Borah, Founder</span>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-heading">
          <span className="home-text15">
            <br></br>
            <br></br>
            <span>Our Mission</span>
          </span>
          <span className="home-text19 title1">
            <span>Making Fitness</span>
            <br></br>
            <span>Simple, Convenient, Easy &amp; Affordable!</span>
          </span>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container05">
            <div className="home-left1">
              <span className="home-text23 title">
                Focus on Planning instead of logging! It&apos;s the Key to
                success.
              </span>
              <span className="home-text24">
                {" "}
                Dive into a new era of health management with NutriNation.
                It&apos;s not just about eating; it&apos;s about strategic
                planning for your well-being. Our platform emphasizes the power
                of meticulous planning, guiding you towards your fitness goals.
                Experience success by focusing on the holistic journey, where
                every meal and workout is a step closer to a healthier you.
              </span>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/1-1200w.jpg"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/2-1200w.jpg"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right1">
              <h2 className="home-text25 title">
                Diet and Workouts Combined for effective Data tracking!
              </h2>
              <div className="home-category">
                <span className="home-text26">Diet Synergy for Success:</span>
                <span className="home-text27">
                  In the journey to optimal health, your diet is the silent
                  architect, and NutriNation understands the pivotal role it
                  plays. Tailoring nutrition to your goals and syncing it with
                  your workouts isn&apos;t just a choice; it&apos;s the essence
                  of a powerful, transformative journey. Discover how precision
                  in diet planning, harmonized with your activities, forms the
                  bedrock of your success story.
                </span>
                <span className="home-text28">Example -&gt;</span>
              </div>
              <div className="home-category1">
                <span className="home-text29">Elevate Your Workout Game:</span>
                <span className="home-text30">
                  Your workout is not just a routine; it&apos;s a dynamic
                  expression of your commitment to a healthier lifestyle.
                  NutriNation elevates your workout experience by integrating it
                  seamlessly with your diet plan. The synergy of a well-planned
                  diet and purposeful activities propels you towards sustained
                  fitness. This isn&apos;t just fitness; it&apos;s a lifestyle
                  crafted for enduring health. Embrace the power of a balanced
                  approach, and witness the transformation.
                </span>
                <span className="home-text31">
                  <span className="home-text32">Example -&gt;</span>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container06">
            <div className="home-left2">
              <h2 className="home-text36 title">
                Planning Diet is as easy as picking groceries from doorstep!
              </h2>
              <span className="home-text37">
                NutriNation seamlessly integrates personalized meal planning
                with efficient grocery delivery.  Unleash the freedom to choose
                your favorite recipes while staying on the path to your health
                goals. NutriNation provides a unique blend of flexibility and
                guidance. Our extensive recipe database caters to diverse
                tastes, and our AI-driven system warns you if a choice might
                impact your health goals. Experience the joy of culinary variety
                with the assurance of a health-conscious partner. Your
                personalized journey to well-being begins with NutriNation.
              </span>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/3-1200w.jpg"
                className="home-cards-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics1">
          <div className="home-centered-container1">
            <div className="home-image-container3">
              <img
                alt="pastedImage"
                src="/4-1200w.jpg"
                className="home-cards-image3"
              />
            </div>
            <div className="home-right2">
              <h2 className="home-text38 title">
                Prevent Cardiovascular Diesease and many More!
              </h2>
              <div className="home-category2">
                <span className="home-text39">
                  {" "}
                  Your health is a priority, and NutriNation is your partner in
                  prevention. Beyond diet and fitness tracking, we provide
                  insights to safeguard against cardiovascular diseases and
                  more. Our platform empowers you with the knowledge needed to
                  make informed decisions about your well-being. Join
                  NutriNation to take proactive steps toward a healthier,
                  happier life. Your prevention starts here.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text40">Nutrination Blogs</span>
          </div>
          <div className="home-row"></div>
          <div className="home-category3">
            <div className="home-headng">
              <span className="home-text41">
                <span className="home-text42">
                  The Hidden Cost of Quick Grocery Delivery: 
                </span>
                <span className="home-text43">
                  A 10-Minute Decision That Impacts a Lifetime
                </span>
                <br className="home-text44"></br>
                <br className="home-text45"></br>
                <span className="home-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text48">Read Full Article</span>
              </div>
            </div>
            <div className="home-container07">
              <img
                alt="pastedImage"
                src="/blog-1200w.jpg"
                className="home-pasted-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-heading2">
          <span className="home-text49 title">FAQs</span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text50">
                How can we use NutriNation at this stage of development?
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text51">
                While we&apos;re in the development stage, you can stay
                connected by following our social media handles. We&apos;re
                actively seeking fitness enthusiasts to join our journey and
                provide valuable insights during our testing phase. Your support
                matters as we build something revolutionary in the health and
                fitness space.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header2">
              <span className="home-text52">
                What sets NutriNation apart from other fitness apps?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text53">
                NutriNation stands out by offering more than just fitness
                tracking. We&apos;re creating a comprehensive health ecosystem,
                incorporating personalized meal planning, detailed fitness
                tracking, and precise medical insights. Our goal is to provide
                an all-in-one solution that transforms the way you approach
                health and wellness. Stay tuned for a unique and holistic
                fitness experience!
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container09">
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left3">
            <span className="home-text54">Subscribe to our Newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text55">Subscribe</span>
              </div>
            </div>
            <span className="home-text56">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="home-contact">
              <span className="home-text57">Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="home-link"
              >
                use@active-app.com
              </a>
            </div>
          </div>
          <div className="home-right3">
            <div className="home-category4">
              <span className="home-text58">Company</span>
              <div className="home-links2">
                <span className="home-text59">About</span>
                <span className="home-text60">Team</span>
                <span className="home-text61">Careers</span>
              </div>
            </div>
            <div className="home-category5">
              <span className="home-text62">Social Media Handles</span>
              <div className="home-links3">
                <span className="home-text63">Twitter</span>
                <span className="home-text64">Linkedin</span>
                <span className="home-text65">Crunchbase</span>
                <span className="home-text66">Instagram</span>
                <span className="home-text67">Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src="/nnlogo-200h.png"
            className="home-branding"
          />
          <span className="home-text68">Copyright © Active - 2024</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
