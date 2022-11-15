import logo from "../assets/Logo.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center mx-[20px] md:mx-[56px] pt-[25px] relative z-50 ">
        <div className="md:w-[164px] w-[80px] overflow-x-hidden">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <Menu as="div" className="relative inline-block text-center ">
            <div className="absolute top-0 left-0 w-[15px] md:w-[20px] h-full flex items-center ml-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                class="w-6 h-6"
              >
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>
            </div>
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-[2px] border bg-white pl-[25px] md:pl-[30px] pr-[6px] md:pr-[10px] md:py-2 py-[6px] text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 bg-gray-700/75">
                English
                <ChevronDownIcon
                  className="-mr-1 ml-1 md:ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-gray-700/80 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-white",
                          "block px-4 w-full py-2 text-sm"
                        )}
                      >
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-white",
                          "block px-4 w-full py-2 text-sm"
                        )}
                      >
                        Русский
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className="ml-[20px] py-[4px] px-[8px] md:py-[7px] md:px-[20px] bg-[#E50914] text-[#fff] rounded-[5px]">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
