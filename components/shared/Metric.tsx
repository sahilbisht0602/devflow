import Image from "next/image";
import React from "react";

interface MetricProps {
  imageUrl: string;
  alt: string;
  values?: string;
  title: string;
  textStyles: string;
  href?: string;
  isAuthor?: boolean;
}
const Metric = ({
  imageUrl,
  alt,
  values,
  title,
  textStyles,
  href,
  isAuthor,
}: MetricProps) => {
  return (
    <div className="flex items-center gap-1 ">
      <Image
        src={imageUrl}
        alt={alt}
        width={15}
        height={15}
        className="invert-colors"
      />
      <p className={`small-medium flex gap-1 ${textStyles}`}>
        {values}
        <span className={`${isAuthor ? "max-sm:hidden" : ""}`}>{title}</span>
      </p>
    </div>
  );
};

export default Metric;
