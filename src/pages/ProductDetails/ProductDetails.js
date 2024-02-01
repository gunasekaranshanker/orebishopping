import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (location.state && location.state.item) {
      setProductInfo(location.state.item);
      setPrevLocation(location.pathname);
    }
  }, [location]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        {productInfo && (
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
            <div className="xl:col-span-2">
              <img
                className="w-full h-auto object-cover"
                src={productInfo.img}
                alt={productInfo.name}
              />
            </div>
            <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
              <ProductInfo productInfo={productInfo} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
