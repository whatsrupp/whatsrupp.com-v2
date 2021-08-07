import React, { useState } from "react";

import * as SC from "./styled";
import * as images from "./assets/images";
import Metronome from "./Metronome";
import MetronomeButton from "./MetronomeButton";
import Tracks from "./Tracks";
const Loops: React.FC = () => {
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  /** We can't render the main page here straight away because if we enter the loops page directly the user needs to interact with the page before we create an audio context (used in the <Metronome /> component)
   * This is due to browser's autoplay policies eg chromes:
   * https://developer.chrome.com/blog/autoplay/#webaudio
   */
  if (!userHasInteracted) {
    return (
      <SC.PageLayout>
        <SC.Header />

        <SC.Body>
          <SC.GetStartedButton
            onClick={event => {
              setUserHasInteracted(true);
            }}
          >
            Get Looping
          </SC.GetStartedButton>
        </SC.Body>
      </SC.PageLayout>
    );
  } else {
    return (
      <Metronome>
        <SC.PageLayout>
          <SC.Header>
            <SC.Head src={images.jack} />
            <SC.Head src={images.nick} />
            <SC.Logo src={images.logo} />
            <SC.Head src={images.will} />
            <SC.Head src={images.viv} />
          </SC.Header>
          <SC.Body>
            <Tracks />
            <MetronomeButton />
          </SC.Body>
          <SC.Footer></SC.Footer>
        </SC.PageLayout>
      </Metronome>
    );
  }
};

export default Loops;
