import React from 'react'
import styled from 'styled-components';

function CSS_JS() {

  const Title = styled.h2`
    font-size: 50px;
    color: ${({theme}) => theme.colors.primary}
  `
  return (
    <Title>This is css in js ok</Title>
  )
}

export default CSS_JS