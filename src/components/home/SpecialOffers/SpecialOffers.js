import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Toys" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="MIXCART Multicolor Sky Moon Star Master Dream Usb Led Night Light pack of 1"
          price="330.00"
          color="Multi"
          badge={true}
          des="Feature-this night light can use the usb or battery power supply it can control rotation and make lamp luminous or colorful light. So beautiful best gift for your kids they will be a good sleep at night for decorating wedding, birthday, parties. Great for romantic night lamp and decoration light use. Best for home, bedroom, children rooms. Very romantic night, full of sincere gift. Power by 4 x aaa battery not included or usb cable. Energy power saving and environmental friendly."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Jaiman Toys LEGO Technic Ferrari Daytona Sp3 42143 Building Kit (3,778 Pieces), Multi Color"
          price="48990.00"
          color="Red"
          badge={true}
          des="From the LEGO Technic Ultimate Car Concept series-The 4th addition to this series of supercar builds: a range of collectible models inspired by some of the world's most luxurious vehicles
          Designed in collaboration with Ferrari-Features include steering, a V12 engine, an 8-speed sequential gearbox with paddle shift, opening butterfly doors, a removable roof and shock absorbers
          A car gift for Ferrari fans -This buildable supercar model is designed for adult LEGO builders and Ferrari fans, offering a detailed building project with a display piece to admire
          Made for display -Includes a decorated display plate and a unique serial number to unlock special online rewards and content."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Rubela Kitchen Set Cooking Toy with Briefcase and Accessories, 26 PCS. Kitchen Playing Set"
          price="399.00"
          color="Mixed"
          badge={true}
          des="Rubela Presents Kitchen Set is all that the children need to cook in their own Pretend Play Kitchen Set. This Play Set gets the kids to involve themselves in playful activities that are highly beneficial to them and also Super Fun. It is the best Cooking Companion for all-day fun play. Children can pretend cooking with utensils which encourages their fine motor skills, role-playing, imaginative play and introduces the kids to daily household kitchen chores. Best Cooking Pretend Play Set for Active Role-Play and Super Fun-Filled Hours. This is the ultimate gift for every little boy or girl! Great for birthdays, name days and Christmas gift-giving, it will surely put an ear-to-ear smile on your kid’s face."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Zyamalox Little Toys Multicolor Plastic Electric Water Circulation with Music Light Go Fishing Game Board Play Set Toy - Pack of 21"
          price="₹1299.00"
          color="Multi"
          badge={true}
          des="Promotes hand and eye coordination. Creates a fun and interactive fishing experience for child. Add water to fishing board and activate the buttons, water will go into circular motion. Accompanied music and lighting. Water scoop for fishing. Fishing rod rotates 360 degrees. Promotes bonding time with child when playing in 2 persons mode. Beautiful waterproof stickers. Multiple accessories."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
