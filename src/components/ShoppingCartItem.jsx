import React from 'react';
import '@styles/ShoppingCartItem.scss';
import ProductItem from './ProductItem';

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src={product.images} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
		</div>
	);
}

export default ShoppingCartItem;