import AQIComponent from "@/components/AQIComponent";
import React from "react";

const AQIPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <AQIComponent lat={latitude} lon={longitude} />;
};

export default AQIPage;
