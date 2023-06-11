import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.span`
  font-size: 10px;
  @media screen and (min-width: 420px) {
    font-size: 15px;
  }
  font-weight: 700;
`;
