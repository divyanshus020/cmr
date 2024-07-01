import React from 'react';

const Form = () => {
  return (
    <div className="p-4">
      <form className="space-y-4 ">
      <div className="border p-4">
          <h2 className="text-lg font-bold ">KHEMCHAND TRADERS DAVENGERE</h2>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Customer Name:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Primary Name:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Customer Type:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Primary Contact:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Shop Type:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Target Given:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Valuable Customer:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Dispatch Status:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Cash / Credit:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Customer Description:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Credit Days:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Brands:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">Reason for Not Giving Credit:</label>
              <input type="text" className="w-full p-2 border" />
            </div>
          </div>
        </div>

        <div className="border p-4">
          <h2 className="text-lg font-bold">MARKETING PERFORMANCE</h2>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th>Month</th>
                <th>Source of Order</th>
                <th>Total Calls</th>
                <th>Productive Calls</th>
              </tr>
            </thead>
            <tbody>
              {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map((month) => (
                <tr key={month}>
                  <td>{month}</td>
                  <td><input type="text" className="w-full p-2 border" /></td>
                  <td><input type="number" className="w-full p-2 border" /></td>
                  <td><input type="number" className="w-full p-2 border" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border p-4">
          <h2 className="text-lg font-bold">SALES PERFORMANCE</h2>
          <label className="block">Target Given 50000</label>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th>Month</th>
                <th>Target Achieved</th>
              </tr>
            </thead>
            <tbody>
              {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map((month) => (
                <tr key={month}>
                  <td>{month}</td>
                  <td><input type="number" className="w-full p-2 border" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border p-4">
          <h2 className="text-lg font-bold">PAYMENT PERFORMANCE</h2>
          <label className="block">Old Balance Till Regular Date or Last Tour Date: 30-06-2024</label>
          <label className="block">Nett Amt: 20000</label>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th>Month</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month) => (
                <tr key={month}>
                  <td>{month}</td>
                  <td><input type="text" className="w-full p-2 border" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default Form;
