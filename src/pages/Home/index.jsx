import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import RecentPost from "@/pages/RecentPost";
import TrendPosts from "@/pages/TrendPosts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSection />
      <RecentPost page={currentPage} />
      <TrendPosts />

      <div className="flex justify-center mt-20">
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-xs"
        >
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon aria-hidden="true" className="size-5" />
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold cursor-pointer focus:z-20 ${
                currentPage === page
                  ? "z-10 border-t-3 text-gray-600 focus-visible:outline-2 focus-visible:outline-indigo-600"
                  : "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon aria-hidden="true" className="size-5" />
          </button>
        </nav>
      </div>
    </>
  );
}
