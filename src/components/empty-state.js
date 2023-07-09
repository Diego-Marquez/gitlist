import styled from 'styled-components'

const EmptyStateStyled = styled.div`
  text-align: center;
  p{
    font-size: 1.5rem;  
  }

`

function EmptyState() {
  return (
    <EmptyStateStyled>
      <h2>There are no repositories</h2>
      <p>(⩾﹏⩽)</p>

    </EmptyStateStyled>
  )
}

export default EmptyState
