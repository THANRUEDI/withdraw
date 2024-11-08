import React, { useState } from 'react';
import WithdrawForm from './components/WithdrawForm';
import WithdrawHistory from './components/WithdrawHistory';

function App() {
  const [balance, setBalance] = useState(10000); // เริ่มต้นด้วยยอดเงิน 10,000 บาท
  const [history, setHistory] = useState([]);

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      const newBalance = balance - amount;
      setBalance(newBalance);
      setHistory([{ amount, balance: newBalance }, ...history]);
    } else {
      alert('ยอดเงินในบัญชีไม่เพียงพอ');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex">
        {/* ระบบถอนเงิน */}
        <div className="w-1/2 pr-4">
          <WithdrawForm balance={balance} onWithdraw={handleWithdraw} />
        </div>
        {/* ประวัติการถอนเงิน */}
        <div className="w-1/2 pl-4">
          <WithdrawHistory history={history} />
        </div>
      </div>
    </div>
  );
}

export default App;