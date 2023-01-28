import {
    StatItem,
    StatLable,
    StatPersent,
  } from './StatisticItem.module';

export const  StatisticItem = ({ item }) => {
    const { label, percentage } = item;
    const color = getRandomColor();
    return (
      <StatItem inputColor={color}>
        <StatLable>{label}</StatLable>
        <StatPersent>{percentage}%</StatPersent>
      </StatItem>
    );
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return `${color}`;
  }