import { css } from 'styled-components'

export const globalTooltip = css`
  .tippy-content {
    position: relative;
    z-index: 1;
  }

  .tippy-box {
    position: relative;
    background-color: ${(p) => p.theme.colors.bg2};
    box-shadow: 0 4px 34px
      ${(p) => (p.theme.id === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(245,247,249, 0.2)')};
    border-radius: 12.5px;
    outline: 0;
    transition-property: transform, visibility, opacity;
  }

  .tippy-box[data-animation='fade'][data-state='hidden'] {
    opacity: 0;
  }

  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }

  .tippy-arrow {
    width: 16px;
    height: 16px;
    color: ${(p) => p.theme.colors.bg2};
  }

  .tippy-arrow:before {
    content: '';
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }

  .tippy-box[data-placement^='top'] > .tippy-arrow {
    bottom: 0;
  }

  .tippy-box[data-placement^='top'] > .tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: ${(p) => p.theme.colors.bg2};
    transform-origin: center top;
  }

  .tippy-box[data-placement^='bottom'] > .tippy-arrow {
    top: 0;
  }

  .tippy-box[data-placement^='bottom'] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: ${(p) => p.theme.colors.bg2};
    transform-origin: center bottom;
  }

  .tippy-box[data-placement^='left'] > .tippy-arrow {
    right: 0;
  }

  .tippy-box[data-placement^='left'] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: ${(p) => p.theme.colors.bg2};
    right: -7px;
    transform-origin: center left;
  }

  .tippy-box[data-placement^='right'] > .tippy-arrow {
    left: 0;
  }

  .tippy-box[data-placement^='right'] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: ${(p) => p.theme.colors.bg2};
    transform-origin: center right;
  }

  .tippy-box[data-inertia][data-state='visible'] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }
`
