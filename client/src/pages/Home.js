import React from "react";
import { sendTransaction } from '../js/logic';

const Home = () => {

  return (
    <div  id="home" className="wrapper">
        <div className="total">
          <div className="total">Your total is: $<span id="total">0</span></div>
        </div>
    
        <div className="form">
          <input type="text" id="t-name" placeholder="Name of transaction" />
          <input type="number" min="0" id="t-amount" placeholder="Transaction amount" />
          <button id="add-btn" onClick={() => sendTransaction(true)}><i className="fa fa-plus buttons" ></i>Deposit</button>
          <button id="sub-btn" onClick={() => sendTransaction(false)}><i className="fa fa-minus"></i>Expense</button>
          <p className="error"></p>
        </div>
    
        <div className="transactions">
          <table>
            <thead>
              <th>Transaction</th>
              <th>Amount</th>
            </thead>
            <tbody id="tbody">
              
            </tbody>
          </table>
        </div>
        
        <canvas id="myChart"></canvas>
      </div>
  );
};

export default Home;
