import PropTypes from 'prop-types';
import { StatisticItem } from '../StatisticItem';
import { StatSection, StatTitle, StatList } from './Statistics.module';

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
