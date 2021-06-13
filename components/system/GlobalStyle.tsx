import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
      border-width: 0px;
      border-style: solid;
      box-sizing: border-box;
  }

  ${reset}

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }

  :root {
    /* Colors */
    --color-white : #fff;
    --color-black : #292929;
    --color-primary : #24292e;
    --color-secondary : #586069;
    --color-gray : #f6f8fa;
    --color-border : #ebedef;
    --color-link : #0366d6;
    --color-success : #22863a;
    --color-danger : #cb2431;

    /* Font-Sizes */
    --body-font-size: 1rem;

    /* Breakpoints */
    --gutter:1rem;
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;

    /* others */
    --transition: all 0.3s ease-in-out;
  }
  
  body {
    width: 100%;
    height:100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color : var(--color-black);
  }

  .__next {
    width: 100%;
    height:100%;
    min-height: 100vh;
  }

  @keyframes animation-skeleton {
    from{
      background:var(--color-gray);
    }
    to{
      background:var(--color-border);
    }
}`;
