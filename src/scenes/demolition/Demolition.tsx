import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";
import NathanFace from "./NathanFace.png";
import LoopsAndCats from "./LoopsLogo.png";
import HarryFace from "./HarryCutout.png";
import * as SC from "./styled";
import Jinko from "./Jinko.png";
import useWindowDimensions from "./useWindowDimensions";

const Demolition: React.FC = () => {
  const containerRef = useRef(null);
  const [label, setLabel] = useState("");
  const { height, width } = useWindowDimensions();

  console.log(label);
  useEffect(() => {
    if (!containerRef) return;

    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      positionIterations: 20
    });

    console.log(containerRef);

    // const width = 1000;
    // const height = 1000;

    var render = Render.create({
      canvas: containerRef.current,
      engine: engine,
      options: {
        background: Jinko,
        wireframes: false,
        width,
        height
      }
    });

    var ballA = Bodies.circle(210, 100, 100, {
      render: {
        sprite: { xScale: 0.2, yScale: 0.2, texture: NathanFace }
      },
      restitution: 0.5
    });
    ballA.label = "yo";

    var ballc = Bodies.circle(210, 100, 100, {
      render: {
        sprite: { xScale: 0.3, yScale: 0.3, texture: HarryFace }
      },
      restitution: 0.5
    });

    function wall(x: number, y: number, w: number, h: number) {
      return Bodies.rectangle(x, y, w, h, {
        isStatic: true,
        render: {
          opacity: 0
        }
      });
    }

    const t = 50;
    World.add(engine.world, [
      // x, y, width, height
      wall(width / 2, t / 2, width, t),
      wall(width / 2, height - t / 2, width, t),
      wall(t / 2, height / 2, t, height),
      wall(width - t / 2, height / 2, t, height)
    ]);

    World.add(engine.world, [ballA, ballc]);

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

    //@ts-ignore
    // Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: 800, y: 600 }
    // });
    Render.run(render);
    // Render.setPixelRatio(render, 2);
  }, [containerRef, height, width]);

  return (
    <SC.PageLayout>
      <SC.Canvas ref={containerRef} />
    </SC.PageLayout>
  );
};

export default Demolition;
