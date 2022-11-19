import OfflineBg from "../assets/mobileBg.jpg";
import BoxShot from "../assets/boxshot.png";
import DownloadIcon from "../assets/download-icon.gif";

export default function offlineApp() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-black text-white md:gap-[4rem] border-b-stone-700 border-b-[8px] py-[3rem] overflow-x-hidden">
      <div className="relative flex flex-col justify-center items-center text-center mt-[1rem]">
        <img src={OfflineBg} alt="offlinebg" />
        <div className=" flex justify-between items-center py-[5px] md:py-[8px] px-[12px] bg-black border-2 border-stone-700 rounded-[10px] w-[280px] md:w-[380px] h-auto md:mb-[1.5rem] translate-y-[-5rem] md:translate-y-[-7rem] text-start">
          <img className="md:h-[72px] h-[52px]" src={BoxShot} alt="boxshop" />
          <div>
            <h3 className="font-bold">Stranger Things</h3>
            <p className="text-blue-700">Downloading...</p>
          </div>
          <img className="w-[48px]" src={DownloadIcon} alt="download icon" />
        </div>
      </div>
      <div className="w-[350px] md:w-[650px] text-center md:text-left">
        <h2 className="text-[32px] md:text-[56px] leading-[1.1] mb-[15px] mt-[2rem] md:mt-[0px]">
          Download your shows to watch offline
        </h2>
        <p className="text-[18px] md:text-[26px]">
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
}
