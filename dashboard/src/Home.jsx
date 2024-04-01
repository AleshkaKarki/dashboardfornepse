import React from 'react';

function Home() {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Default Portfolio Name</h3>
      </div>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr>
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr>
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </main>
  );
}

export default Home;
