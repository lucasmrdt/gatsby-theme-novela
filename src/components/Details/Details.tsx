import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Details = styled.details`
  color: ${(p) => p.theme.colors.articleText};
  transition: ${(p) => p.theme.colorModeTransition};
  max-width: 680px;
  margin: 0 auto 20px;
  width: 100%;

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
  `};

  & > summary {
    outline: none;
    word-break: keep-all;
    font-size: 18px;
    line-height: 1.45;
    font-weight: bold;
    color: ${(p) => p.theme.colors.primary};
    font-family: ${(p) => p.theme.fonts.serif};
    cursor: pointer;
    padding: 10px 0;

    ${mediaqueries.phablet`
      padding: 10px 20px;
      font-size: 16px;
    `};
  }

  &[open] > summary {
    background: ${(p) => p.theme.colors.background};
    position: sticky;
    top: 0;
    z-index: 1;
  }

  & * {
    box-sizing: border-box;
  }
`;

export default Details;
