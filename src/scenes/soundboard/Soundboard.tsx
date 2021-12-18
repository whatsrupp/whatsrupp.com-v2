import React from "react";

import * as SC from "./styled";
// import { audio } from "./assets/audio";

import NathanFace from "./assets/images/NathanFace.png";
import SoundboardButton from "./SoundboardButton";
import soundbites from "./soundbites.json";

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
        {soundbites.map(soundbite => {
          return (
            <SoundboardButton
              text={soundbite.display}
              audioFile={require(`./assets/audio/${soundbite.path}`)}
              version={soundbite.version}
              soundbiteId={soundbite.id}
            />
          );
        })}
      </SC.Body>

      <SC.Footer>
        <SC.FooterText>Powered by Rupp Sound Engine</SC.FooterText>
      </SC.Footer>
    </SC.PageLayout>
  );
};

export default Soundboard;
