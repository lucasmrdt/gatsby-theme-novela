import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Details = styled.details`
  color: ${(p) => p.theme.colors.articleText};
  transition: ${(p) => p.theme.colorModeTransition};
  max-width: 680px;
  margin: 0 auto 35px;
  width: 100%;

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    margin: 0 auto 25px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};

  & > summary {
    word-break: keep-all;
    font-size: 18px;
    line-height: 1.45;
    font-weight: bold;
    color: ${(p) => p.theme.colors.primary};
    font-family: ${(p) => p.theme.fonts.serif};
    cursor: pointer;

    ${mediaqueries.phablet`
      font-size: 16px;
    `};
  }
`;

export default Details;
