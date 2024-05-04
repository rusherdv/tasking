"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          settitle(data.title);
          setdescription(data.description);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = session.user.email;
    const res = await fetch(
      params.id ? `/api/tasks/${params.id}` : "/api/tasks",
      {
        method: params.id ? "PUT" : "POST",
        body: JSON.stringify({ title, description, email }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await res.json();
    router.refresh();
  };

  return (
    <div className="h-full flex justify-center items-center flex-1 bg-[#111]">
      <form
        className="w-3/4 h-screen py-20 px-10 rounded-sm"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Titulo"
          id="title"
          value={title}
          type="text"
          className="bg-transparent text-white mb-4 w-full text-4xl font-bold rounded-sm outline-none"
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          rows="3"
          id="description"
          spellCheck="false"
          value={description}
          placeholder="Escribe tu nota"
          className=" text-gray-300 h-5/6 bg-transparent mb-4 w-full rounded-sm outline-none resize-none"
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>

        <button
          type="submit"
          title="Save"
          className="w-10 h-10 bg-[#222] flex items-center justify-center rounded-full absolute right-5 bottom-5 hover:cursor-pointer hover:bg-[#444] transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M12 22C7.75736 22 5.63604 22 4.31802 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.31802 3.46447C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.46447C21 4.92893 21 7.28595 21 12C21 16.714 21 19.0711 19.682 20.5355C18.364 22 16.2426 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 2.5V9.82621C8 11.0733 8 11.6969 8.38642 11.9201C9.13473 12.3523 10.5384 10.9103 11.205 10.4761C11.5916 10.2243 11.7849 10.0984 12 10.0984C12.2151 10.0984 12.4084 10.2243 12.795 10.4761C13.4616 10.9103 14.8653 12.3523 15.6136 11.9201C16 11.6969 16 11.0733 16 9.82621V2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default NewPage;
