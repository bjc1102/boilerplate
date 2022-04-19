import React from 'react'
import styled from 'styled-components'

//BEM 방식 ( block , element , model )

const index = () => {
  return <Wrapper>index</Wrapper>
}

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default index
