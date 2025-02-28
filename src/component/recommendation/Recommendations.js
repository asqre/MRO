import React from "react";
import ProductCard from "../common/ProductCard";

const Recommendation = () => {
  return (
    <section
      id="collection"
      className="mt-[50px] lg:mt-[53px] w-full flex flex-col items-start justify-center gap-[32px]"
    >
      <h2 className="text-[22px] md:text-[24px] px-[5%] text-center lg:text-left">
        Recommended for you
      </h2>

      <div className="w-[100%] grid grid-cols-3 gap-1">
        <ProductCard
          productImages={[
            "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw728060bd/images/tile/8346891_1.jpeg",
          ]}
          brandName="Campus Funk"
          productBrand="Men's Running Shoes"
          price="1999"
          colors={["#ffffff", "#0000ff"]}
          sizes={["UK 7", "UK 8", "UK 9", "UK 10"]}
        />

        <ProductCard
          productImages={[
            "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw728060bd/images/tile/8346891_1.jpeg",
          ]}
          brandName="Campus Funk"
          productBrand="Men's Running Shoes"
          price="1999"
          colors={["#ffffff", "#0000ff"]}
          sizes={["UK 7", "UK 8", "UK 9", "UK 10"]}
        />

        <ProductCard
          productImages={[
            "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw728060bd/images/tile/8346891_1.jpeg",
          ]}
          brandName="Campus Funk"
          productBrand="Men's Running Shoes"
          price="1999"
          colors={["#ffffff", "#0000ff"]}
          sizes={["UK 7", "UK 8", "UK 9", "UK 10"]}
        />
      </div>
    </section>
  );
};

export default Recommendation;
