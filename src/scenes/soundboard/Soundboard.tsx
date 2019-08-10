import React, {useState} from 'react';

import * as SC from './styled'
import icons from '../../style/icons'


type IconProps = {
  animationTime: string,
  src: string,
  text: string,
  url?: string,
}


const Icon: React.FC<IconProps> = ({animationTime, src, text, url=''}) => {


  return(
    <SC.IconLink href={url}>
      <SC.Icon animationTime={animationTime} src={src}/>
      <SC.IconText>{text}</SC.IconText>
    </SC.IconLink>
  )


}

const Soundboard: React.FC = () => {
  const [text, setText] = useState('WHATS ');


  return (
   <SC.PageLayout>
     <SC.PageContent>

       <SC.Header>
         <SC.Title>
            <SC.Whats onMouseEnter={()=>{setText('NICK ')}} onMouseLeave={()=>{setText('WHATS ')}}>
              {text}
              </SC.Whats>RUPP <SC.DeepPurple>
                portfolio</SC.DeepPurple>

         </SC.Title>
       </SC.Header>
        <SC.Body>

       <Icon text={"Coding"} animationTime={'11s'} src={icons.coding} url={"https://github.com/whatsrupp"}/>
       <Icon text={"Photography"} animationTime={'10s'} src={icons.aperture} url={"https://www.instagram.com/nick.rupp/?hl=en"}/>
       <Icon text={"Design"} animationTime={'10s'} src={icons.palette}/>
       <Icon text={"Writing"} animationTime={'15s' }src={icons.pen} url={'https://medium.com/@nickrupp95'}/>
       <Icon text={"Engineering"} animationTime={'13s'} src={icons.wrench}/>
       <Icon text={"Modelling"} animationTime={'13s'} src={icons.model}/>

        </SC.Body>
        <SC.Footer>
          <SC.FooterText>
            The original whatsrupp website design as made at the end of Makers Academy June 2017
          </SC.FooterText>
        </SC.Footer>
       
     </SC.PageContent>


   </SC.PageLayout>
  );
}

export default Soundboard;
