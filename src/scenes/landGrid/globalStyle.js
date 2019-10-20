import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
	
	* {
		margin: 0;
		padding: 0;
		border: 0;
		border-radius: 0;
		box-sizing: border-box;
		font-family: inherit;
		font-size: inherit;
		font-weight: normal;
    } 
  
    html {
        background: rgb(0,21,52);
    }

	body {
		font-family: 'Rubik', sans-serif;
		overscroll-behavior-y: none;

		@media print {
			font-size: 15px;
		}
	}


`;
