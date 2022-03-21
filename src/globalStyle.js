import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    /** Montserrat Regular **/
    @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2")
  }

  /** Montserrat Medium **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/Montserrat-Medium.woff2") format("woff2")
  }

  /** Bitter Regular **/
  @font-face {
    font-family: "Bitter";
    src: url("/fonts/Bitter-Regular.woff2") format("woff2")
  }

  body {
    font-family: ${(props) => props.theme.fontFamily.default};
    font-size: ${(props) => props.theme.fontSize.default};
    line-height: ${(props) => props.theme.lineHeight.default};
    color: ${(props) => props.theme.color.main};
  }
`;

export default globalStyle;
