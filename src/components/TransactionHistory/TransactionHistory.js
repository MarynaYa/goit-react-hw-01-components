import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody className={s.tbody}>
          {items.map(item => (
            <tr className={s.tr} key={item.id}>
              <td className={s.tdType}>{item.type}</td>
              <td className={s.tdAmount}>{item.amount}</td>
              <td className={s.tdCurrency}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  

TransactionHistory.propTypes = {
 items: PropTypes.arrayOf(
  PropTypes.shape({
  id: PropTypes.string, 
  tupe: PropTypes.string,
  amount:PropTypes.string,
  currency: PropTypes.string,
  }),
 ),
};