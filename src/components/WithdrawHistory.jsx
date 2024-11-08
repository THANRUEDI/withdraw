import React from 'react';

function WithdrawHistory({ history }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">ประวัติการถอนเงิน</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="mb-2 flex justify-between">
            <span>ถอน: {item.amount} บาท</span>
            <span>คงเหลือ: {item.balance} บาท</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WithdrawHistory;