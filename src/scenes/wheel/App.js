import React from "react";
import "./App.css";

const majors = {
  0: { id: 0, key: "E", mode: "major" },
  1: { id: 1, key: "B", mode: "major" },
  2: { id: 2, key: "F♯", mode: "major" },
  3: { id: 3, key: "D♭", mode: "major" },
  4: { id: 4, key: "A♭", mode: "major" },
  5: { id: 5, key: "E♭", mode: "major" },
  6: { id: 6, key: "B♭", mode: "major" },
  7: { id: 7, key: "F", mode: "major" },
  8: { id: 8, key: "C", mode: "major" },
  9: { id: 9, key: "G", mode: "major" },
  10: { id: 10, key: "D", mode: "major" },
  11: { id: 11, key: "A", mode: "major" }
};

const minors = {
  0: { id: 0, key: "D♭", mode: "minor" },
  1: { id: 1, key: "A♭", mode: "minor" },
  2: { id: 2, key: "E♭", mode: "minor" },
  3: { id: 3, key: "B♭", mode: "minor" },
  4: { id: 4, key: "F", mode: "minor" },
  5: { id: 5, key: "C", mode: "minor" },
  6: { id: 6, key: "G", mode: "minor" },
  7: { id: 7, key: "D", mode: "minor" },
  8: { id: 8, key: "A", mode: "minor" },
  9: { id: 9, key: "E", mode: "minor" },
  10: { id: 10, key: "B", mode: "minor" },
  11: { id: 11, key: "F♯", mode: "minor" }
};

const Container = ({ d, phi, r, R, n, textObject }) => {
  const cx = 0;
  const cy = 0;
  const π = Math.PI;
  const φ = phi;
  const θ = (2 * π) / n;

  const generatePath = currentN => {
    const centerAngle = currentN * θ + φ;
    const textAngle = (-centerAngle * 180) / π;
    const dSinθ = d * Math.sin(centerAngle);
    const dCosθ = d * Math.cos(centerAngle);

    const calculateFirstPointCoordinates = () => {
      const angle = currentN * θ + θ / 2 + φ;

      const rSinθ = r * Math.sin(angle);
      const rCosθ = r * Math.cos(angle);
      return { x: cx + rSinθ + dSinθ, y: cy + dCosθ + rCosθ };
    };

    const calculateSecondPointCoordinates = () => {
      const angle = currentN * θ + θ / 2 + φ;

      const RSinθ = R * Math.sin(angle);
      const RCosθ = R * Math.cos(angle);
      return { x: cx + RSinθ + dSinθ, y: cy + RCosθ + dCosθ };
    };

    const calculateThirdPointCoordinates = () => {
      const angle = currentN * θ - θ / 2 + φ;

      const RSinθ = R * Math.sin(angle);
      const RCosθ = R * Math.cos(angle);
      return { x: cx + dSinθ + RSinθ, y: cy + dCosθ + RCosθ };
    };

    const calculateFourthPointCoordinates = () => {
      const angle = currentN * θ - θ / 2 + φ;

      const rSinθ = r * Math.sin(angle);
      const rCosθ = r * Math.cos(angle);
      return { x: cx + dSinθ + rSinθ, y: cy + dCosθ + rCosθ };
    };

    const calculateCenterPoint = () => {
      const angle = currentN * θ + φ;
      const length = r + d + (R - r) / 2;
      const rSinθ = length * Math.sin(angle);
      const rCosθ = length * Math.cos(angle);
      return { x: cx + rSinθ, y: cy + rCosθ };
    };

    const firstPoint = calculateFirstPointCoordinates();
    const secondPoint = calculateSecondPointCoordinates();
    const thirdPoint = calculateThirdPointCoordinates();
    const fourthPoint = calculateFourthPointCoordinates();
    const centerPoint = calculateCenterPoint();

    return (
      <React.Fragment>
        <path
          className="hover"
          fill="#227C9D"
          d={`
        M ${firstPoint.x},${firstPoint.y}
        L ${secondPoint.x},${secondPoint.y}
        A ${R},${R},0,0,1,${thirdPoint.x},${thirdPoint.y}  
        L ${fourthPoint.x},${fourthPoint.y}
        A ${r},${r},0,0,0,${firstPoint.x},${firstPoint.y}
        z
        `}
        ></path>
        <text
          x={centerPoint.x}
          y={centerPoint.y}
          font-size={5}
          dominant-baseline="middle"
          style={{ userSelect: "none" }}
          text-anchor="middle"
          transform={`rotate(${textAngle} ${centerPoint.x} ${centerPoint.y})`}
        >
          {textObject[currentN].key}
        </text>
      </React.Fragment>
    );
  };

  const generatePaths = () => {
    let array = [];
    for (let index = 0; index < n; index++) {
      array.push(generatePath(index));
    }
    return array;
  };

  return generatePaths();
};

function App() {
  const [count, setCount] = React.useState(0);
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = time => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => {
        return prevCount + ((deltaTime * 0.0001) % 100);
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const outerProps = {
    n: 12,
    d: 5,
    r: 63,
    R: 83,
    phi: count
  };

  const innerProps = {
    n: 12,
    d: 5,
    r: 40,
    R: 60,
    phi: -count
  };

  const maxDimension = Math.max(
    innerProps.d + innerProps.R,
    outerProps.d + outerProps.R
  );
  const canvasWidth = maxDimension * 2 + 5;
  const canvasHeight = canvasWidth;

  return (
    <svg
      height={800}
      width={800}
      viewBox={`${-canvasWidth / 2} ${-canvasHeight /
        2} ${canvasWidth} ${canvasHeight}`}
    >
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#05a" />
          <stop offset="50%" stop-color="#a55" />
          <stop offset="100%" stop-color="#0a5" />
        </linearGradient>
      </defs>
      <Container
        {...innerProps}
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
        textObject={majors}
      />

      <Container
        {...outerProps}
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
        textObject={minors}
      />
    </svg>
  );
}

export default App;
