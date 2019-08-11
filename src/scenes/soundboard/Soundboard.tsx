import React, { Component } from "react";
// import {
//     SoundboardWrap, PageTitle, PageFooter, FooterText
// } from './styled'

import * as SC from "./styled";
import * as audio from "./Audio";
import SoundboardButton from "./Button";
import PageHeader from "./PageHeader";

const Soundboard: React.FC = () => {
  return (
    <SC.SoundboardWrap>
      <PageHeader />
      <SC.PageTitle>Soundboard King</SC.PageTitle>
      <SoundboardButton text="Fab" audioFile={audio.Fab} />
      <SoundboardButton text="Agggh" audioFile={audio.Agggh} />
      <SoundboardButton
        text="For Heavens Sake"
        audioFile={audio.ForHeavensSake}
      />
      <SoundboardButton text="Oh Dear" audioFile={audio.OhDear} />
      <SoundboardButton text="Oh Goodness" audioFile={audio.Goodness} />
      <SoundboardButton text="Ugh No" audioFile={audio.UghNo} />
      <SoundboardButton text="Unbelievable" audioFile={audio.Unbelievable} />
      <SoundboardButton
        text="You Are Kidding Me"
        audioFile={audio.YouAreKiddingMe}
      />
      <SoundboardButton
        text="I Don't Give A Flying Whizz"
        audioFile={audio.IDontGiveAFlyingWhizz}
      />
      <SoundboardButton text="Bingo" audioFile={audio.Bingo} />
      <SoundboardButton text="Bingo (sexy)" audioFile={audio.SexyBingo} />
      <SoundboardButton
        text="Nicholas You Catastrophic Nincompoop"
        audioFile={audio.YouNincompoop}
      />
      <SoundboardButton text="Pukka" audioFile={audio.Pukka} />
      <SoundboardButton
        text="That's Outrageous"
        audioFile={audio.ThatsOutrageous}
      />

      <SC.PageFooter>
        <SC.FooterText>Powered by Rupp Sound Engine</SC.FooterText>
      </SC.PageFooter>
    </SC.SoundboardWrap>
  );
};

export default Soundboard;
