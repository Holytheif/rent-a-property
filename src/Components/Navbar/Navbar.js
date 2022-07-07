import React from "react";
import "./Navbar.scss";

const renderNavbar = () => {
	return (
		<header>
			<nav>
				<div className="navbar">
					<div className="action-container">
						<div className="logo-box">
							<img src="./assets/logo.png" alt="logo" />
						</div>
						<div className="options-box">
							<button className="rent-btn active-btn">Rent</button>
							<button className="buy-btn">Buy</button>
							<button className="sell-btn">Sell</button>
							<button className="manage-btn">
								Manage Property
							</button>
							<button className="resources-btn">Resources</button>
						</div>
					</div>
					<div className="auth-container">
						<button className="login-btn">Login</button>
						<button className="signup-btn">Sign Up</button>
					</div>
				</div>
			</nav>
			<div className="heading">
				<h1 className="title">Search properties to rent</h1>
			</div>
		</header>
	);
};

const Navbar = () => {
	return <>{renderNavbar()}</>;
};

export default Navbar;
