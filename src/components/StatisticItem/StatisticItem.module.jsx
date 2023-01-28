import styled from 'styled-components';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 70px;
  background: ${props => props.inputColor || '#e7ecf2'};
`;
export const StatLable = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.16;
  padding: 5px;
`;
export const StatPersent = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.16;
  padding: 10px;
`;
