import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive ,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="Fashion" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Party Wear"
            price="440.00"
            color="Multi"
            badge={true}
            des="Party Dress: Dresses designed for parties and special events, usually featuring embellishments, lace, or satin materials."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Comfort Wear"
            price="250.00"
            color="Red"
            badge={true}
            des="Perfect for everyday wear, our dresses are comfortable and designed with the latest fashion trends in mind."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Dresses & Frocks"
            price="780.00"
            color="Mixed"
            badge={true}
            des="A lovely Frock dress in vibrant colours for your little girl. An adorable classic bow making a chic statement and stripes creating there own magic. Perfect dress to adorn for that day out.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="TENDSY"
            price="499.00"
            color="Mixed"
            badge={false}
            des="Stretchable & Shrinkage Resistant Fabric: The Baby Socks are made with cotton fabric keeping in mind the ultra-sensitive skin of babies in mind. These are breathable, sweat-resistant, and odorless."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive }
            productName="KIDIS LAND Stylish Printed Boys Winter Wear Kids Clothing Sets"
            price="499.00"
            color="Mixed"
            badge={false}
            des="Kidis Land Kids Unisex Tees Short Sets are a great choice for parents who want to make sure their children are comfortable wearing quality clothes. These Sets are perfect for children of all ages. They are made of premium quality cotton and polyester material and are vibrant, safe, and durable. Whether you are looking for your kid to wear something for school or for a special occasion, we have you covered in everything. We have a great collection for little champs."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
