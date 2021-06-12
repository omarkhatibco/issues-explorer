import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
      border-width: 0px;
      border-style: solid;
      box-sizing: border-box;
  }

  ${reset}

  :root {
    /* Colors */
    --main-bg-color : #e7e7e7;
    --flikr-color-primary : #0063dc;
    --flikr-color-secondery : #ff0084;

    /* Font-Sizes */
    --body-font-size: 1rem;

    /* Breakpoints */
    --gutter:1rem;
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;

    /* others */
    --transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  
  body {
    background-color: var(--main-bg-color);
    width: 100%;
    height:100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  }

  .__next {
    width: 100%;
    height:100%;
    min-height: 100vh;
  }
`;
