import { useState } from "react";
import "./styles.css";

const data = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR9.39 to EUR13.99 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    question: "How do I cancel?",
    answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.`,
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.`,
  },
  {
    question: "Why am I seeing this language?",
    answer: "Your browser preferences determine the language shown here.",
  },
];

export default function Faqs() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="bg-black w-full h-full flex flex-col justify-center items-center pt-[4rem] border-b-stone-700 border-b-[8px] pb-[4rem] overflow-x-hidden text-white">
      <h2 className="text-[26px] md:text-[56px] pb-[1rem]">
        Frequently Asked Questions
      </h2>
      <div className="w-full md:w-[815px] flex flex-col gap-[10px]">
        {data.map((item, i) => (
          <div className=" bg-[#303030] text-[26px] relative" key={i}>
            <div
              className="flex justify-between items-center cursor-pointer h-[48px] md:h-[75px] px-[20px] md:px-[40px]"
              onClick={() => toggle(i)}
            >
              <h2 className="text-[18px] md:text-[25px]">{item.question}</h2>
              <span>
                {selected === i ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:w-9 md:h-9 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:w-9 md:h-9 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                )}
              </span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <div className="devider"></div>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-white mx-[3rem] md:mx-[0px] text-center md:text-left md:text-[20px] pt-[2rem] pb-[1rem]">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="flex flex-col md:flex-row relative">
        <input
          type="text"
          id="floating_filled"
          class="block w-[320px] py-[10px] md:py-[0px] md:h-[70px] md:w-[500px] pl-[10px] text-sm text-gray-900 appearance-none bg-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_filled"
          class="absolute text-[12px] md:text-[18px] text-stone-700/70 duration-300 transform -translate-y-4 scale-75 md:top-5 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 pointer-events-none md:peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 md:peer-focus:-translate-y-4 peer-focus:-translate-y-0"
        >
          Email address
        </label>
        <div className="flex justify-center md:justify-left relative">
          <button className="bg-[#E50914] text-[#fff] md:w-[250px] pr-[24px] text-[18px] px-[10px] py-[5px] md:px-[0px] md:py-[0px] md:text-[28px] mt-[1rem] md:mt-[0px]">
            Get Started
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-4 h-4 md:w-6 md:h-6 absolute top-0 md:right-0 md:mr-[20px] ml-[7rem] h-[100%] mt-[.5rem] md:mt-[1.4rem] mr-[10px]"
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
  );
}

// export default function App() {
//   return (
//     <>
//       <div className="bg-black w-full h-full flex flex-col justify-center items-center pt-[4rem] border-b-stone-700 border-b-[8px] pb-[4rem] overflow-x-hidden">
//         <h2 className="text-white text-[26px] md:text-[56px] pb-[1rem]">
//           Frequently Asked Questions
//         </h2>
//         <div className="w-full md:w-[815px]">
//           <Faq data={data} styles={styles} config={config} />
//         </div>
//         <h3 className="text-white mx-[3rem] md:mx-[0px] text-center md:text-left md:text-[20px] pt-[2rem] pb-[1rem]">
//           Ready to watch? Enter your email to create or restart your membership.
//         </h3>
//         <div className="flex flex-col md:flex-row">
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="w-[320px] py-[10px] md:py-[0px] md:h-[70px] md:w-[500px] pl-[10px] focus:outline-none"
//             placeholder="Email address"
//           />
//           <div className="flex justify-center md:justify-left relative">
//             <button className="bg-[#E50914] text-[#fff] md:w-[250px] pr-[24px] text-[18px] px-[10px] py-[5px] md:px-[0px] md:py-[0px] md:text-[28px] mt-[1rem] md:mt-[0px]">
//               Get Started
//             </button>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="white"
//               className="w-4 h-4 md:w-6 md:h-6 absolute top-0 md:right-0 md:mr-[20px] ml-[7rem] h-[100%] mt-[.5rem] md:mt-[1.4rem] mr-[10px]"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
