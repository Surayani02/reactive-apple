import React from 'react';
import styled from "styled-components";

function Header(props) {
    return (
        <Wrapper>
            <ContentWrapper>
                <Heading>Get <StyledText>supercharged</StyledText> for university.</Heading>
                <SubHeading>Save on Mac or iPad. Plus get AirPods.<sup>1</sup></SubHeading>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  background-color: var(--bg-color);
`

const ContentWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Heading = styled.h1`
  font-size: 56px;
  line-height: 1.07143;
  letter-spacing: -0.005em;
  color: var(--color-text-primary);
  font-weight: bold;
  font-style: italic;
`

const StyledText = styled.span`
  color: var(--color-text-secondary);
`

const SubHeading = styled.h3`
  font-weight: 400;
`