"use client";

import axios from "axios";
import { Button } from "./ui/button";

const BuyButton = ({ productId }: { productId: string }) => {
  const checkOut = async () => {
    const checkoutUrl = await axios.post("/api/purchase", {
      productId: productId,
    });
    console.log(checkoutUrl, "checkour");

    window.open(checkoutUrl.data.data, "_blank");
  };

  return <Button onClick={checkOut}>Upgrade</Button>;
};

export default BuyButton;
