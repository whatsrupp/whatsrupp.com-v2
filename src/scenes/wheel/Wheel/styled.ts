import styled from "@emotion/styled";

export const Path = styled.path`
  fill: yellow;
  opacity: 0.5;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Text = styled.text`
  :hover {
    cursor: pointer;
  }
`;
