import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import { Menu } from '@components/Menu';
import { AppContext } from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import IconMenu from '@icons/icon_menu.svg';
import Logo from '@logos/Logo.svg';
import ShoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);
    
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
    <nav>
        <img src={IconMenu} alt="menu" className="menu" />
        <div className="navbar-left">
            <img src={Logo} alt="logo" className="nav-logo" />
            <ul>
                <li>
                <a href="/">All</a>
                </li>
                <li>
                <a href="/">Pines</a>
                </li>
                <li>
                <a href="/">Protectores</a>
                </li>
                <li>
                <a href="/">Combos</a>
                </li>
                <li>
                <a href="/">Forros</a>
                </li>
                <li>
                <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li 
                    className="navbar-email" 
                    onClick={handleToggle}
                >
                        barrigui@example.com
                </li>
                <li 
                    className="navbar-shopping-cart"
                    onClick={() => setToggleOrders(!toggleOrders)}
                >
                <img src={ShoppingCart} />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
            </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
    </nav>
    )
}

export { Header }