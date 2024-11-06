// // BalanceConfirmationModal.tsx
// import React from 'react';
// import styles from './BalanceConfirmationModal.module.css'

// interface BalanceConfirmationModalProps {
//   totalBalance: number;
//   entryFee: number;
//   onConfirm: () => void;
//   onCancel: () => void;
// }

// const BalanceConfirmationModal: React.FC<BalanceConfirmationModalProps> = ({ totalBalance, entryFee, onConfirm, onCancel }) => {
//   const remainingBalance = totalBalance - entryFee;

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modal}>
//         <h2>Confirm Your Entry</h2>
//         <div className={styles.info}>
//           <p><strong>Total Balance:</strong> ${totalBalance.toFixed(2)}</p>
//           <p><strong>Entry Fee:</strong> ${entryFee.toFixed(2)}</p>
//           <p><strong>Remaining Balance:</strong> ${remainingBalance.toFixed(2)}</p>
//         </div>
//         <div className={styles.actions}>
//           <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
//           <button onClick={onConfirm} className={styles.confirmButton}>Join Contest</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BalanceConfirmationModal;


// BalanceConfirmationModal.tsx
// import React from 'react';
// import styles from './BalanceConfirmationModal.module.css';

// interface BalanceConfirmationModalProps {
//   totalBalance: number;
//   entryFee: number;
//   onConfirm: () => void;
//   onCancel: () => void;
// }

// const BalanceConfirmationModal: React.FC<BalanceConfirmationModalProps> = ({ totalBalance, entryFee, onConfirm, onCancel }) => {
//   const remainingBalance = totalBalance - entryFee;

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modal}>
//         <h2>Confirm Your Entry</h2>
//         <div className={styles.infoTable}>
//           <div className={styles.row}>
//             <span className={styles.label}>Total Balance</span>
//             <span className={styles.value}>${totalBalance.toFixed(2)}</span>
//           </div>
//           <div className={styles.row}>
//             <span className={styles.label}>Entry Fee</span>
//             <span className={styles.value}>-${entryFee.toFixed(2)}</span>
//           </div>
//           <hr className={styles.divider} />
//           <div className={`${styles.row} ${styles.remainingRow}`}>
//             <span className={styles.label}>Remaining Balance</span>
//             <span className={styles.value}>${remainingBalance.toFixed(2)}</span>
//           </div>
//         </div>
//         <div className={styles.actions}>
//           <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
//           <button onClick={onConfirm} className={styles.confirmButton}>Join Contest</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BalanceConfirmationModal;



// BalanceConfirmationModal.tsx
import React from 'react';
import styles from './BalanceConfirmationModal.module.css';
import Link from 'next/link';

interface BalanceConfirmationModalProps {
  totalBalance: number;
  entryFee: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const BalanceConfirmationModal: React.FC<BalanceConfirmationModalProps> = ({ totalBalance, entryFee, onConfirm, onCancel }) => {
  const remainingBalance = totalBalance - entryFee;
  const isBalanceSufficient = totalBalance >= entryFee;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Confirm Your Entry</h2>
        <div className={styles.infoTable}>
          <div className={styles.row}>
            <span className={styles.label}>Total Balance</span>
            <span className={styles.value}>₹{totalBalance.toFixed(2)}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Entry Fee</span>
            <span className={styles.value}>-₹{entryFee.toFixed(2)}</span>
          </div>
          <hr className={styles.divider} />
          <div className={`${styles.row} ${styles.remainingRow}`}>
            <span className={styles.label}>Remaining Balance</span>
            <span className={styles.value}>₹{remainingBalance.toFixed(2)}</span>
          </div>
        </div>
        
        {!isBalanceSufficient && (
          <p className={styles.insufficientFunds}>
            Insufficient balance. Please add money to proceed.
          </p>
        )}

        <div className={styles.actions}>
          <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
          <button 
            onClick={onConfirm} 
            className={styles.confirmButton} 
            disabled={!isBalanceSufficient}
          >
            {isBalanceSufficient?"Join Contest":(
              <div>
                <Link href="/wallet/transactions/add-money">Add Money</Link>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceConfirmationModal;
