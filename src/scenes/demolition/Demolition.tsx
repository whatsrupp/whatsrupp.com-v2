import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";

import * as SC from "./styled";
import useWindowDimensions from "./useWindowDimensions";

import icons from "./icons";

const Demolition: React.FC = () => {
  const containerRef = useRef(null);
  const [label, setLabel] = useState("");
  const { height, width } = useWindowDimensions();

  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  console.log(label);
  useEffect(() => {
    if (!containerRef) return;

    var engine = Engine.create({
      positionIterations: 20
    });

    function createBall(icon: string) {
      const minPixelRadius = 44; //guidelines for smallest button on phones
      const calculatedPixelRadius = width / 20;
      const radius =
        calculatedPixelRadius < minPixelRadius
          ? minPixelRadius
          : calculatedPixelRadius;
      const spritePixelRadius = 100; //the pixel width of the sprites made in photoshop
      const spriteScale = radius / spritePixelRadius;
      const ball = Bodies.circle(width / 2, height / 2, radius, {
        render: {
          sprite: { xScale: spriteScale, yScale: spriteScale, texture: icon }
        },
        restitution: 0.5,
        label: icon
      });

      World.add(engine.world, ball);

      return ball;
    }

    var render = Render.create({
      canvas: containerRef.current,
      engine: engine,
      options: {
        background: "transparent",
        wireframes: false,
        width,
        height
      }
    });

    const balls = Object.keys(icons).map(iconName => {
      const test: { [key: string]: string } = icons;
      return createBall(test[iconName]);
    });

    function wall(x: number, y: number, w: number, h: number) {
      return Bodies.rectangle(x, y, w, h, {
        isStatic: true,
        render: {
          opacity: 0
        }
      });
    }

    const t = 200;
    World.add(engine.world, [
      // x, y, width, height
      wall(width / 2, t / 2 - t, width, t), // top
      wall(width / 2, height + t / 2, width, t), // bottom
      wall(-t / 2, height / 2, t, height), // left
      wall(width + t / 2, height / 2, t, height) //right
    ]);

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse
      });

    Matter.Events.on(mouseConstraint, "startdrag", function(event) {
      console.log(event.body);
      setLabel(event.body.label);
    });

    World.add(engine.world, mouseConstraint);

    //@ts-ignore
    render.mouse = mouse;
    Engine.run(engine);

    Render.run(render);
  }, [
    Bodies,
    Engine,
    Mouse,
    MouseConstraint,
    Render,
    World,
    containerRef,
    height,
    width
  ]);

  return (
    <SC.PageLayout>
      <SC.NeonText>Nick Rupp's Project Pit</SC.NeonText>
      <SC.SubHeading>Throw 'em around, I don't care</SC.SubHeading>
      <SC.Canvas ref={containerRef} />
    </SC.PageLayout>
  );
};

export default Demolition;
