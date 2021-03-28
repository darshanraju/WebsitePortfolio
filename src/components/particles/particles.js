import React from "react";
import Particles from "react-particles-js";
import "./particles.css";

const ParticlesEffect = () => (
  <div className="particles-container">
    <Particles
      height={"723px"}
      params={{
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1803.4120608655228,
            },
          },
          color: {
            value: ["C912ED", "00BFFF", "22DD22", "FFD500", "FF8000", "FF2600"],
          },
          shape: {
            type: "circle",
            stroke: {
              width: 2,
              color: "#000000",
            },
            polygon: {
              nb_sides: 4,
            },
          },
          opacity: {
            value: 0.8,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 90,
            color: "808080",
            opacity: 0.9,
            width: 2,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
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
            repulse: {
              distance: 100,
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
        retina_detect: true,
      }}
    />
  </div>
);

export default ParticlesEffect;
