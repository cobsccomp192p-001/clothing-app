import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/havai2.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser,hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    {currentUser ? (
      <div className="user-name">Wellcome, {currentUser.displayName}</div>
    ) : (
      ""
    )}

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    <CartIcon/>
    </div>
    {hidden? null: <CartDropdown/>}
  </div>
);

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectHidden
})

export default connect(mapStateToProps)(Header);
