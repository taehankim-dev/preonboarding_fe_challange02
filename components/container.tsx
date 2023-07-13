'use client';

import styled from 'styled-components';

const PageContainerStyle = styled.div`
  display:flex;
  padding:6px 12px;
`

type Props = {
  children? : React.ReactNode,
}

export const PageContainer = ({children} : Props) => {
  return (
    <PageContainerStyle>
      {children}
    </PageContainerStyle>
  )
}

