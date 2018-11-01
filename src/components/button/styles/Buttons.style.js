import styled, { css } from 'react-emotion'

export const GhostButton = styled('button')`
  display: inline-block;
  height: auto;
  width: 100%;
  max-width: 20rem;
  padding: .5rem;
  color: #eee;
  letter-spacing: .1rem;
  word-spacing: .2rem;
  background-color: transparent;
  border: .1rem solid #eee;
  border-radius: .2rem;
  transition: background-color .2s, color .2s;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #eee;
    color: #451d7f;
  }
`

export const CTAButton = styled('button')`
  display: inline-block;
  height: auto;
  width: 100%;
  max-width: 20rem;
  padding: .5rem;
  color: #eee;
  font-weight: bold;
  letter-spacing: .1rem;
  word-spacing: .2rem;
  background-color: #fa8231;
  border: .1rem solid #fa8231;
  border-radius: .2rem;
  transition: background-color, border .2s;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #fd9644;
    border: .1rem solid #fd9644;
  }
`

export const Button = styled('button')`
  display: inline-block;
  height: auto;
  width: 100%;
  max-width: 20rem;
  padding: .5rem;
  color: #eee;
  letter-spacing: .1rem;
  word-spacing: .2rem;
  background-color: #451d7f;
  border: .1rem solid #451d7f;
  border-radius: .2rem;
  transition: border .2s, background-color .2s, color .2s;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #7351a3;
    border: .1rem solid #7351a3;
  }
`

export const BackButton = styled('button')`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  height: 2rem;
  color: #451d7f;
  background-color: #eee;
  border: .1rem solid #eee;
  border-radius: .2rem;
  transition: border .2s, background-color .2s, color .2s;
  text-transform: uppercase;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    background-color: #451d7f;
    border: .1rem solid #451d7f;
    color: #eee;
  }
  .text {
    vertical-align: middle;
  }
`

export const DisabledClass = css`
  color: #d9d9d9;
  background-color: #f5f5f5;
  border: .1rem solid #d9d9d9;
  cursor: not-allowed;
  &:hover {
    color: #d9d9d9;
    background-color: #f5f5f5;
    border: .1rem solid #d9d9d9;
  }
`
