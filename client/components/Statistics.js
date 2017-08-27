import React, { Component } from 'react';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div id="layout">
          <div className="jumbotron">
            <h1>Trung Tâm Anh Ngữ Ila</h1>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Location</th>
                <th>Today</th>
                <th>This Week</th>
                <th>This Month</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Công Ty Cổ Phần Kỹ Thuật HTC</td>
                <td>101</td>
                <td>918</td>
                <td>3678</td>
                <td>5.200.000 VND</td>
              </tr>
              <tr className="success">
                <td>Trung Tâm Phân Phối Nước Khoáng Tinh Khiết Sapuwa</td>
                <td>145</td>
                <td>876</td>
                <td>3576</td>
                <td>5.000.000VND</td>
              </tr>
              <tr className="danger">
                <td>Siêu thị Điện máy Xanh</td>
                <td>198</td>
                <td>1387</td>
                <td>4345</td>
                <td>7.100.000 VND</td>
              </tr>
              <tr className="info">
                <td>PNJ Co.opMart Vũng Tàu</td>
                <td>154</td>
                <td>997</td>
                <td>4011</td>
                <td>6.900.000 VND</td>
              </tr>
              <tr className="warning">
                <td>Nhà sách Fahasa - Vũng Tàu</td>
                <td>175</td>
                <td>876</td>
                <td>3200</td>
                <td>4.000.000 VND</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}