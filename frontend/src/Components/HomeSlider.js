import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomeSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://euraxess.ec.europa.eu/sites/default/files/news/farm_to_fork_ec.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/*01*/}
            <h3>A Greener Future</h3>
            {/* <p>Sustainable Farming Practices That Work</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.ecmag.com/images/default-source/articles/ea2c730c-275e-4d39-920c-019161533a44.tmb-art-detail.jpeg?sfvrsn=a7d1e2e5_3"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/*02*/}
            <h3>Revolutionizing Agriculture</h3>
            {/* <p>Growing More with Less</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/5e60f802a05fa52749946e5e/1619696819143-EF4KM7XYHST251O4OYST/agriculture-tech.jpg?format=1000w"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/*03*/}
            <h3>Exploring Smart Agriculture</h3>
            {/* <p>The Future of Farming is Here: Embrace Smart Agriculture</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.grantthornton.ie/globalassets/1.-member-firms/ireland/insights/2023/featured-banner/future-of-irish-food-featured-banner.jpg"
            alt="Forth slide"
          />
          <Carousel.Caption>
            {" "}
            {/*04*/}
            <h3>The Benefits of Smart Farming</h3>
            {/* <p>How Our Technology is Changing the Game</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mytechdecisions.com/wp-content/uploads/2019/05/AdobeStock_126414595-1000x500.jpeg"
            alt="Forth slide"
          />
          <Carousel.Caption>
            {" "}
            {/*05*/}
            <h3>Growing Smarter</h3>
            {/* <p>How Our Technology is Changing the Game</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br></br>
    </>
  );
}

export default HomeSlider;
