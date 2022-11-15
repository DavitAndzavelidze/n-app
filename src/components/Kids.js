import KidsImg from "../assets/kids.png";

export default function Kids() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-black text-white gap-[4rem] border-b-stone-700 border-b-[8px] py-[3rem] overflow-x-hidden">
      <div className="">
        <img src={KidsImg} alt="kids" />
      </div>
      <div className="w-[310px] md:w-[650px] text-center md:text-left mt-[1rem] md:mt-[0px]">
        <h2 className="text-[28px] md:text-[56px] leading-[1.1] mb-[15px]">
          Create profiles for kids.
        </h2>
        <p className="text-[18px] md:text-[26px]">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
    </div>
  );
}
