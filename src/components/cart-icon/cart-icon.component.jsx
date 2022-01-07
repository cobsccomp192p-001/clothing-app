import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import { useSelector,useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon =()=>{

    const itemCount=useSelector(selectCartItemsCount);
    const dispatch=useDispatch();

    return (<div className='cart-icon' onClick={()=>dispatch(toggleCartHidden())}>
        <ShoppingCart className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>

    </div>)
};

// const mapDispatchToProps= dispatch=>({
//     toggleCartHidden:()=>dispatch(toggleCartHidden())
// });

// const mapStateToProps=createStructuredSelector
// ({
//     itemCount: selectCartItemsCount
// })

export default CartIcon;
