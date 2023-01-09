import { SText } from '../s-text'
import { Meta, Story } from '@storybook/react'
import { breakpoint, useBreakpoint } from '../../../theme/theme'
import React from 'react'
import { useMedia } from 'react-use'
import styled from 'styled-components'
import { SBox as Box, TSBoxProps } from '../s-box'

export default {
  title: 'Styled Components/SBox',
  component: Box
} as Meta

const SMediaBlock = styled(Box)`
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

const Template: Story<TSBoxProps> = (args) => {
  const { xs, sm, md, lg, xl } = useBreakpoint()
  const isMdAndBigger = useMedia(breakpoint.md, true)

  const ResponsiveBlock = (
    <Box
      width={{ xs: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
      background={{ xs: 'red', sm: 'orange', md: 'yellow', lg: 'lightgrey' }}
      border="1px solid black"
    >
      <SText>
        <SText fontWeight="bold">{xs && 'XS'}</SText>
        <SText fontWeight="bold">{sm && 'SM'}</SText>
        <SText fontWeight="bold">{md && 'MD'}</SText>
        <SText fontWeight="bold">{lg && 'LG'}</SText>
        <SText fontWeight="bold">{xl && 'XL'}</SText> Responsive Block
      </SText>
      <Box>{isMdAndBigger && <SText>useMedia(): MD and Bigger detected</SText>}</Box>
    </Box>
  )

  return (
    <>
      <Box pb="30px">
        <SText>
          All available props are here:{' '}
          <a href="https://styled-system.com/api/" target="_blank" rel="noreferrer">
            Styled System API
          </a>{' '}
          If you need some additional mixin - just add it to SBox.
        </SText>
      </Box>
      <Box {...args}>
        <Box>
          <SText>DemoBox 1</SText>
        </Box>
        <Box>
          <SText>DemoBox 2</SText>
        </Box>
        <Box>
          <SText>DemoBox 3</SText>
        </Box>
      </Box>
      <Box p="30px" display="grid" gridGap="20px" gridTemplateColumns="1fr 1fr 1fr">
        <Box background="lightgreen">
          <SText color="typo">GridDemo 1</SText>
        </Box>
        <Box bg="lightcoral">
          <SText py="12px">GridDemo 2</SText>
        </Box>
        <Box bg="lightblue">
          <SText>GridDemo 3</SText>
        </Box>
      </Box>

      <Box>
        <SText type="h5">Responsive Examples</SText>
      </Box>

      <Box>
        <SText type="h6">Example 1: inline styling</SText>
      </Box>
      <Box display="flex" flexWrap="wrap" mb="30px">
        {ResponsiveBlock}
        {ResponsiveBlock}
        {ResponsiveBlock}
        {ResponsiveBlock}
      </Box>

      <Box>
        <SText type="h6">Example 2: styled in styled-components with @media + breakpoint</SText>
      </Box>
      <Box>
        <SMediaBlock>
          <SText>
            Block styled inside styled-components with @media rule and breakpoints manually
          </SText>
        </SMediaBlock>
      </Box>
    </>
  )
}

export const SBox = Template.bind({})
SBox.args = {
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
  gridGap: 'unset',
  gridTemplateColumns: 'none',
  flexDirection: 'inherit',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  color: 'red',
  bg: 'azure',
  cursor: 'pointer'
}
