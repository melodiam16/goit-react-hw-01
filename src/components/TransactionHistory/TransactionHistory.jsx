import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={css.tableStyle}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tableRow} key={id}>
              <td className={css.tableData}>{type}</td>
              <td className={css.tableData}>{amount}</td>
              <td className={css.tableData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
