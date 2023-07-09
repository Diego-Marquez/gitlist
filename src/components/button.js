import styled from 'styled-components'
import { isValidElement } from 'react'

const ButtonStyled = styled.button`
  border-radius: .5rem;
  font: var(--button);
  background: var(--buttonBG);
  color: var(--white);
  border: 1px solid var(--grey);
  min-inline-size: 135px;
  padding-block: .25rem;
  display: inline-flex;
  gap: .5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none !important;

  &:hover{
    background: var(--white);
    color: var(--button);
  }
  @media (prefers-color-scheme: light) {
    &:hover{
    background: var(--grey);
    color: var(--bg);
  }
  }
`

function Button({ text, link, className, icon }) {
 const component = link ? 'a' : 'button'
 let IconComponent = null
 if (icon){
  if (isValidElement(icon)){
    IconComponent = icon
  }
 }
  return (
    <ButtonStyled as={component} href={link} className={className}>
     {IconComponent} {text}
    </ButtonStyled>
  )
}

export const ButtonContrast= styled(Button)`
  background:var(--white);
  color: var(--buttonBG);
  &:hover{
    background: var(--buttonBG);
    color: var(--white);
  }
`
export const ButtonRounded= styled(Button)`
  border: 2px solid var(--grey);
  min-inline-size: initial;
  border-radius: 50%;
  padding: .75rem;

  &:hover{
    background: var(--buttonBG);
    transform: scale(1.1);
  }
  
`

export default Button
