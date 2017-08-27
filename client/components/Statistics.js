import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div id="layout">
          <header id="top-header" className="site-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <Link to="/" className="site-header--logo">
                    <span>gads</span><span style={{ color: "#65d840" }}>!Bin</span>
                  </Link>
                </div>
                <div style={{display: "none"}} className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                  <nav id="main-menu" className="site-header--menu">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="sandwitch">
                  <div className="sw-top"></div>
                  <div className="sw-mid"></div>
                  <div className="sw-bot"></div>
                </div>
              </div>
            </div>
          </header>
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