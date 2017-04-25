import React, { Component } from 'react';

import Header from 'components/header';
import Footer from 'components/footer';

export default class AboutUs extends Component {
	render() {
		return (
			<div className="">
				<Header />
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="text-center content-about">
								<h1 className="text-uppercase mb-4"><span>who we are?</span></h1>
								<p className="text-center text-justify">
									Nom Nom Nom is your casual & homey neighbourhood cafe/ restaurant opened in February 2012 tucked in Lebak Bulus area. Cutely decorated like a living room, we want you to chill and feels just like at home.<br/><br/>
									Nom Nom Nom have something for everyone from the young to the old. We always try to bring you a yummy, fun & innovative take to the traditional menus using only fresh, healthy & good quality produce. <br/><br/>
									As a matter of coffee, we provides unique & good coffee beans from all across the country. We supports local farmers and give back to the community. When you're in luck, we sometimes have International Beans at our hands. So keep an eye to our Instagram for updates!<br/><br/>
									We look forward to serving you soon!
								</p>
								<em className="quote">"Open for breakfast, lunch, dinners & something in-between"</em>
								<em className="quote">"made with love. 100% fresh"</em>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
