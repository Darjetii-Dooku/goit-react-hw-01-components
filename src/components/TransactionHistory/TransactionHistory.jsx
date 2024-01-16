import React from "react";
import css from "./TransactionHistory.module.css"
import uniqid from 'uniqid';

const TransactionHistory = ({items}) => {
    return (
        <table className={css.table}>
  <thead>
    <tr className={css.head} id={uniqid()}>
      <th className={css.item}>Type</th>
      <th className={css.item}>Amount</th>
      <th className={css.item}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => 
        <tr className={items.indexOf(item) % 2 === 0 ? css.wlist : css.blist} key={item.id}>
        <td className={css.item}>{item.type}</td>
        <td className={css.item}>{item.amount}</td>
        <td className={css.item}>{item.currency}</td>
      </tr>
        )}
  </tbody>
</table>
    )
}

export default TransactionHistory