import styled from 'react-emotion'

export const SpinnerContainer = styled('div')`
  position: relative;
  height: 1rem;
`

export const Spinner = styled('div')`
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    margin-top: -.5rem;
    margin-left: -.5rem;
    border-radius: 50%;
    border: 1px solid #eee;
    border-top-color: #7351a3;
    animation: spinner .6s linear infinite;
  }

  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
`
