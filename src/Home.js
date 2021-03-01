import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product
              id="001"
              title="Yamaha YDP103 Arius Series Piano with Bench, Black Walnut"
              price={899.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/612RQf%2BUHOL._AC_SL1500_.jpg"
            />
            <Product
              id="002"
              title="
OIEXI Video Camera 4K Camcorder Vlog Camera for YouTube, HD Digital Camera with 16X Digital Zoom and Night Vision, Video Recorder with Microphone (32GB SD..."
              price={179.95}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/717JyPHFdwL._AC_SL1500_.jpg"
            />
            <Product
              id="003"
              title="TORRAS Car Mount Wireless Charger [with QC 3.0 CAR Charger], Qi Fast Wireless Charging Phone Holder Mount Compatible for Samsung Galaxy S21/S20/S10/ Note..."
              price={45.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71qrQ4N8OsL._AC_SL1500_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="004"
              title="
HP Pavilion 27 Touch Desktop 1TB SSD Win 10 Pro (Intel 9th gen Processor with Six cores and Turbo to 3.40GHz, 16 GB RAM, 1 TB SSD, 27-inch FullHD IPS..."
              price={2399.00}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/41wOUQhYQCL._AC_.jpg"
            />
            <Product
              id="005"
              title="SAMSUNG 75 - inch Class QLED The Terrace Outdoor TV - 4K UHD Direct Full Array 16X Quantum HDR 32X Smart TV with Alexa Built -in (QN75LST7TAFXZA, 2020 Model)"
              price={5997.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81JOMSQY%2B-L._AC_SL1500_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="006"
              title="2021 Newest Lenovo ThinkBook 14s Yoga Laptop, 14.0 FHD IPS Touchscreen 300 nits, 11th Gen Intel i7-1165G7 (Beat i5-10400T), 24GB RAM, 1TB PCIe SSD,..."
              price={1049.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/612qYgEezsL._AC_SL1000_.jpg"
            />
            <Product
              id="007"
              title="Apple
New Apple Watch Series 6 (GPS, 44mm) - Space Gray Aluminum Case with Black"
              price={379.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71IocB4x93L._AC_SL1500_.jpg"
            />
            <Product
              id="008"
              title="Samsung Galaxy S21 Ultra 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 108MP High Res | 128GB, Phantom Silver (SM-G998UZSAXAA)"
              price={1199.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61bLefD79-L._AC_SL1020_.jpg"
            />
          </div>
        </div>
      </div>
    );
}

export default Home;
