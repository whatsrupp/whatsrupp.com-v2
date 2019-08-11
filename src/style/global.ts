import { css } from '@emotion/core'
import * as colours from './colours'

const globalStyles = css`

* {
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  font-weight: normal;
  color: ${colours.softBlack};
}


body {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}

`
export default globalStyles

