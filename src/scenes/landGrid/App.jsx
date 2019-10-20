import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import Chart from './Chart';
import Logo from './Logo';
const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  background: rgb(0,21,52);
  background: linear-gradient(90deg, rgba(0,21,52,1) 0%, rgba(0,21,52,1) 90%, rgba(255,84,112,1) 100%);

`;

const ContentWrap = styled.div`
  height: 100%;
  width: 90%;
  padding: 20px;

  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Title = styled.h1`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-left: 20px;
  font-size: 32px;
`;

const FooterText = styled.p`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`;

const Body= styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

`;

function App() {
  return (
    <>
      <StyledApp>
        <ContentWrap>

        <Header><Logo/><Title>LandGrid</Title></Header>
        <Body>

         <Chart/>
        </Body>
        <Footer><FooterText>A graph to show the location and relative prices of properties in a 100km grid</FooterText></Footer>
        </ContentWrap>
      </StyledApp>
    <GlobalStyle />
    </>
  );
}




export default App;
