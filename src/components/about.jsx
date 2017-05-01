import React, { Component } from 'react';

import Header from 'components/header';
import Footer from 'components/footer';

export default class AboutUs extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container mb-5">
					<div className="row animated fadeInUp">
						<div className="col">
							<div className="text-center content-about">
								<h1 className="text-uppercase mb-4"><span>who we are?</span></h1>
								<p className="text-center text-justify">
									Nom Nom Nom is your casual & homey neighbourhood cafe/ restaurant opened in February 2012 tucked in Lebak Bulus area. Cutely decorated like a living room, we want you to chill and feels just like at home.
								</p>
								<div className="quote mb-3 mt-4"><em>"Open for breakfast, lunch, dinners & something in-between"</em></div>
								<div className="quote mb-4"><em>"made with love. 100% fresh"</em></div>
								<p>
									Nom Nom Nom have something for everyone from the young to the old. We always try to bring you a yummy, fun & innovative take to the traditional menus using only fresh, healthy & good quality produce.<br /><br />
									As a matter of coffee, we provides unique & good coffee beans from all across the country. We supports local farmers and give back to the community. When you're in luck, we sometimes have International Beans at our hands. So keep an eye to our Instagram for updates!<br /><br />
									We look forward to serving you soon!
								</p>
							</div>
						</div>
					</div>
					<div className="row animated fadeInUp">
						<div className="col">
							<div className="featured-content text-center">
								<h1 className="text-uppercase"><span>Featured</span></h1>
								<ul className="list-inline">
									<a href="https://www.youtube.com/watch?v=1UY0OxqvfGs"><li className="list-inline-item"><img className="img-fluid" src="./src/assets/img/intv.png" width="120px" alt="" /></li></a>
									<a href="https://www.youtube.com/watch?v=gnZXB9tfs6o"><li className="list-inline-item"><img className="img-fluid" style={{ 'verticalAlign': '-34px' }} src="./src/assets/img/nettv.png" width="150px" alt="" /></li></a>
									<a href="http://www.femina.co.id/article/klaudia-bermain-rasa"><li className="list-inline-item"><img className="img-fluid" style={{ 'verticalAlign': '-23px' }} src="./src/assets/img/femina.png" width="180px" alt="" /></li></a>
									<a href="https://www.facebook.com/nomnomnom.id/photos/a.364821543598099.86473.129559350457654/364828310264089/?type=3&theater"><li className="list-inline-item"><img className="img-fluid" style={{ 'verticalAlign': '-33px' }} src="./src/assets/img/logo.png" width="150px" alt="" /></li></a>
									<a href="https://www.facebook.com/nomnomnom.id/photos/a.364821543598099.86473.129559350457654/392477287499191/?type=3&theater"><li className="list-inline-item"><img className="img-fluid" style={{ 'verticalAlign': '-33px' }} src="./src/assets/img/OZJakarta.png" width="150px" alt="" /></li></a>
									<a href="https://www.facebook.com/nomnomnom.id/photos/a.364821543598099.86473.129559350457654/507218452691740/?type=3&theater"><li className="list-inline-item"><img className="img-fluid" style={{ 'verticalAlign': '-31px' }} src="./src/assets/img/tabloid-rumah.png" width="160px" alt="" /></li></a>
									<li className="list-inline-item" data-toggle="modal" data-target="#myModal"><img className="img-fluid" style={{ 'verticalAlign': '-20px' }} src="./src/assets/img/kebayoran.png" width="180px" alt="" /></li>
								</ul>
							</div>
						</div>
					</div>
					<div id="myModal" className="modal fade" role="dialog">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-body">
									<img className="img-fluid" src="./src/assets/img/infokebayoran.jpg" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
