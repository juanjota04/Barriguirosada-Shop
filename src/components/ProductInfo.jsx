import React from 'react';
import '@styles/ProductInfo.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
	return (
		<>
			<img src={product.image} alt={product.title} />
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button">
					<img src={addToCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;