import "./works.css";
import { useEffect, useRef } from "react";

export function Works() {
  const reviewsContentRef = useRef(null);
  const revLeftRef = useRef(null);
  const revRightRef = useRef(null);

  useEffect(() => {
    const reviewsContent = reviewsContentRef.current;
    const revLeft = revLeftRef.current;
    const revRight = revRightRef.current;

    if (!reviewsContent || !revLeft || !revRight) return;

    const scrollAmount = 300; // Adjust this value to control scroll distance

    const scrollLeft = () => {
      reviewsContent.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    };

    const scrollRight = () => {
      reviewsContent.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    // Add event listeners
    revLeft.addEventListener('click', scrollLeft);
    revRight.addEventListener('click', scrollRight);

    // Clean up event listeners
    return () => {
      revLeft.removeEventListener('click', scrollLeft);
      revRight.removeEventListener('click', scrollRight);
    };
  }, []);

  return (
    <>
      <div className="works-hero">
        <div className="works-subhero">
          <h1 style={{ width: "200vh" }}>Previous works</h1>

          <div className="works-container">
            <img src="../digital-device-mockup.png" alt="" />
            <div>
              <h2>NexGen Realty Pvt. Ltd.</h2>
              <p>
                We built a modern, high-performance real estate platform where
                users can search, compare, and book properties with ease. The
                site features advanced filters, 3D property views, and inquiry
                forms.
              </p>
            </div>
          </div>

          <div className="works-container">
            <img
              src="../digital-device-mockup.png"
              alt="project-frame"
              className="project-frame"
            />
            <div>
              <h2>Foodzy – Restaurant Ordering Website</h2>
              <p>
                Foodzy is a full-featured restaurant ordering and delivery
                website that allows customers to browse menus, place orders, and
                track deliveries online.
              </p>
            </div>
          </div>

          <div className="works-container">
            <img
              src="../digital-device-mockup.png"
              alt="project-frame"
              className="project-frame"
            />
            <div>
              <h2>SkillForge – Online Learning Platform</h2>
              <p>
                SkillForge is a responsive e-learning platform that provides
                video courses, live sessions, and progress tracking for students
                and professionals.
              </p>
            </div>
          </div>

          <div className="works-container">
            <img
              src="../digital-device-mockup.png"
              alt="project-frame"
              className="project-frame"
            />
            <div>
              <h2>TechCart – E-commerce Website</h2>
              <p>
                We developed an end-to-end e-commerce website for electronics
                retail, supporting multiple vendors, product search, and secure
                transactions.
              </p>
            </div>
          </div>

          <div className="reviews">
            <div className="works-text">
              <h2>Why Our Clients Trust Us</h2>
              <p>
                At Avishkar Tech Solutions, we combine creativity, clean code,
                and cutting-edge technology to build websites that perform
                flawlessly across devices. Every project we deliver reflects our
                commitment to quality and client satisfaction.
              </p>
            </div>
          </div>
        </div>

        <section className="reviews-hero" aria-labelledby="reviews-title">
          <h1 id="reviews-title">
            Our clients <span>love ❤️</span> us
          </h1>

          <div className="reviews-wrapper">
            <button 
              ref={revLeftRef}
              id="rev-left" 
              className="arrow-btn" 
              aria-label="Scroll left"
            >
              <span className="chev"></span>
            </button>

            <div 
              ref={reviewsContentRef}
              className="reviews-content" 
              role="list"
            >
              <article className="review-card" role="listitem">
                <p className="review-text">
                  "Avishkar Technologies is simply amazing! Their expertise in
                  handling complex IT projects is commendable. I'm extremely
                  happy with the services they provided. From scoping out the
                  requirements to delivering the final version, everything was
                  smooth. Keep up the good work!"
                </p>
                <div className="review-author">
                  — Sarah L., CEO of Tech Innovators
                </div>
              </article>

              <article className="review-card" role="listitem">
                <p className="review-text">
                  "As a customer of Avishkar Technologies, I must say that their
                  services are top-notch. The team is professional,
                  detail-oriented, and very competent. I am completely satisfied
                  with their work and would recommend them to anyone looking for
                  reliable IT services."
                </p>
                <div className="review-author">
                  — Sathish Y., CEO of Tech Innovators
                </div>
              </article>

              <article className="review-card" role="listitem">
                <p className="review-text">
                  "I recently worked with Avishkar Technologies and was
                  delighted with the quality of their work. They were
                  professional, efficient, and delivered on time. Their
                  communication was excellent, and they kept me updated
                  throughout the project. Highly recommended for any IT project
                  you wish to entrust."
                </p>
                <div className="review-author">
                  — Vinay Sai Pavan B., CEO of Tech Innovators
                </div>
              </article>

              <article className="review-card" role="listitem">
                <p className="review-text">
                  "I recently availed the services of this company and I must
                  say I'm very impressed. The quality of work delivered by
                  Avishkar Technologies is exceptional. They are professional,
                  efficient, and deliver on time. I highly recommend their
                  services — especially for businesses that want dependability."
                </p>
                <div className="review-author">
                  — Johny As., CEO of Tech Innovators
                </div>
              </article>
            </div>

            <button 
              ref={revRightRef}
              id="rev-right" 
              className="arrow-btn" 
              aria-label="Scroll right"
            >
              <span className="chev"></span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}