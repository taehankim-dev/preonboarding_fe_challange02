'use client';

import styled from 'styled-components';

const IntroWrap = styled.section`
  display : flex;
  height:200px;
  line-height:200px;
  justify-content:center;
  margin-bottom:12px;
  background-color: #d8f0fa;
`

const IntroTitle = styled.h1`
  font-size:1.5rem;
  font-weight:bold;
`

export const Intro = () => {
  return (
    <IntroWrap>
      <IntroTitle>Blog</IntroTitle>
    </IntroWrap>
  )
}