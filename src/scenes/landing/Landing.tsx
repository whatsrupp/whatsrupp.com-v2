import React, { useState, useRef } from "react";

import * as SC from "./styled";
import icons from "../../style/icons";
import NathanFace from "./assets/images/NathanFace.png";
import LoopsLogo from "./assets/images/LoopsLogo.png";
import ReactPageScroller from "react-page-scroller";

const Landing: React.FC = () => {
  const reactPageScroller = useRef();

  return (
    <SC.PageLayout>
      <ReactPageScroller ref={reactPageScroller}>
        <SC.FullPage>
          <SC.PortfolioRow to={"/portfolio"}>
            <SC.RowPicture src={icons.palette} />
            <SC.Information>
              <SC.RowHeader>whatsrupp.com v 1.0.0</SC.RowHeader>
              <SC.RowText>
                My first attempt at a portfolio website back in 2017
              </SC.RowText>
            </SC.Information>
          </SC.PortfolioRow>
        </SC.FullPage>
        <SC.FullPage>
          <SC.SoundboardRow to={"/soundboard"}>
            <SC.RowPicture src={NathanFace} />
            <SC.Information>
              <SC.RowHeader>King Soundboard</SC.RowHeader>
              <SC.RowText>A Soundboard made to annoy my housemate</SC.RowText>
            </SC.Information>
          </SC.SoundboardRow>
        </SC.FullPage>
        <SC.FullPage>
          <SC.LoopsRow to={"/"}>
            <SC.RowPicture src={LoopsLogo} />
            <SC.Information>
              <SC.RowHeader>Loops and Cats</SC.RowHeader>>
              <SC.RowText>
                A Live Looping Recording Station - Currently Under Construction
              </SC.RowText>
            </SC.Information>
          </SC.LoopsRow>
        </SC.FullPage>
      </ReactPageScroller>
    </SC.PageLayout>
  );
};

export default Landing;
