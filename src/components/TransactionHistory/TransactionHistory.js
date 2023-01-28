import PropTypes from 'prop-types';
import {
  SectonTransaction,
  Table,
  THead,
  TBody,
  Td,
  Th,
  TrList,
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
            <Transaction key={item.id} item={item} />
          ))}
        </TBody>
      </Table>
    </SectonTransaction>
  );
};

function Transaction({ item }) {
  const { amount, type, currency } = item;
  return (
    <TrList>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TrList>
  );
}
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
