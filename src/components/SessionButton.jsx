"use client";
import { signIn, useSession, signOut } from "next-auth/react";

const SessionButton = () => {
  const { data: session } = useSession();
  console.log(session);
  return session ? (
    <>
      <li
        onClick={() => signOut()}
        className="border-2 flex items-center mt-2 text-gray-400 text-sm hover:bg-[#111] transition-all border-[#111] rounded-md p-3 hover:cursor-pointer"
      >
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
            d="M16 12H8M16 12C16 11.2998 14.0057 9.99153 13.5 9.5M16 12C16 12.7002 14.0057 14.0085 13.5 14.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="ml-2">Sign out</p>
      </li>
      <li className="border-2 flex items-center mt-2 text-gray-400 text-sm hover:bg-[#111] transition-all border-[#111] rounded-md py-2 px-3 hover:cursor-pointer w-full">
        <img
          src={session.user.image}
          className="w-10 rounded-full object-cover"
          alt=""
        />
        <div className="ml-2 w-full truncate">
          <p title={session.user.name} className="truncate font-semibold">
            {session.user.name}
          </p>
          <p title={session.user.email} className="truncate text-xs">
            {session.user.email}
          </p>
        </div>
      </li>
    </>
  ) : (
    <li
      onClick={() => signIn()}
      className="border-2 flex items-center mt-2 text-gray-400 text-sm hover:bg-[#111] transition-all border-[#111] rounded-md p-3 hover:cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="15"
        height="15"
        color="156 163 175"
        fill="none"
      >
        <path
          d="M8 12H16M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <p className="ml-2">Sign in</p>
    </li>
  );
};

export default SessionButton;
