import Writer from "@/components/Writer";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-full flex justify-center items-center flex-1 bg-[#111]">
      <div className="w-3/4 h-screen flex flex-col justify-center py-20 px-10 rounded-sm">
        <div className="text-white text-7xl font-bold flex items-center">
          <h3 className="pr-4">Your</h3>
          <Writer />
        </div>
        <p className="text-gray-300 mt-2">
          Start keeping track of your day, your tasks, your notes. Organize
          yourself day by day, using the best web interface, performance and
          good use of frameworks. Get started now using the button below. 📝
        </p>
        <Link href="/new">
          <button className="border-2 mt-4 px-4 py-2 w-4/12 md:w-3/12 xl:w-2/12 rounded-lg text-white hover:bg-[#333]/80 transition-all">
            Start tasking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
