"use client";
import Card from "@/components/Card";
import { JackInTheBox } from "react-awesome-reveal";
interface Props {
  tagId: string;
}

const OurServices = ({ tagId }: Props) => {
  return (
    <section
      className="py-5 font-poppins bg-[#D6F9C6] h-fit w-screen glasss"
      id={tagId}
    >
      <h2 className="text-3xl lg:text-6xl font-bold text-green-900 px-2 border-green-900 z-10 mt-2 text-center leading-10 pt-16">
        Services
      </h2>
      <p className="text-sm text-left px-10 font-normal lg:px-4 lg:text-xl py-6 font-poppins lg:font-medium lg:text-center">
        Are you a pastoralist or a farmer? Then you are in the right place.{" "}
        <br /> We aim to bring you a digital platform that promotes the peaceful
        coexistence between <br />
        pastoralists and farmers by nullify resource conflict through the
        following features:
      </p>
      <div className=" mx-auto pt-3 grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-fit">
        <Card
          iconPath={"real-time-pasture-updates-icon.svg"}
          title="Real Time Pasture Updates"
          >
          <JackInTheBox>
          The app provides real-time updates on pasture availability by
          integrating data from satellite imagery and users can view interactive
          enable users to make informed decisions regarding livestock grazing
          locations, rotational grazing practices, and sustainable land
          maps showing current pasture conditions. These Real-time updates
          management, promoting optimal resource use and environmental
          conservation.
          </JackInTheBox>
        </Card>

        <Card iconPath={"weather-forecast-icon.svg"} title="Weather Forecasts">
          <JackInTheBox>
          Weather forecasting functionality in our app will provide users with
          accurate and up-to-date weather information for their specific
          geographical locations. Users can access hourly, daily, and weekly
          weather forecasts, including temperature, humidity, precipitation
          chances, wind speed, and UV index, among other relevant data points.
          </JackInTheBox>
        </Card>

        <Card
          iconPath={"track-animal-location-icon.svg"}
          title="Track Animal Location"
        >
          <JackInTheBox>
          GPS tracking functionality enables users to monitor and track the
          movement of their animals in real-time using GPS-enabled devices such
          as smartphones or dedicated GPS trackers attached to animals so as to
          improve grazing efficiency, preventing livestock loss or theft, and
          optimizing resource utilization based on animal movements and
          behavior.
          </JackInTheBox>
        </Card>

        <Card iconPath={"geoFencing.png"} title="Geofencing">
          <JackInTheBox>
          Our app empowers both farmers and pastoralists. Farmers can create
          virtual fences to receive alerts if cattle enter their land, ensuring
          crop protection and peace of mind. Pastoralists can view designated
          farm boundaries to plan grazing routes that avoid conflict and promote
          responsible land use, fostering a more harmonious relationship between
          both communities.
          </JackInTheBox>
        </Card>
      </div>
    </section>
  );
};

export default OurServices;
