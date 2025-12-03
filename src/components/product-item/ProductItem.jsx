import './product-item.css'

export default function ProductItem({
    img,
    title,
    price,
    onAddToCart
}) {

    return (
        // <>
        //     <div className="product-item">
        //         <img src={img} alt={title} />
        //         <div className="product-item-title-wrapper">
        //             <h3>{title}</h3>
        //             {/* <p>Боти с връзки</p> */}
        //             <p className="price">{price}</p>
        //         </div>
        //     </div>
        // </>
        <>
        <div className="image-wrapper">
            <div className="product-item">
                <div className="product-item-image-wrapper">
                    <img src={img} alt={title} />
                    <button 
                        className="add-to-cart-btn"
                        onClick={onAddToCart}
                    >
                        Добави в кошницата
                    </button>
                </div>
                <div className="product-item-title-wrapper">
                    <h3>{title}</h3>
                    <p className="price">{price}</p>
                </div>
            </div>
            </div>
        </>

    )

}