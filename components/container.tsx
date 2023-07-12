'use client';

import styled from 'styled-components';

const IntroContainerStyle = styled.div`
  display : grid;
  grid-template-columns : repeat(1, minmax(0, 1fr));
  gap : 1.5rem;
  padding : 6px 12px;
`

const PageContainerStyle = styled.div`
  display:flex;
  padding:6px 12px;
`

type Props = {
  children? : React.ReactNode,
}

export const IntroContainer = ({children} : Props) => {
  return (
    <IntroContainerStyle>
      {children}
    </IntroContainerStyle>
  )
};

export const PageContainer = ({children} : Props) => {
  return (
    <PageContainerStyle>
      {children}
    </PageContainerStyle>
  )
}

