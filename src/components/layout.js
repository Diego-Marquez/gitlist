import { children } from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.main`

  padding-block:2.5rem ;
  min-block-size: 100vh;
  max-inline-size: 75rem; //1200px
  margin: auto;
  padding-inline: 20px;
  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: 278px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 2rem;
    grid-template-areas: "profile filters" "profile repo-list";
  }
  

`

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout
