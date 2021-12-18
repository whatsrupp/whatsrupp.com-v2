import React from "react";

import * as SC from "./styled";
import { audio } from "./assets/audio";

import NathanFace from "./assets/images/NathanFace.png";
import SoundboardButton from "./SoundboardButton";

const Soundboard: React.FC = () => {
  return (
    <SC.PageLayout>
      <SC.Header>
        <SC.BadgeContainer>
          <SC.BadgeOuter />
          <SC.Picture src={NathanFace} />
          <SC.BadgeInner />
        </SC.BadgeContainer>
        <SC.PageTitle>Soundboard King v3</SC.PageTitle>
      </SC.Header>
      <SC.Body>
        <SoundboardButton text="Fab" audioFile={audio.Fab} version="1" />
        <SoundboardButton text="Agggh" audioFile={audio.Agggh} version="1" />
        <SoundboardButton
          text="For Heavens Sake"
          audioFile={audio.ForHeavensSake}
          version="1"
        />
        <SoundboardButton text="Oh Dear" audioFile={audio.OhDear} version="1" />
        <SoundboardButton
          text="Oh Goodness"
          audioFile={audio.Goodness}
          version="1"
        />
        <SoundboardButton text="Ugh No" audioFile={audio.UghNo} version="1" />
        <SoundboardButton
          text="Unbelievable"
          audioFile={audio.Unbelievable}
          version="1"
        />
        <SoundboardButton
          text="You Are Kidding Me"
          audioFile={audio.YouAreKiddingMe}
          version="1"
        />
        <SoundboardButton
          text="I Don't Give A Flying Whizz"
          audioFile={audio.IDontGiveAFlyingWhizz}
          version="2"
        />
        <SoundboardButton
          text="Wowzers Trouser"
          audioFile={audio.WowzersTrousers}
          version="2"
        />
        <SoundboardButton text="Bingo" audioFile={audio.Bingo} version="2" />
        <SoundboardButton
          text="Bingo (sexy)"
          audioFile={audio.SexyBingo}
          version="2"
        />
        <SoundboardButton
          text="Nicholas You Catastrophic Nincompoop"
          audioFile={audio.YouNincompoop}
          version="2"
        />
        <SoundboardButton text="Pukka" audioFile={audio.Pukka} version="2" />
        <SoundboardButton
          text="That's Outrageous"
          audioFile={audio.ThatsOutrageous}
          version="2"
        />
        <SoundboardButton
          text="Oh Hey Now"
          audioFile={audio.oh_hey_now}
          version="3"
        />
        <SoundboardButton
          text="Woah Now"
          audioFile={audio.woah_now}
          version="3"
        />
        <SoundboardButton
          text="Man Oh Man"
          audioFile={audio.man_o_man}
          version="3"
        />
        <SoundboardButton
          text="Bada Frigging Bing (excited)"
          audioFile={audio.badda_friggin_bing_excited}
          version="3"
        />
        <SoundboardButton
          text="Bada Frigging Bing (sexy)"
          audioFile={audio.badda_friggin_bing_sexy}
          version="3"
        />
        <SoundboardButton
          text="He doesn't tell me anything"
          audioFile={audio.does_not_tell_me}
          version="3"
        />
        <SoundboardButton
          text="What a Complete and Utter Pain"
          audioFile={audio.utter_pain}
          version="3"
        />
        <SoundboardButton
          text="Do you want to legally fuck off?"
          audioFile={audio.legally_fuck_off}
          version="3"
        />
        <SoundboardButton text="Bof" audioFile={audio.bof_quiet} version="3" />
        <SoundboardButton
          text="Cool Cool Cool"
          audioFile={audio.cool_cool}
          version="3"
        />
        <SoundboardButton
          text="Coo Coo Coo"
          audioFile={audio.coo_coo}
          version="3"
        />
        <SoundboardButton text="Arses" audioFile={audio.arses} version="3" />
        <SoundboardButton
          text="Oooooh hoo hoo"
          audioFile={audio.oh_ho_hoo_excited}
          version="3"
        />
        <SoundboardButton
          text="And All"
          audioFile={audio.and_all}
          version="3"
        />
        <SoundboardButton
          text="Hooooo Baby"
          audioFile={audio.hoo_baby}
          version="3"
        />
        <SoundboardButton
          text="Oooooo weh (Ceilidh)"
          audioFile={audio.ooo_weh}
          version="3"
        />
        <SoundboardButton text="Eugh" audioFile={audio.eugh} version="3" />
        <SoundboardButton
          text="Ooo Mama"
          audioFile={audio.ooo_mama}
          version="3"
        />
        <SoundboardButton
          text="Hmmmm (empathetic)"
          audioFile={audio.hmm_empathetic}
          version="3"
        />
      </SC.Body>

      <SC.Footer>
        <SC.FooterText>Powered by Rupp Sound Engine</SC.FooterText>
      </SC.Footer>
    </SC.PageLayout>
  );
};

export default Soundboard;
