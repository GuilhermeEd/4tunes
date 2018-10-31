import styled from 'react-emotion'

export const GhostButton = styled('div')`
  display: block;
  height: auto;
  width: 100%;
  max-width: 15rem;
  padding: .5rem;
  color: #eee;
  letter-spacing: .1rem;
  word-spacing: .2rem;
  background-color: transparent;
  border: .1rem solid #eee;
  border-radius: .2rem;
  transition: background-color .2s, color .2s;
  text-transform: uppercase;
  &:hover {
    background-color: #eee;
    color: #451d7f;
  }
`

export const CTAButton = styled('div')`
  display: block;
  height: auto;
  width: 100%;
  max-width: 15rem;
  padding: .5rem;
  color: #eee;
  font-weight: bold;
  letter-spacing: .1rem;
  word-spacing: .2rem;
  background-color: #fa8231;
  border: .1rem solid #fd9644;
  border-radius: .2rem;
  transition: background-color .2s;
  text-transform: uppercase;
  &:hover {
    background-color: #fd9644;
  }
`

export const Button = styled('div')`
  display: block;
  height: auto;
  width: 100%;
  max-width: 15rem;
  padding: .5rem;
  color: #eee;
  letter-spacing: .1rem;
  word-spacing: .2rem;
  background-color: #451d7f;
  border: .1rem solid #451d7f;
  border-radius: .2rem;
  transition: border .2s, background-color .2s, color .2s;
  text-transform: uppercase;
  &:hover {
    background-color: #7351a3;
    border: .1rem solid #7351a3;
  }
`
