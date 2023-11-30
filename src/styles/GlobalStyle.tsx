import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;

  font-family: Fira Sans, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.2;
  font-weight: 400;
    color: ${(props) => props.theme.colors.main_text};
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  background-color:${(props) => props.theme.colors.main_bg};;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
.list {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  text-decoration: none;
}

.list {
  list-style: none;
}

.link {
  text-decoration: none;
  color: inherit;
}

a {
  text-decoration: none;
  font-style: normal;
  cursor: pointer;
}

button {
  padding: 0;
  font-family: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
