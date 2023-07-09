import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  background: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
  border-radius: .5rem;
  option{
    background: var(--buttonBG);  

  }
 
  &:hover{
    background: var(--grey);
    cursor: pointer;
  }
  @media (prefers-color-scheme: light) {
      border: 1px solid var(--grey);

    &:hover{
      background: var(--bg);
    }
  }
 
  
`

function Selector({children, setFilters}) {
  function handleFilters(e) {
      if(setFilters) {
          setFilters(e.target.value)
      }
  }
  return (
      <SelectorStyled onChange={handleFilters}>
          {children}
      </SelectorStyled>
  )
}

export default Selector
