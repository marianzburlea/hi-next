import styled from 'styled-components'

export const SNav = styled.nav`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 48px repeat(auto-fit, minmax(100px, 1fr));
`

export const SA = styled.a`
  height: 48px;
  line-height: 48px;
  /* padding: 0 1rem; */
  background-color: #d52027;
  display: block;
  text-align: center;
  cursor: pointer;
  color: white;
  border-radius: 24px;
  text-transform: capitalize;
  font-size: 18px;

  ${({ src }) => {
    if (src) {
      return `
        background-image: url(${src});
        background-size: contain;
        background-position: 0 0;
        background-repeat: no-repeat;
      `
    }
  }}
`
