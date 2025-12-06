import './add-item.css'

export default function AddItem() {

    return (
        <div className="add-item-page">

            <h2>Add New Product</h2>

            <form className="add-item-form">

                {/* Gender */}
                <label>Gender:</label>
                <select>
                    <option value="">--Select--</option>
                    <option value="men">Мъж</option>
                    <option value="women">Жена</option>
                    <option value="unisex">Унисекс</option>
                </select>

                {/* Category */}
                <label>Category:</label>
                <select>
                    <option value="">--Select--</option>
                    <option value="clothes">Дрехи</option>
                    <option value="pants">Панталони</option>
                    <option value="shoes">Обувки</option>
                </select>

                {/* Size */}
                <label>Size:</label>
                <select>
                    <option value="">--Select--</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>

                {/* Title */}
                <label>Product title:</label>
                <input type="text" placeholder="Име на продукта" />

                {/* Price */}
                <label>Price:</label>
                <input type="number" placeholder="Цена" />

                <button type="button">Add Product</button>
            </form>
        </div>
    )

}