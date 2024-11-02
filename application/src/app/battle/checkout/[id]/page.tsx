

import NavigateBack from "@/hooks/Navigate.back";
import Image from "next/image";
import React from "react";
// import styles from "./page.module.css";
import CheckOutDetails from "@/components/index/battles/checkout/CheckOutDetails";
import { getSingleBattle } from "@/api/battle";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const response: responseType<battleType> = await getSingleBattle(id);
  return (
    <div>
      <NavigateBack
        styles={{
          height: 15,
          display: "flex",
          margin: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            height={15}
            width={15}
            alt="back"
            src="/icons/arrowLeftWhite.png"
          />
          {/* <div style={{marginLeft: "10px"}}>Battle Royale [PURGATORY]</div> */}
        </div>
      </NavigateBack>
      {response.data ? (
        <CheckOutDetails battle={response.data} />
      ) : (
        <div>Battle Not Found</div>
      )}
    </div>
  );
};

export default page;
