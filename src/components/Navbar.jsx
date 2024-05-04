import Link from "next/link";
import SessionButton from "./SessionButton";
import TaskList from "./TaskList";

const Navbar = async () => {
  return (
    <nav className=" bg-[#222] py-8 flex flex-col justify-between items-center px-6 textWhite h-screen w-4/12 lg:w-3/12 2xl:w-2/12">
      <div className="w-full flex flex-col items-center h-5/6">
        <Link className="font-semibold text-2xl text-white" href="/">
          <h3>🖋️ Tasking</h3>
        </Link>
        <div className="w-full mt-4 overflow-y-scroll pr-2 taskCardContainer">
          <TaskList />
        </div>
      </div>
      <ul className="flex flex-col w-full">
        <Link href="/">
          <li className="border-2 flex items-center text-gray-400 text-sm hover:bg-[#111] transition-all border-[#111] rounded-md p-3 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              color="156 163 175"
              fill="none"
            >
              <path
                d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-2">Home</p>
          </li>
        </Link>
        <Link href="/new">
          <li className="border-2 flex items-center mt-2 text-gray-400 text-sm hover:bg-[#111] transition-all border-[#111] rounded-md p-3 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              color="156 163 175"
              fill="none"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V16M16 12H8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-2">New</p>
          </li>
        </Link>
        <Link href="/about">
          <li className="border-2 flex items-center mt-2 text-gray-400 text-sm hover:bg-[#111] transition-all border-[#111] rounded-md p-3 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              color="156 163 175"
              fill="none"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.992 8H12.001"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-2">About</p>
          </li>
        </Link>
        <SessionButton />
      </ul>
    </nav>
  );
};

export default Navbar;
