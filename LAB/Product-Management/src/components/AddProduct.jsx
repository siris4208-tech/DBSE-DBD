import React, { useState } from "react";
import axios from "axios";

function AddProduct() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name: name,
            description: description,
            price: Number(price),
            quantity: Number(quantity)
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/products",
                product
            );

            console.log("Product added successfully:", response.data);

            alert("Product added successfully!");

            // Clear the form
            setName("");
            setDescription("");
            setPrice("");
            setQuantity("");

        } catch (error) {
            console.error("Error adding product:", error);

            if (error.response) {
                console.error("Status:", error.response.status);
                console.error("Response:", error.response.data);
            }

            alert("Failed to add product");
        }
    };

    return (
        <div>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Product Name:</label>
                    <br />

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Description:</label>
                    <br />

                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Price:</label>
                    <br />

                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Quantity:</label>
                    <br />

                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Enter quantity"
                        required
                    />
                </div>

                <br />

                <button type="submit">
                    Add Product
                </button>

            </form>
        </div>
    );
}

export default AddProduct;