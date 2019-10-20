import React, { useRef } from "react";

import * as SC from "./styled";
import icons from "../../style/icons";
import NathanFace from "./assets/images/NathanFace.png";
import LoopsLogo from "./assets/images/LoopsLogo.png";
import ReactPageScroller from "react-page-scroller";
import LandGridLogo from "../landGrid/Logo";

type RowProps = {
  RowComponent: any;
  link: string;
  header: string;
  text: string;
  iconSrc?: string;
  IconComponent?: any;
};

const Landing: React.FC = () => {
  const reactPageScroller = useRef();

  const Row = ({
    RowComponent,
    link,
    header,
    text,
    iconSrc,
    IconComponent
  }: RowProps) => {
    const renderIcon = () => {
      if (IconComponent) {
        return <IconComponent />;
      } else {
        return <SC.RowPicture src={iconSrc} />;
      }
    };
    return (
      <SC.FullPage>
        <RowComponent to={link}>
          {renderIcon()}
          <SC.Information>
            <SC.RowHeader>{header}</SC.RowHeader>
            <SC.RowText>{text}</SC.RowText>
          </SC.Information>
        </RowComponent>
      </SC.FullPage>
    );
  };

  return (
    <SC.PageLayout>
      <ReactPageScroller ref={reactPageScroller}>
        <Row
          RowComponent={SC.PortfolioRow}
          link={"/portfolio"}
          iconSrc={icons.palette}
          header={"whatsrupp.com v 1.0.0"}
          text={"My first attempt at a portfolio website back in 2017"}
        />

        <Row
          RowComponent={SC.SoundboardRow}
          link={"/soundboard"}
          iconSrc={NathanFace}
          header={"King Soundboard"}
          text={"A Soundboard made to annoy my housemate"}
        />

        <Row
          RowComponent={SC.LoopsRow}
          link={"/loops"}
          iconSrc={LoopsLogo}
          header={"Loops and Cats"}
          text={
            "A Live Looping Recording Station - Currently Under Construction"
          }
        />

        <Row
          RowComponent={SC.LandGridRow}
          link={"/land-grid"}
          IconComponent={LandGridLogo}
          header={"Land Grid"}
          text={
            " An interactive chart to display the location and relative pricing of houses"
          }
        />
      </ReactPageScroller>
    </SC.PageLayout>
  );
};

export default Landing;
