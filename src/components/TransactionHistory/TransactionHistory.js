import PropTypes from 'prop-types';
import { TransactionList } from '../TransactionList';
import {
  SectonTransaction,
  Table,
  THead,
  TBody,
  Th,
  TrHead,
} from './TransactionHistory.module';
export const TransactionHistory = ({ transactions }) => {
  return (
    <SectonTransaction>
      <Table>
        <THead>
          <TrHead>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </TrHead>
        </THead>
        <TBody>
          {transactions.map(item => (
            <TransactionList key={item.id} item={item} />
          ))}
        </TBody>
      </Table>
    </SectonTransaction>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
