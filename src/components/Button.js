import styled from 'styled-components'

const Button = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;

  color: #fff;
  background: var(--main-color);
  padding: 0.6rem 0.8rem;
  outline: none;
  border: none;
  border-radius: 0.2rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    cursor: pointer;
  }
`

export default Button
