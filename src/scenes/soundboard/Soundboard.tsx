import React, {useState} from 'react';

import * as SC from './styled'
import icons from '../../style/icons'



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

       <SC.Icon animationTime={'11s'} src={icons.coding}/>
       <SC.Icon animationTime={'10s'} src={icons.aperture}/>
       <SC.Icon animationTime={'12s'} src={icons.model}/>
       <SC.Icon animationTime={'10s'} src={icons.palette}/>
       <SC.Icon animationTime={'15s' }src={icons.pen}/>
       <SC.Icon animationTime={'13s'} src={icons.wrench}/>
        </SC.Body>
        <SC.Footer>
            The original whatsrupp website design as made at the end of Makers Academy June 2017
        </SC.Footer>
       
     </SC.PageContent>


   </SC.PageLayout>
  );
}

export default Soundboard;
