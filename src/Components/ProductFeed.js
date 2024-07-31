import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export const ProductFeed = () => {
    const [products, setProducts] = useState([]);
    const [cartInfo, setCartInfo] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("AUTH_TOKEN");
        window.location.href = "/login";
    }

    const homeProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    }

    const loadOrCreateCart = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/carts/user/1'); // Assuming userId is 1
            const data = await res.json();
            setCartInfo(data);
        } catch (error) {
            console.error("Failed to fetch cart details", error);
        }
    }

    const addToCart = async (productId) => {
        try {
            const res = await fetch('https://fakestoreapi.com/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: 1,
                    date: new Date().toISOString(),
                    products: [{ productId, quantity: 1 }]
                })
            });
            const data = await res.json();
            setCartInfo(data);
            toast.success("Added to cart!");
        } catch (error) {
            console.error("Failed to add to cart", error);
            toast.error("Failed to add to cart");
        }
    }

    useEffect(() => {
        homeProducts();
        loadOrCreateCart();
    }, []);

    return (
        <div>
            <h1>Products to buy</h1>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            <div style={{position:'fixed', top:0, right:0,margin:20, padding:10 ,border:'1px solid', zIndex:999 , backgroundColor:"white"}} >
                <h3>Total Products - {cartInfo ? cartInfo.total_items : 0}</h3>
                 <h3>Total Price - </h3> 
                <button className="btn btn-warning">Checkout</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                {
                    products.map((product) => {
                        const { image, title, price, id } = product;
                        return (
                            <div key={id} className="card" style={{ width: 300, height: 300, margin: 20 }}>
                                <img
                                    className="card-img-top"
                                    src={image}
                                    alt={title}
                                    style={{
                                        width: 100,
                                        height: 100
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">${price}</p>
                                    <button className="btn btn-primary" onClick={() => addToCart(id)}>Add to cart</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
