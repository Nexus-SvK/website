import React from "react";
import "./Header.css";
import Particles from "react-tsparticles";

export default function Header() {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="header">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            detectOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "connect",
              },
              onClick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              connect: {},
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#b6b2b2",
              },
            },
            opacity: {
              value: 0.5211089197812949,
              random: false,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8.017060304327615,
              random: true,
              animation: {
                enable: true,
                speed: 12.181158184520175,
                minimumValue: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outMode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="intro">
        <h1>Nexus</h1>
        <p>Hi! I'm Matej a Newbie web developer.</p>
        <p>
          I have interest to create the flawless websites and apps and build
          them to perfection.
        </p>
      </div>
    </div>
  );
}
