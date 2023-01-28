import styled from 'styled-components';
export const ProfileFrame = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
  background-color: #e7ecf2;
`;
export const ProfileWrap = styled.div`
  width: 250px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 10px 10px 5px 0px rgb(193 179 193 / 40%);
`;
export const ProfileImg = styled.img`
  width: 100px;
  margin: 25px auto;
  border-radius: 50%;
`;
export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;
export const ProfileName = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  color: #19283b;
`;
export const ProfileTag = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  color: #6f767e;
`;
export const ProfileLocation = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
  color: #6f767e;
`;
export const ProfileStats = styled.ul`
  display: flex;

  background-color: #f3f6f9;
`;
export const ProfileStatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.3%;
  padding: 10px;
  outline: 1px solid #ebeff4;
`;
export const ProfileStatsLable = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: #6f767e;
`;
export const ProfileStatsQuantity = styled.span`
  color: #19283b;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
`;
