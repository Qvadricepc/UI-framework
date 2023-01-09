import { css } from 'styled-components'
import { breakpoint, EFontSizes } from './theme'

/**
 * Custom fonts
 * https://www.cufonfonts.com/font/dm-sans
 * https://transfonter.org/
 */
export const globalTypography = css`
  /*--------------*\
    # Typography
  \*--------------*/

  html {
    font-size: 16px;
  }

  /* Font sizes recommended grid https://stackoverflow.com/a/36483225/2614096 */
  /* Font sizes from our designs https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A99 */
  h1 {
    font-size: ${EFontSizes.heading1Mobile};
    line-height: 2.9375rem;

    @media ${breakpoint.sm} {
      font-size: ${EFontSizes.heading1};
      line-height: 4.6875rem;
    }
  }
  h2 {
    font-size: ${EFontSizes.heading2Mobile};
    line-height: 2.25rem;

    @media ${breakpoint.sm} {
      font-size: ${EFontSizes.heading2};
      line-height: 3.90625rem;
    }
  }
  h3 {
    font-size: ${EFontSizes.heading3Mobile};
    line-height: 1.9375rem;

    @media ${breakpoint.sm} {
      font-size: ${EFontSizes.heading3};
      line-height: 2.60375rem;
    }
  }
  h4 {
    font-size: ${EFontSizes.heading4Mobile};
    line-height: 1.625rem;

    @media ${breakpoint.sm} {
      font-size: ${EFontSizes.heading4};
      line-height: 1.953125rem;
    }
  }
  h5 {
    font-size: ${EFontSizes.bodyLMobile};
    line-height: 1.4375rem;

    @media ${breakpoint.sm} {
      font-size: ${EFontSizes.bodyL};
      line-height: 1.6275rem;
    }
  }
  h6 {
    font-size: ${EFontSizes.bodyMMobile};
    line-height: 1.25rem;

    @media ${breakpoint.sm} {
      font-size: ${EFontSizes.bodyM};
      line-height: 1.301875rem;
    }
  }
  span {
    font-size: ${EFontSizes.bodyMMobile};
    line-height: 1.25rem;

    @media ${breakpoint.sm} {
      font-size: ${EFontSizes.bodyM};
      line-height: 1.301875rem;
    }
  }
  small {
    font-size: ${EFontSizes.bodySMobile};
    line-height: 1rem;

    @media ${breakpoint.sm} {
      font-size: ${EFontSizes.bodyS};
      line-height: 1.139375rem;
    }
  }
  /* styling h1..h6 and p from bootstrap typography https://getbootstrap.com/docs/4.0/content/typography/ */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-bottom: 0.5rem;
    /* I will reset all line-heights for now as line-heights in firma looks weird */
    /* line-height: 1; */
    font-weight: normal;

    /*
    @media ${breakpoint.sm} {
      line-height: 1;
    }
     */
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  body {
    line-height: 1.5;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span,
    small,
    sub,
    sup,
    a,
    p,
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: DM Sans, Helvetica, sans-serif;
      letter-spacing: -0.02em;
    }
  }
`
