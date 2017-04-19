import React, { Component } from 'react';

export default class Sidebar extends Component {
   render() {
    return (
      <div className="row">
        <div className="col-lg-3 text-center">
          <div className="bg-sidebar">
            <img src="../../assets/img/nomnomnom_logo.png" width="100%"/>
            <div className="content-sidebar">
              <p>
                Ruko BIBC No. 8Q<br/>
                Jln. Karang Tengah Raya<br/>
                Lebak Bulus, Jak – Sel
              </p>
              <p>Phone 021 7581 7841</p>
              <p>
                Opening Hours<br/>
                10am - 9pm
              </p>
            </div>
          </div>
        </div>
      </div>
    );
   }
}
