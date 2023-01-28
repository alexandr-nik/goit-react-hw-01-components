import { Td, TrList } from './TransactionList.module';
export const TransactionList = ({ item }) => {
  const { amount, type, currency } = item;
  return (
    <TrList>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TrList>
  );
};
