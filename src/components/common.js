import styled from 'styled-components';
const spacing25 = '25px';

export const Margin = styled.div`
  ${p => (p.top ? `margin-top: ${p.top === true ? spacing25 : p.top}` : '')};
  ${p =>
    p.bottom
      ? `margin-bottom: ${p.bottom === true ? spacing25 : p.bottom}`
      : ''};
`;
