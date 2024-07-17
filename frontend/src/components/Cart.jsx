import React from 'react';
import './cart.css';

function Cart() {
    return (
        <div className='pricing-container'>
            <h2 className='pricing-title'>Our Pricing Plans</h2>
            <div className="pricing-section">
                <div className="pricing-card">
                    <h3 className="plan-name">Basic Plan</h3>
                    <p className="plan-price">$9.99/month</p>
                    <ul className="plan-features">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="select-plan-button">Select Plan</button>
                </div>
                <div className="pricing-card">
                    <h3 className="plan-name">Standard Plan</h3>
                    <p className="plan-price">$19.99/month</p>
                    <ul className="plan-features">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                    </ul>
                    <button className="select-plan-button">Select Plan</button>
                </div>
                <div className="pricing-card">
                    <h3 className="plan-name">Premium Plan</h3>
                    <p className="plan-price">$29.99/month</p>
                    <ul className="plan-features">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                        <li>Feature 5</li>
                    </ul>
                    <button className="select-plan-button">Select Plan</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
