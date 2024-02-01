import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Sports" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="DASH Victor Tricycle for Kids, Baby Cycle, Kids Cycle, Tricycle for Kids for 2 Years to 5 Years with Under Seat Storage, Light and Music"
          price="2649.00"
          color="Red"
          badge={true}
          des="Dash, an ISO 9001:2008 manufacturing organization, is India’s leading manufacturer of Baby Products like Baby Tricycles, Walkers, Cars, Scooters, Swings, Rockers etc. It lays utmost importance to the Quality right from the procurement of raw materials to the manufacturing of the final product. The company’s aim is to give world class products at competitive prices. Trendy Design This tricycle is one of the best products created by NHR with some high and good quality raw materials. This stylish and modern age scooter with sports bike looks is an ideal companion for your toddlers. An engine like structure installed under the seat gives a classy look. Back view mirrors reflect the images to let your kid feel like a real bike ride. Comfortable Ride Comfort and safety both are the elements we search for, in needed things especially if it is for the child. Such comfort your kids can experience while riding this cycle. It has a wide seat with a backrest to support their sensitive back. Twirled design on wheels gives a stable ride."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Jaspo Multicolor Outdoor Sports Combo Set"
          price="1889.00"
          // color="Gray"
          badge={false}
          des="Jaspo beach set comes with three combo up to 8 years, 8-12 years and 12 yrs and above. Beach set is best played on outdoor surfaces such as grass and sand. Better to play beach games. Suitable for kids, boys and girls. Encourages to playing indoor and outdoor sports. Beach set is applicable to play anywhere such as lawn, camping area, beach or backyard."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Tway Stylish Kids Sports shoes Black for Boys Casual Running Walking and Hikking shoes"
          price="979.00"
          color="Mixed"
          badge={true}
          des="Lightweight Daily wear shoes for Kids, Make your steps comfortable and Enter a new world of comfort with this pair of Sports Shoe, easy to wash at home, set your own fashion statement that make you stand out from the crowd, built to last, to provide comfort to the feet, Comfort Sole & Flexible Walk, you are buying a trust of best quality shoes in best low price with a friendly customer service."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Vector X Street Mania Hand Stitched Football (Size-5)"
          price="399.00"
          color="Black with white"
          badge={false}
          des="Outer Material : Rubber

          Size :5
          
          Diameter : 68cms
          
          Weight : 420-425grams
          
          Hand Stitched Football
          
          Pin is included in the package"
        />
      </div>
    </div>
  );
};

export default BestSellers;
