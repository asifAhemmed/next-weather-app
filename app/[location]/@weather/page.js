import WeatherComponent from "@/components/WeatherComponent";
import React from "react";

const WeatherPage = async ({ params, searchParams }) => {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <WeatherComponent lat={latitude} lon={longitude} />;
};

export default WeatherPage;
