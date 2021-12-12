import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`

export const Title = styled.h1`
  color: #fff;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`
