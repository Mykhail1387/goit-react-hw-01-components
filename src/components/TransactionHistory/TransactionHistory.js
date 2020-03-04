import React from 'react';
import PropTypes from 'prop-types';

import styles from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <>task-04---------------------------------------------------------------------------------------------------------
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th className={styles.Th}>Type</th>
                    <th className={styles.Th}>Amount</th>
                    <th className={styles.Th}>Currency</th>
                </tr>
            </thead>
            <tbody >
                {items.map(item =>
                    <tr key={item.id}>
                        <td className={styles.Td}>{item.type}</td>
                        <td className={styles.Td}>{item.amount}</td>
                        <td className={styles.Td}>{item.currency}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
}

export default TransactionHistory;