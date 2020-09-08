import "./Home.css";

import Product from "../Product/Product";
import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__heroText">
          <h1>Watch movies and TV Shows</h1>
          <p>
            Enjoy exclusive Amazon Originals as well as popular movies and TV
            shows. Join Prime Video now for USD 5.99 per month. Cancel anytime.
          </p>
        </div>
      </div>
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1234561"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={3.5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="1234562"
          title="Lean Mastery Collection: 8 Manuscripts: Lean Six Sigma, Lean Startup, Lean Enterprise, Lean Analytics, Agile Project Management, Kanban, Scrum, Kaizen"
          price={24.95}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/51i82i9ms3L.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234563"
          title="UX for Lean Startups: Faster, Smarter User Experience Research and Design"
          price={19.89}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/61S2hTYDSYL._AC_UY218_.jpg"
        />
        <Product
          id="1234564"
          title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
          price={40.99}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg"
        />
        <Product
          id="1234565"
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display"
          price={519.99}
          rating={4.5}
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234566"
          title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox (STGX2000400)"
          price={121.99}
          rating={3.5}
          image="https://images-na.ssl-images-amazon.com/images/I/81R8OM9pGLL._AC_SL1500_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
