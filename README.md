## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Deploy](#deploy)
- [Scripts](#scripts)
- [Icons](#icons)
- [SVG Icons](#svg-icons)
- [SVGR](#svgr)
- [Typography](#typography)
- [Layout](#layout)
- [Media Queries](#media-queries)
- [Buttons](#buttons)
- [Links](#links)
- [Tags](#tags)
- [Switches](#switches)
- [Checkboxes](#checkboxes)
- [Radios](#radios)
- [Modals](#modals)
- [Inputs](#inputs)
- [Media](#media)
- [Spinners](#spinners)
- [Icons Net](#icons-net)
- [Tooltips](#tooltips)
- [Toasts](#toasts)


## Technologies

Project is created with:

![npm](https://img.shields.io/npm/v/react?label=React)
![npm](https://img.shields.io/npm/v/typescript?label=TypeScript)
![npm](https://img.shields.io/npm/v/styled-components?label=Styled%20Components)

To work with node.js we use [asdf](https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies)

After the installation run
`asdf install`

## Setup

```
npm i -g verdaccio
npm install
npm start
```

## Deploy
To test it locally run 
`$ verdaccio`
It will open local npm registry on http://localhost:4873/
In .npmrc replace the content with:
```
registry=http://localhost:4873/
```
for both projects.

Try `npm publish` in this project and `npm install` in the dependent project.
Before each publish increment `alpha` version in `package.json` e.g. `0.2.3-alpha.17`.
Before real publish return a correct registry and token to `.npmrc` and remove `alpha` ending in the version.
Commit and tag this version

#### Tagging release

- `git tag -a "vX.X.X" -m "Month DAY, YEAR"`, e.g. `December 17, 2020`
- `git push origin --tags`

Only after that do actual `npm publish`
On github.com create release using this tag

## Installation
Make sure that the dependent project has the following dependencies installed:
```
"react": "^17.0.2",
"react-dom": "^17.0.2",
"styled-components": "^5.0.1",
"styled-system": "^5.1.0"
```

```jsx
/* === CONNECT ONDEFY-UI === */
// normalize default browser css
import 'normalize.css';
// add icomoon font support
import '@ondefy/ondefy-ui/dist/assets/fonts/icomoon/style.css';
// add icomoon svg support
import '@ondefy/ondefy-ui/dist/assets/svg/icomoon/style.css';
import '@ondefy/ondefy-ui/dist/assets/svg/icomoon/svgxuse';
// connect custom fonts
import '@ondefy/ondefy-ui/dist/assets/fonts/dmsans/style.css';
import { OndefyUIThemeProvider } from '@ondefy/ondefy-ui';

/* === CONNECT ONDEFY-XXX-PROJECT GlOBAL CSS === */
// import GlobalStyles from '@theme/global-styles';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProviderWeb3>
          <OndefyUIThemeProvider>
            <RouterProvider router={router} />
          </OndefyUIThemeProvider>
        </ProviderWeb3>
      </PersistGate>
    </Provider>
  );
};
```

## Scripts

Here is a list of important commands:
- `npm run start` - start storybook
- `npm run tslint` - to check typescript
- `npm run stylelint` - to check css in styled-components
- `npm run lint` - to check eslint + prettier
- `npm run format` - to run prettier formatting
- `npm run qa` - to run all linters at once
- `npm run test` - to run jest test runner
- `npm run storybook` - to start storybook playground
- `npm run icons` - to regenerate icon types for OIcon and OSvgIcon component
- `npm run deploy` - to publish storybook online using [github pages](https://github.com/ondefy/ondefy-ui/settings/pages). Available here by default [ondefy.github.io/ondefy-ui](https://ondefy.github.io/ondefy-ui)

## Icons

Icons are located here `/public/assets/fonts/icomoon` in form of icomoon font
![](docs/icons/storybook-icons.png)

In order to add new icon you should do the following steps:
1. Go to [icomoon app](https://icomoon.io/app/#/select)
2. Click `Import icons`
3. Select `/public/assets/fonts/icomoon/selection.json`
4. You will see: `Your icon selection was loaded.
   Would you like to load all the settings stored in your selection file?`
5. Click `Yes`
6. It will prepare all existing icons for further regeneration. On this step if you deselect some icons it will be removed from the set¬
7. If you want to add a new icon click `Import icons` again
8. Add svg images
9. Select them all by clicking on them with a mouse
10. If you wish - you could remove color of these icons by clicking bar icon on the right side and then Properties - Remove All Colors
11. Click Font - Download to the bottom of the screen
12. It will download icomoon-v1.0.zip file
13. Remove all files from `/public/assets/fonts/icomoon`
14. Unzip the content of this archive to /public/assets/fonts/icomoon
15. Run `npm run icons` to update icons types

To simplify the work with icons there is `OSvgIcon` component in `/common/components`
```jsx
<OIcon name="cursor" />
```


## SVG Icons
![](docs/o-svg-icon.png)
[Figma Design Icons](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A221)

1. Go to [icomoon app](https://icomoon.io/app/#/select)
2. Click `Import icons`
3. Upload `/public/assets/svg/icomoon/selection.json`
4. Upload own icons or deselect existing
5. You can leave colors as is
6. Select icons
7. Click `Download SVG` to get icomoon zip archive
8. Unzip it
9. Copy files from SVG folder to `/public/assets/svg-icons`
10. Run `npm run icons` to update icons types


To simplify the work with svg icons there is `OSvgIcon` component in `/common/components`
```jsx
<OSvgIcon name="telegram" />
```


## SVGR

[SVGR transformation](https://react-svgr.com/) support is also enabled so you can import svg directly as components.
You can use svg like this inside `js` files
```jsx
import svg from './assets/file.svg?url'
import Svg from './assets/file.svg'
const App = () => {
 return (
   <div>
     <img src={svg} width="200" height="200" />
     <Svg width="200" height="200" viewBox="0 0 3500 3500" />
   </div>
 )
}
```
or in `css`
```css
.example {
  background-image: url(./assets/file.svg);
}
```


## Typography

![](docs/s-text.png)
[Figma Designs Typography](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A99)

Everything that is related to text and heading could be done with just one component `SText`.
It is here `/src/common/s-components/s-text.tsx`.
It is built on top of [styled-system api](https://styled-system.com/api/)
Everything that it could do including responsive tricks you can find in storybook


## Layout

![](docs/s-box.png)
Everything that is related to block element could be done with just one component `SBox`.
It is here `/src/common/s-components/s-box.ts`.
It is built on top of [styled-system api](https://styled-system.com/api/)
Everything that it could do including responsive tricks you can find in storybook


## Media Queries

There are several methods for work with media queries and breakpoints that could be easily used:
1. Direct inline rules on `SBox` and `SText` components
```jsx
<SBox
  width={{ xs: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
  background={{ xs: 'red', sm: 'orange', md: 'yellow', lg: 'lightgrey' }}
>...</SBox>

<SText
  background={{ xs: 'red', md: 'lightblue', lg: 'lightgreen' }}
  fontSize={{
    xs: '16px',
    sm: '24px',
    md: '32px',
    lg: '48px',
  }}
>
  ...
</SText>
```
2. Using `breakpoint` from `/src/theme/theme.ts` inside styled-components
```js
const SMediaBlock = styled(SBox)`
  /* this default style will be ignored as we set breakpoint.xs - from 0px */
  background: red;

  @media ${breakpoint.xs} {
    background: lightblue;
  }
  @media ${breakpoint.sm} {
    background: lightgreen;
  }
  @media ${breakpoint.md} {
    background: lightsalmon;
  }
  @media ${breakpoint.lg} {
    background: lightgoldenrodyellow;
  }
  @media ${breakpoint.xl} {
    background: violet;
  }
`;
```
3. Use `useBreakpoint()` hook from `/src/theme/theme.ts` inside your components. Only one breakpoint among of these could be `true`
```js
const { xs, sm, md, lg, xl } = useBreakpoint();
```

4. Use `useMedia()` from `react-use` library inside your components.
   For eaxmple it will give you `true` for all sizes above `breakpoint.md`.
   Less strict then `useBreakpoint()` from the previous example
```js
const isMdAndBigger = useMedia(breakpoint.md, true);
```


## Buttons

![](docs/o-buttons.png)


[Figma Button Components](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A4291)

You could find `OButton` examples in Storybook `/src/common/components/o-button/__stories__/o-button.stories.tsx`

```jsx

<OButton variant="primary"
        size="lg" 
        iconRight={<OIcon name="home" fontWeight="bold" />}>
  primary lg
</OButton>


<OButton variant="secondary"
        size="md"
        icon={<OIcon name="home" fontWeight="bold" />} 
/>

```


## Links

![](docs/o-link.png)
[Figma Links Components](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A4291)

You could find `OLink` examples in Storybook `/src/common/components/o-link/__stories__/o-link.stories.tsx`

```jsx

<OLink variant="primary"
       size="md"
       href="#">
  primary lg
</OLink>


<OLink variant="secondary"
       size="sm" 
       isExternal
       href="#">
  secondary sm
</OLink>

```


## Tags

![](docs/o-tag.png)
[Figma Tags Components](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A4291)

You could find `OTag` examples in Storybook `/src/common/components/o-tag/__stories__/o-tag.stories.tsx`

```jsx

<Tag
  label="Label"
  size="sm"
  variant="primary"
  onClose={() => {}}
  disabled
/>


```


## Switches

![](docs/o-switch.png)
[Figma Switch Components](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A4291)

You could find `OSwitch` examples in Storybook `/src/common/components/o-switch/__stories__/o-switch.stories.tsx`

```jsx

<Switch
  variant="primary"
  disabled
  label="controlled"
  value={value}
  onChange={(value) => {
    setChecked(value);
  }}
/>

```


## Checkboxes

![](docs/o-checkbox.png)
[Figma Checkbox Components](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A4291)

You could find `OCheckbox` examples in Storybook `/src/common/components/o-checkbox/__stories__/o-checkbox.stories.tsx`

```jsx

<OCheckbox
  variant="primary"
  disabled
  label="controlled"
  value={checked}
  onChange={(value) => {
    setChecked(value);
  }}
/>

```


## Radios

![](docs/o-radio.png)
[Figma Radios Components](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A4291)

You could find `ORadio` examples in Storybook `/src/common/components/o-radio/__stories__/o-radio.stories.tsx`

```jsx

<Radio
  variant={variant}
  label="Label 1"
  name="form-1"
  value="Yes"
  checked={conrolledChecked === 'Yes'}
  onChange={() => {
    setControlledChecked('Yes');
  }}
/>


<Radio
  variant={variant}
  label="Label 2"
  name="form-1"
  value="No"
  checked={conrolledChecked === 'No'}
  onChange={() => {
    setControlledChecked('No');
  }}
/>


```


## Modals

![](docs/o-modal.png)
[Figma Radios Components](https://www.figma.com/file/J2qdiNHN3rSjp8OsGqELqD/Ondefy-Lib-v.2?node-id=3%3A13683)

You could find `OModal` examples in Storybook `/src/common/components/o-modal/__stories__/o-modal.stories.tsx`

```jsx

<Modal isOpened={open} onCancel={handleCancel}>
  Content
</Modal>

```


## Inputs

![](docs/o-input.png)

You could find `OInput` examples in Storybook `/src/common/components/o-input/__stories__/o-input.stories.tsx`

```jsx

<Input
  width="100%"
  value={value}
  onChange={setValue}
  placeholder="Search by name, token, network..."
  iconRight={<OIcon name="search" />}
/>

```


## Media

![](docs/o-media.png)

You could find `OMedia` examples in Storybook `/src/common/components/o-media/__stories__/o-media.stories.tsx`

```jsx

<OMedia
  alignItems="center">
  <OIcon name="search" />
  <SBox>
    <SText>Media Body</SText>
  </SBox>
</OMedia>

```


## Spinners

![](docs/o-spinner.png)

You could find `OSpinner` examples in Storybook `/src/common/components/o-spinner/__stories__/o-spinner.stories.tsx`

```jsx

<OSpinner
  size={16} 
  color="accent" />

```


## Icons Net

![](docs/o-icons-net.png)

You could find `OIconNet` examples in Storybook `/src/common/components/o-icon-net/__stories__/o-icon-net.stories.tsx`

```jsx

<OIconNet
  network="arbitrum-one"
  coinName="UniX"
  coinImage="https://assets.coingecko.com/coins/images/20674/small/unix.png?1663499268"
/>

```


## Tooltips

![](docs/o-tooltip.png)

You could find `OTooltip` examples in Storybook `/src/common/components/o-tooltip/__stories__/o-tooltip.stories.tsx`

```jsx

<OTooltip
  content={
    <SBox>
      <SText>I am tooltip</SText>
    </SBox>
  }
>
  <SText>Hover me</SText>
</OTooltip>

```

## Toasts

![](docs/o-toast.png)

You could find `OToast` examples in Storybook `/src/common/components/o-toast/__stories__/o-toast.stories.tsx`

You can show toasts just by calling `toast.next` method

```jsx
toast.next({
  variant: 'success',
  message: 'This is a success toast component',
});
toast.next({
  variant: 'error',
  message: 'This is a error toast component',
});
toast.next({
  variant: 'warning',
  message: 'This is a warning toast component',
});
toast.next({
  variant: 'info',
  message: 'This is a info toast component',
});
```

