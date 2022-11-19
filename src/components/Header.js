import HeaderBg from "../assets/heroBg.jpg";

export default function Header() {
  return (
    <>
      <div className="absolute top-0 left-0 z-[1] overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-[75vh] bg-black/60 shadow-[inset_0_98px_38px_-10px_rgba(0,0,0,0.7)]">
          <span className="after:content-[''] w-full h-full absolute shadow-[inset_0_-98px_38px_-10px_rgba(0,0,0,0.7)]"></span>
        </div>
        <img
          className="w-screen object-cover h-[75vh]"
          src={HeaderBg}
          alt="heroBg"
        />
        <div className="absolute top-0 left-0 w-full h-[75vh] text-white flex flex-col justify-center items-center border-b-stone-700 border-b-[8px]">
          <div className="w-[351px] md:w-[730px] text-center">
            <h1 className="text-[32px] md:text-[63px] leading-[1.1] mt-[5rem]">
              Unlimited movies, TV shows, and more.
            </h1>
            <h3 className="text-[18px] md:text-[26px] py-[16px]">
              Watch anywhere. Cancel anytime.
            </h3>
            <p className="w-[300px] md:w-[730px] mx-auto text-[18px] md:text-[19px] mb-[16px] mt-[5px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="flex flex-col md:flex-row relative">
            <div className="flex text-center w-full h-full items-center text-center">
              <input
                type="text"
                id="floating_filled"
                class="block h-[48px] w-[351px] md:h-[70px] md:w-[500px] pl-[10px] text-sm text-gray-900 appearance-none bg-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-[16px] md:text-[18px] text-stone-700/70 duration-300 transform -translate-y-4 scale-75 md:top-5 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 pointer-events-none peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-5"
              >
                Email address
              </label>
            </div>
            <div className="flex justify-center relative">
              <button className="bg-[#E50914] text-[#fff] w-[136px] md:w-[250px] pr-[12px] md:pr-[24px] text-[18px] py-[8px] md:text-[28px] mt-[1rem] md:mt-[0px]">
                Get Started
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="md:w-6 w-4 md:h-6 h-4 absolute top-0 md:right-0 ml-[7rem] md:mr-[20px] mt-[1.85rem] md:mt-[1.4rem]"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
