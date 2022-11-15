import TvBg from "../assets/tv.png";
import TvVideo from "../assets/videoTV.mp4";

export default function Card() {
  return (
    <>
      <div className="relative mt-[65vh] md:mt-[68vh] w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-[4rem] bg-black z-[-2] text-white  border-b-[8px] border-b-stone-700 pt-[5rem] md:pt-[0px] py-[3rem] overflow-x-hidden">
        <div className="w-[351px] md:w-[547px]">
          <h2 className="text-[32px] md:text-[56px] leading-[1.1] mb-[15px]">
            Enjoy on your TV.
          </h2>
          <p className="text-[18px] md:text-[26px]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
            Blue-ray, and more.
          </p>
        </div>
        <div className="relative">
          <div className="md:w-[530px] mt-[-3rem] md:mt-[0px] px-[10px] md:px-[0px]">
            <img src={TvBg} alt="tv" />
          </div>
          <div className="absolute top-0 left-0 flex justify-center h-full w-full z-[-1]">
            <video
              autoPlay
              muted
              loop
              className="md:w-[397px] w-[290px] mb-[3.6rem] md:mb-[10px]"
              src={TvVideo}
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
