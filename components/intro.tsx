'use client'

import styled from 'styled-components';
import DateFormatter from "@/components/date-formatter";
import { useEffect, useState } from 'react';

type IntroContainerProps = {
  children? : React.ReactNode
}

type IntroContentsType = {
  title : string,
  date : string,
  description : string,
}

const IntroContainerStyle = styled.section`
  display : grid;
  grid-template-columns : repeat(1, minmax(0, 1fr));
  gap : 1.5rem;
  padding : 6px 12px;
`

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

const IntroContentsStyle = styled.div`
  width:100%;
`

const IntroContentsTitleStyle = styled.div`
  display:flex;
  width:100%;
  font-size:1.2rem;
  font-weight:bold;
  >span{
    &:last-child{
      margin-left:auto;
    }
  }
`

const IntroContentsBodyStyle = styled.div`
  display:flex;
  width:100%;
  margin-top:14px;
  box-sizing:border-box;
  padding:12px;
  border-radius:7px;
  background-color : #e3eda5;
`

export const IntroArticle = styled.article`
  width:50%;
  margin:auto;
  padding:24px;
  background-color : lightgoldenrodyellow;
  border-radius : 7px;
  transition:all 0.3s;
  &:hover{
    box-shadow:0px 0px 7px black;
  }
`

export const IntroContainer = ({children} : IntroContainerProps) => {
  return (
    <IntroContainerStyle>
      {children}
    </IntroContainerStyle>
  )
};

export const Intro = () => {
  return (
    <IntroWrap>
      <IntroTitle>Blog</IntroTitle>
    </IntroWrap>
  )
}

export const IntroContents = ({title, date, description} : IntroContentsType) => {
  const [paragraph, setParagraph] = useState<string>("");

  useEffect(() => {
    const sliceDescription = () => {
      let sentence = description.length > 20 ? description.slice(0,20) : description;
      setParagraph(sentence)
    }

    sliceDescription();
  }, [description])

  return (
    <IntroContentsStyle>
      <IntroContentsTitleStyle>
        <span>{title}</span>
        <span>
          <DateFormatter dateString={date} />
        </span>
      </IntroContentsTitleStyle>
      <IntroContentsBodyStyle>
        {paragraph}
      </IntroContentsBodyStyle>
    </IntroContentsStyle>
  )
}