import styled from "@emotion/styled";
import PageLayoutComponent from "../../style/components/PageLayout";
import {
  FaBeer,
  FaTrash,
  FaVolumeMute,
  FaPlay,
  FaPlus,
  FaPause,
  FaMinus,
  FaVolumeUp
} from "react-icons/fa";

const colours = {
  offBlack: "#202020",
  lightBlack: "#272727",
  black: "#171717",
  red: "#FF0000",
  darkRed: "#8B0000",
  yellow: "#DFF302",
  offWhite: "#E3E3E3"
};

export const PageLayout = styled(PageLayoutComponent)`
  background: ${colours.offBlack};
  display: grid;
  grid-template-rows: 1fr 3fr 0.5fr;
`;

export const StartRecordingButton = styled.button`
  background-color: ${colours.red};
  width: 50px;
  height: 50px;
  font-size: 0;
  border: 0;
  border-radius: 50px;
  margin: 18px;
  outline: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const StopRecordingButton = styled(StartRecordingButton)`
  background: ${colours.red};
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes pulse {
    0% {
      box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3);
    }
    65% {
      box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3);
    }
    90% {
      box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0);
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
export const Body = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Footer = styled.div``;

export const Head = styled.img`
  width: 5%;
  height: 5%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Logo = styled.img`
  width: 10%;
  height: 10%;
`;

export const Track = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  background-color: ${colours.lightBlack};
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: ${colours.black};
  align-self: center;

  wave {
    width: 100%;
  }
`;

export const PlayButton = styled.button`
  background-color: ${colours.yellow};
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const PauseIcon = styled(FaPause)``;

export const PlayIcon = styled(FaPlay)``;
export const BeerIcon = styled(FaBeer)``;
export const TrashIcon = styled(FaTrash)``;
export const VolumeUpIcon = styled(FaVolumeUp)``;
export const VolumeMutedIcon = styled(FaVolumeMute)``;
export const PlusIcon = styled(FaPlus)``;
export const MinusIcon = styled(FaMinus)``;
