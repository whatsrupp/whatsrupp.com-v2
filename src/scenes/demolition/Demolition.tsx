import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";
import NathanFace from "./NathanFace.png";
import LoopsAndCats from "./LoopsLogo.png";
const Demolition: React.FC = () => {
  const containerRef = useRef(null);
  const [label, setLabel] = useState("");
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
      // positionIterations: 20
    });

    var render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        background: "#812232",
        wireframes: false
      }
    });

    var ballA = Bodies.circle(210, 100, 30, {
      render: {
        // fillStyle: "#81a832
        sprite: { xScale: 0.05, yScale: 0.05, texture: NathanFace }
      },
      restitution: 0.5
    });
    ballA.label = "yo";

    var ballB = Bodies.circle(210, 100, 30, {
      render: {
        // fillStyle: "#81a832"
        sprite: { xScale: 0.05, yScale: 0.05, texture: LoopsAndCats }
      },
      restitution: 0.5
    });
    World.add(engine.world, [
      // walls
      Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
      Bodies.rectangle(200, 600, 600, 50, { isStatic: true }),
      Bodies.rectangle(260, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]);
    console.log("yo");

    World.add(engine.world, [ballA, ballB]);

    // add mouse control

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse
        // constraint: {
        //   stiffness: 0.2,
        //   render: {
        //     visible: false
        //   }
        // }
      });

    Matter.Events.on(mouseConstraint, "startdrag", function(event) {
      // console.log("startdrag", event);
      console.log(event.body);
      setLabel(event.body.label);
    });
    World.add(engine.world, mouseConstraint);

    // Matter.Events.on(mouseConstraint, "mousedown", function(event) {
    //   World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    //   World.add(engine.world, Bodies.polygon(150, 150, 7, 20));
    // });

    Engine.run(engine);

    Render.run(render);
  }, [containerRef]);

  return <div ref={containerRef} />;
};

// class Scene extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     var Engine = Matter.Engine,
//       Render = Matter.Render,
//       World = Matter.World,
//       Bodies = Matter.Bodies,
//       Mouse = Matter.Mouse,
//       MouseConstraint = Matter.MouseConstraint;

//     var engine = Engine.create({
//       // positionIterations: 20
//     });

//     var render = Render.create({
//       element: this.refs.scene,
//       engine: engine,
//       options: {
//         width: 600,
//         height: 600,
//         wireframes: true
//       }
//     });

//     var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
//     var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
//     World.add(engine.world, [
//       // walls
//       Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
//       Bodies.rectangle(200, 600, 600, 50, { isStatic: true }),
//       Bodies.rectangle(260, 300, 50, 600, { isStatic: true }),
//       Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
//     ]);

//     World.add(engine.world, [ballA, ballB]);

//     // add mouse control

//     var mouse = Mouse.create(render.canvas),
//       mouseConstraint = MouseConstraint.create(engine, {
//         mouse: mouse,
//         constraint: {
//           stiffness: 0.2,
//           render: {
//             visible: false
//           }
//         }
//       });

//     World.add(engine.world, mouseConstraint);

//     Matter.Events.on(mouseConstraint, "mousedown", function(event) {
//       World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
//       World.add(engine.world, Bodies.polygon(150, 150, 7, 20));
//     });

//     Engine.run(engine);

//     Render.run(render);
//   }

//   render() {
//     return <div ref="scene" />;
//   }
// }
export default Demolition;
