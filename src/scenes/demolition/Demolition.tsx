import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";

import * as SC from "./styled";
import useWindowDimensions from "./useWindowDimensions";
import projects, { Project, projectsMap } from "./projects";

const Demolition: React.FC = () => {
  const containerRef = useRef(null);
  const [currentProjectId, setCurrentProjectId] = useState("");

  const { height, width } = useWindowDimensions();

  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  useEffect(() => {
    if (!containerRef) return;

    var engine = Engine.create({
      positionIterations: 20
    });

    function createProjectBall(project: Project) {
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
          sprite: {
            xScale: spriteScale,
            yScale: spriteScale,
            texture: project.icon
          }
        },
        restitution: 0.5,
        label: project.id
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

    projects.forEach(project => createProjectBall(project));

    function wall(x: number, y: number, w: number, h: number) {
      return Bodies.rectangle(x, y, w, h, {
        isStatic: true,
        render: {
          opacity: 0
        }
      });
    }

    const t = 200;
    const baseElevation = 100;
    World.add(engine.world, [
      // x, y, width, height
      wall(width / 2, t / 2 - t, width, t), // top
      wall(width / 2, height + t / 2 - baseElevation, width, t), // bottom
      wall(-t / 2, height / 2, t, height), // left
      wall(width + t / 2, height / 2, t, height) //right
    ]);

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse
      });

    Matter.Events.on(mouseConstraint, "startdrag", function(event) {
      setCurrentProjectId(event.body.label);
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

  const currentProject = projectsMap.get(currentProjectId);
  const ProjectInfo = () => {
    return (
      <SC.InfoPanel to={currentProject.link}>
        <SC.InfoPanelIcon
          alt={`${currentProject.id} icon`}
          src={currentProject.icon}
        />
        <SC.InfoPanelHeading>{currentProject.title}</SC.InfoPanelHeading>
        <SC.InfoPanelSubheading>
          {currentProject.subtitle}
        </SC.InfoPanelSubheading>
        <SC.InfoPanelButton>></SC.InfoPanelButton>
      </SC.InfoPanel>
    );
  };

  const InstructionSkeleton = () => {
    return (
      <SC.InfoPanelSkeleton>
        <SC.InfoPanelHeading>
          Hi, I'm Nick! I'm a developer! These are my portfolio projects. Whack,
          poke or haul them around with your mouse or finger! Stay zesty, Love
          Nick{" "}
          <span aria-label="orange emoji" role="img">
            🍊
          </span>
        </SC.InfoPanelHeading>
      </SC.InfoPanelSkeleton>
    );
  };

  return (
    <SC.PageLayout>
      <SC.NeonText>Nick Rupp's Project Pit</SC.NeonText>
      <SC.Canvas ref={containerRef} />
      {currentProject ? <ProjectInfo /> : <InstructionSkeleton />}
    </SC.PageLayout>
  );
};

export default Demolition;
