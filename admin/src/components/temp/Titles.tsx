import React from "react";
import Image from "next/image";
import NavigateBack from "@/hooks/Navigate.back";

const Titles = ({
  title,
  styles,
  children,
  // home = true
}: {
  title: string;
  home?: boolean,
  styles?: React.CSSProperties;
  children?: React.ReactElement;
}) => {
  return (
    <div style={styles}>
      <div style={titleBox}>
        <NavigateBack styles={navigatorStyle}>
          <Image
            width={15}
            height={15}
            alt=""
            src="/icons/arrowLeftWhite.png"
          />
        </NavigateBack>
        <span style={textMessage}>{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

const navigatorStyle: React.CSSProperties = {
  maxHeight: "20px",
};
const titleBox: React.CSSProperties = {
  display: "flex",
  margin: "0 5px 10px 5px",
  alignItems: "flex-end",
};

const textMessage: React.CSSProperties = {
  fontSize: "110%",
  marginLeft: "15px",
};

export default Titles;
