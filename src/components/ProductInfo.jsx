import React from 'react';
import '@styles/ProductInfo.scss';
import AddCart from '@icons/bt_add_to_cart.svg';
import Bowser from '@barrigui/IMG_7246.JPG';

const ProductInfo = () => {
    return (
        <div>
            <img src={Bowser} alt="bowser" />
			<div className="ProductInfo">
				<p>$5,00</p>
				<p>Pin Bowser</p>
				<p>Un accesorio para tus prendas o bolsos.</p>
				<button className="primary-button">
					<img src={AddCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
        </div>
    );
};

export default ProductInfo;