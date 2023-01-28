import styled from 'styled-components';

export const FriendList = styled.ul`
  background-color: #e7ecf2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 20px;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: 100px;
  padding-left: 15px;
  gap: 15px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 10px 10px 5px 0px rgb(193 179 193 / 40%);
`;
export const FriendSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ value }) => {
    return value ? 'green' : 'red';
  }};
`;
export const FriendImg = styled.img`
  display: block;
`;
export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
`;
