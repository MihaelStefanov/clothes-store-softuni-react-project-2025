import "./home.css";
import ProductItem from "../product-item/ProductItem";
import { Link } from "react-router";

export default function Home() {

    return (
        <>
            <div className="page-heading products-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>new arrivals</h4>
                                <h2>sixteen products</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="banner header-text">
                <div className="owl-banner owl-carousel">
                    <div className="banner-item-01">
                        <div className="text-content">
                            <h4>Best Offer</h4>
                            <h2>New Arrivals On Sale</h2>
                        </div>
                    </div>
                    <div className="banner-item-02">
                        <div className="text-content">
                            <h4>Flash Deals</h4>
                            <h2>Get your best products</h2>
                        </div>
                    </div>
                    <div className="banner-item-03">
                        <div className="text-content">
                            <h4>Last Minute</h4>
                            <h2>Grab last minute deals</h2>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="latest-products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Latest Products</h2>
                                <Link to="/products">
                                    view all products <i className="fa fa-angle-right" />
                                </Link>
                            </div>
                        </div>
                        <section className="products-wrapper">
                            <ProductItem img={'https://cdn.aboutstatic.com/file/images/bbc12ef63793ba68a2928f01004ae39b.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960'}
                                title={"Ботуши"}
                                price={`${330.25}$`}
                                onAddToCart={() => console.log('Добавено в кошницата')} />
                            <ProductItem
                                img="https://cdn.aboutstatic.com/file/images/ed2e2a83cf564ed4d3375bfe9f628a23.png?bg=F4F4F5&quality=75&trim=1&height=1067&width=800"
                                title="Продукт"
                                price="20 лв"
                                onAddToCart={() => console.log('Добавено в кошницата')}
                            />
                            <ProductItem img={'https://cdn.aboutstatic.com/file/images/ca5c2fecb92e016186c369777874794d.jpg?brightness=0.96&quality=75&trim=1&height=1067&width=800'}
                                title={"Ботуши"}
                                price={`${330.25}$`}
                                onAddToCart={() => console.log('Добавено в кошницата')} />
                            <ProductItem img={'https://cdn.aboutstatic.com/file/images/bbc12ef63793ba68a2928f01004ae39b.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960'}
                                title={"Ботуши"}
                                price={`${330.25}$`}
                                onAddToCart={() => console.log('Добавено в кошницата')} />
                            <ProductItem img={'https://cdn.aboutstatic.com/file/images/bbc12ef63793ba68a2928f01004ae39b.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960'}
                                title={"Ботуши"}
                                price={`${330.25}$`}
                                onAddToCart={() => console.log('Добавено в кошницата')} />
                            <ProductItem img={'https://cdn.aboutstatic.com/file/images/bbc12ef63793ba68a2928f01004ae39b.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960'}
                                title={"Ботуши"}
                                price={`${330.25}$`}
                                onAddToCart={() => console.log('Добавено в кошницата')} />
                        </section>
                    </div>

                </div>
            </div>

            {/* <div className="best-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>About Sixteen Clothing</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <h4>Looking for the best products?</h4>
                                <p>
                                    <a
                                        rel="nofollow"
                                        href="https://templatemo.com/tm-546-sixteen-clothing"
                                        target="_parent"
                                    >
                                        This template
                                    </a>{" "}
                                    is free to use for your business websites. However, you have no
                                    permission to redistribute the downloadable ZIP file on any
                                    template collection website.{" "}
                                    <a rel="nofollow" href="https://templatemo.com/contact">
                                        Contact us
                                    </a>{" "}
                                    for more info.
                                </p>
                                <ul className="featured-list">
                                    <li>
                                        <a href="#">Lorem ipsum dolor sit amet</a>
                                    </li>
                                    <li>
                                        <a href="#">Consectetur an adipisicing elit</a>
                                    </li>
                                    <li>
                                        <a href="#">It aquecorporis nulla aspernatur</a>
                                    </li>
                                    <li>
                                        <a href="#">Corporis, omnis doloremque</a>
                                    </li>
                                    <li>
                                        <a href="#">Non cum id reprehenderit</a>
                                    </li>
                                </ul>
                                <a href="about.html" className="filled-button">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="assets/images/feature-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-content">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h4>
                                            Creative &amp; Unique <em>Sixteen</em> Products
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Itaque corporis amet elite author nulla.
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="#" className="filled-button">
                                            Purchase Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}