import React, { useState } from 'react';

function WithdrawForm({ balance, onWithdraw }) {
  const [amount, setAmount] = useState('');

  const handleWithdraw = (value) => {
    if (value > 0) {
      onWithdraw(value);
      setAmount('');
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">ระบบถอนเงิน</h2>
      <p className="mb-4 text-lg">ยอดเงินคงเหลือ: <span className="font-semibold">{balance} บาท</span></p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {[100, 500, 1000, 5000].map((value) => (
          <button
            key={value}
            onClick={() => handleWithdraw(value)}
            className="bg-pink-300 text-white py-2 rounded-lg"
          >
            ถอน {value} บาท
          </button>
        ))}
      </div>
      <input
        type="number"
        placeholder="จำนวนเงินที่ต้องการถอน"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={() => handleWithdraw(parseInt(amount))}
        className="w-full bg-red-400 text-white py-2 rounded-lg"
      >
        ถอนเงิน
      </button>
    </div>
  );
}

export default WithdrawForm;