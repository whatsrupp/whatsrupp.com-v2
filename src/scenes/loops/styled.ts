import styled from "@emotion/styled";
import PageLayoutComponent from "../../style/components/PageLayout";

export const PageLayout = styled(PageLayoutComponent)`
  background: #202020;
  display: grid;
  grid-template-rows: 1fr 3fr 0.5fr;
`;

export const RecordButton = styled.button`
  background: red;
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  width: 50px;
  height: 50px;
  font-size: 0;
  background-color: red;
  border: 0;
  border-radius: 50px;
  margin: 18px;
  outline: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

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
  max-width: 800px;
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
    height: 10%:
`;
