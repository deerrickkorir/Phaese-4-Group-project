import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { ThemeContext } from '../ThemeContext';
import './cart.css'; // Importing CSS styles

// Placeholder image URL
const img = 'https://c4.wallpaperflare.com/wallpaper/459/1000/937/jett-valorant-valorant-video-games-video-game-girls-drawing-hd-wallpaper-preview.jpg';

// Functional component Cart
function Cart() {
    const { cartItems, setCartItems } = useContext(ThemeContext);

    

    const handleQuantityChange = (event, changedItem) => {
      const newQuantity = event.target.value;
      const updatedCartItems = cartItems.map(item => {
        if (item.id === changedItem.id) {
          return { ...item, quantity: parseInt(newQuantity, 10) }; // Convert newQuantity to integer
        }
        return item;
      });
      setCartItems(updatedCartItems);
    };

    const handleRemoveItem = (id) => {
      const updatedCartItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCartItems);
    };

    // Conditional rendering based on items in the cart
    if (cartItems && cartItems.length > 0) {
        // Display content when there are items in the cart
        return (
            <section className="container content-section" id="shopping-cart">
      <h3 style={{ textDecoration: 'underline', textAlign: 'center', marginBottom: '7%' }}>Shopping Cart</h3>
      <table className="table table-hover table-cart">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="cart-items">
          {cartItems.map((item) => (
            <tr key={item.id} className="cart-row">
              <td className="cart-item cart-column">
                <img src={item.image} className="cart-item-image" width="50" height="50" alt="Product" />
                <span className="cart-item-title">{item.name}</span>
              </td>
              <td className="cart-item cart-column">
                <span className="cart-price cart-column">{item.price}</span>
              </td>
              <td className="cart-item cart-column">
                <button className="btn btn-danger" type="button" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="btn-purchase" style={{ marginTop: '10%' }}>
        <button type="button" className="btn btn-dark btn-purchase" onClick={() => handlePurchase()}>
          <a className="fa-solid fa-cart-shopping" style={{ marginRight: '6%' }} ></a>PURCHASE
        </button>
      </div>
    </section>
        );
    } else {
        // Display content when there are no items in the cart
        return (
            <div className="cart-modal">
                <h2 className="cart-modal-text">Seities Apparel Cart</h2>
                <div className="cart-content">
                    <img src={img} alt="Cart" className="cart-image" />
                    <div className="cart-description">
                        <h3>Your Cart is currently Empty</h3>
                        <p>
                            It would make you very happy if you added an item to the cart.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

  function handlePurchase(){
    // Perform purchase action or show confirmation
    toast.success('Thank you for purchasing!')
    // Example: Clearing the cart after purchase
    setCartItems([]);
  };
}

export default Cart;