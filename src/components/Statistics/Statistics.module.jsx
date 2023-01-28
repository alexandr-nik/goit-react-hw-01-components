import styled from 'styled-components';

export const StatSection = styled.section`
  background-color: #e7ecf2;
  padding: 20px 0;
`;
export const StatTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.16;
  text-transform: uppercase;
  margin: 0;
`;
export const StatList = styled.ul`
  background-color: #e7ecf2;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
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
