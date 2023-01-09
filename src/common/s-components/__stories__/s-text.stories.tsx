import { SText as Text, TSTextProps } from '../s-text'
import { Meta, Story } from '@storybook/react'
import { breakpoint } from '../../../theme/theme'
import React from 'react'
import styled from 'styled-components'
import { SBox } from '../s-box'

export default {
  title: 'Styled Components/SText',
  component: Text
} as Meta

const SMediaText = styled(Text)`
  /* this default style will be ignored as we set breakpoint.xs - from 0px */
  background-color: red;

  @media ${breakpoint.xs} {
    background-color: lightblue;
  }
  @media ${breakpoint.sm} {
    background-color: lightgreen;
  }
  @media ${breakpoint.md} {
    background-color: lightsalmon;
  }
  @media ${breakpoint.lg} {
    background-color: lightgoldenrodyellow;
  }
  @media ${breakpoint.xl} {
    background-color: violet;
  }
`

const Template: Story<TSTextProps> = (args) => {
  return (
    <>
      <SBox pb="30px">
        <Text>
          All available props are here:{' '}
          <a href="https://styled-system.com/api/" target="_blank" rel="noreferrer">
            Styled System API
          </a>{' '}
          If you need some additional mixin - just add it to SBox.
        </Text>
      </SBox>
      <Text {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea
      </Text>

      <SBox py="30px" display="flex" flexWrap="wrap">
        <SBox width={{ md: 1 / 3, xs: 1 }}>
          <Text type="h1">Heading/1</Text>
          <Text type="h2">Heading/2</Text>
          <Text type="h3">Heading/3</Text>
          <Text type="h4">Heading/4</Text>
          <Text type="h5">Body/L</Text>
          <Text type="h6">Body/M</Text>
          <Text type="span">Body/M</Text>
          <br />
          <Text type="small">Body/S</Text>
        </SBox>
        <SBox width={{ md: 1 / 3, xs: 1 }}>
          <Text type="h1" fontWeight="semibold">
            Heading/1
          </Text>
          <Text type="h2" fontWeight="semibold">
            Heading/2
          </Text>
          <Text type="h3" fontWeight="semibold">
            Heading/3
          </Text>
          <Text type="h4" fontWeight="semibold">
            Heading/4
          </Text>
          <Text type="h5" fontWeight="semibold">
            Body/L
          </Text>
          <Text type="h6" fontWeight="semibold">
            Body/M
          </Text>
          <Text type="span" fontWeight="semibold">
            Body/M
          </Text>
          <br />
          <Text type="small" fontWeight="semibold">
            Body/S
          </Text>
        </SBox>

        <SBox width={{ md: 1 / 3, xs: 1 }}>
          <Text type="h1" variant="alt">
            Heading/1
          </Text>
          <Text type="h2" variant="alt">
            Heading/2
          </Text>
          <Text type="h3" variant="alt">
            Heading/3
          </Text>
          <Text type="h4" variant="alt">
            Heading/4
          </Text>
          <Text type="h5" variant="alt">
            Body/L
          </Text>
          <Text type="h6" variant="alt">
            Body/M
          </Text>
          <Text type="span" variant="alt">
            Body/M
          </Text>
          <br />
          <Text type="small" variant="alt">
            Body/S
          </Text>
        </SBox>
      </SBox>

      <SBox>
        <Text type="h4">Responsive Examples:</Text>
      </SBox>

      <SBox>
        <Text type="h6">Example 1</Text>
        <Text
          background={{ xs: 'red', md: 'lightblue', lg: 'lightgreen' }}
          fontSize={{
            xs: '16px',
            sm: '24px',
            md: '32px',
            lg: '48px'
          }}
        >
          inline object literal with breakpoints
        </Text>
      </SBox>

      <SBox>
        <Text type="h6">Example 2</Text>
        <SMediaText>styled in components using @media rule and breakpoints</SMediaText>
      </SBox>
    </>
  )
}

export const SText = Template.bind({})
SText.args = {
  type: 'p',
  variant: 'default',
  p: '',
  px: '',
  py: '',
  pl: '',
  pr: '',
  pt: '',
  pb: '',
  m: '',
  mx: '',
  my: '',
  ml: '',
  mr: '',
  mt: '',
  mb: '',
  display: 'inherit',
  color: 'typo',
  bg: 'bg2'
}
