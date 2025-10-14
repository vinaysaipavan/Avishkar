import "./about.css"
import { useEffect, useRef } from "react";
import { Footer } from "./footer";

export function About(){
    const sectionRef = useRef(null);
    const cursorRef = useRef(null);
    
      useEffect(() => {
        const section = sectionRef.current;
        const cursor = cursorRef.current;
    
        if (!section || !cursor) return;
    
        const handleMouseMove = (e) => {
          const rect = section.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
    
          cursor.style.left = `${x}px`;
          cursor.style.top = `${y}px`;
        };
    
        const handleMouseEnter = () => {
          cursor.style.display = "block";
          cursor.style.background = "white";
        };
    
        const handleMouseLeave = () => {
          cursor.style.display = "none";
        };
    
        section.addEventListener("mousemove", handleMouseMove);
        section.addEventListener("mouseenter", handleMouseEnter);
        section.addEventListener("mouseleave", handleMouseLeave);
    
        return () => {
          section.removeEventListener("mousemove", handleMouseMove);
          section.removeEventListener("mouseenter", handleMouseEnter);
          section.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, []);
    return(
        <>
        <section class="about-hero">
            <div class="about-section flex flex-row items-center justify-around pb-[10vh] bg-orange-600">
                <div ref={sectionRef} class="about-section-matter relative cursor-none flex flex-col flex-5 pl-[30px]">
                    <div class="cursor bg-white h-[200px] w-[200px] rounded-full absolute" ref={cursorRef}></div>
                    <h1 class="about-heading text-b text-left mt-5 ">Avishkar: <span>Who are we ?</span></h1>
                    <div class="about-subheading">
                        <h2>We are a team of dreamers, designers, and developers driven by creativity and innovation. Our mission is to craft digital experiences that blend art with technology — from immersive games and stunning animations to smart AI solutions and connected IoT systems.</h2>
                        <span>
                            <h2>At our core, we believe in collaboration, passion, and pushing boundaries to turn visionary ideas into impactful realities.</h2>
                        </span>
                    </div>
                </div>
                <div class="about-image flex-4">
                    <img src="../about-image.png" alt="About image" />
                </div>
            </div>
            <div class="about-team text-center text-black p-2.5 font-light min-h-[100vh] bg-cover">
                <h1 class="title-about text-center text-black mt-6">Executive Team</h1>
                <div class="about-block flex justify-center items-center m-10 pl-[30px] sm:gap-5 gap-2">
                    <div class="teams">
                        <div>
                            <img src="../1.webp" alt="Founder" />
                            <div class="cut-effect"></div>
                        </div>
                        <h2>P.Jagannadha Deekshith​</h2>
                        <h6>CHIEF EXECUTIVE OFFICER</h6>
                    </div>
                    <div class="teams">
                        <img src="../2.webp" alt="Founder" />
                        <div class="cut-effect"></div>
                        <h2>Pooja Hemanth​</h2>
                        <h6>CHIEF OPERATING OFFICER</h6>
                    </div>
                    <div class="teams">
                        <img src="../3.webp" alt="Founder" />
                        <div class="cut-effect"></div>
                        <h2>G.V.V Sunil Gangadhar​</h2>
                        <h6>CO-FOUNDER</h6>
                    </div>
                    <div class="teams">
                        <img src="../4.webp" alt="Founder" />
                        <div class="cut-effect"></div>
                        <h2>Ram Kumar Varma P​</h2>
                        <h6>INDUSTRIAL ADVISOR</h6>
                    </div>
                    <div class="teams">
                        <img src="../5.webp" alt="Founder" />
                        <div class="cut-effect"></div>
                        <h2>Lavanya​</h2>
                        <h6>MANAGING DIRECTOR</h6>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}