import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLable,
  StatPersent,
} from './Statistics.module';
export const Statistics = ({ data, title }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {data.map(item => (
          <StatisticItem key={item.id} item={item} />
        ))}
      </StatList>
    </StatSection>
  );
};

function StatisticItem({ item }) {
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

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
