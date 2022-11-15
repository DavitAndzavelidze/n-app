import DevicePile from "../assets/device-pile.png";
import TvVideo from "../assets/video-devices.mp4";

export default function WatchEver() {
  return (
    <>
      <div className="relative w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-[4rem] bg-black z-[-2] text-white border-b-stone-700 border-b-[8px] py-[3rem] overflow-x-hidden">
        <div className="w-[310px] md:w-[547px]">
          <h2 className="text-[32px] md:text-[56px] mt-[2rem] leading-[1.1] mb-[15px]">
            Watch everywhere.
          </h2>
          <p className="text-[18px] md:text-[26px]">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>
        <div className="relative">
          <div className="w-[360px] md:w-[530px]">
            <img src={DevicePile} alt="tv" />
          </div>
          <div className="absolute top-0 left-0 flex justify-center h-full w-full z-[-1]">
            <video
              autoPlay
              muted
              loop
              className="w-[230px] md:w-[340px] mb-[5rem] md:mb-[8rem]"
              src={TvVideo}
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
