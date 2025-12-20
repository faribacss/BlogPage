// import styles from "@/components/HeroSection/HeroSection.module.css";

// library
import { Clock, User } from "lucide-react";

// images
// import hero1 from "@/assets/img/hero1.png";
import hero2 from "@/assets/img/hero2.png";
// import hero3 from "@/assets/img/hero3.png";

export default function HeroSection() {
  return (
    <>
      <section
        className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        style={{ backgroundColor: "#4E6AA1" }}
      >
        <div className="max-w-7xl grid lg:grid-cols-2 m-auto gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block font-Popins animate-bounce px-3 py-1 bg-blue-100 text-blue-900 rounded-full mb-4">
              Share your thoughts
            </div>
            <h2
              className="mb-4 font-Popins text-5xl font-semibold"
              style={{ color: "#212122" }}
            >
              The Future of Remote Work: Adapting to the New Normal
            </h2>
            <p className="text-gray-800 mb-6">
              Explore how companies are reshaping their workplace strategies and
              what it means for the future of productivity, collaboration, and
              work-life balance in a distributed world.
            </p>
            <div
              className="flex items-center gap-6 mb-6"
              style={{ color: "#121212" }}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>1 min read</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={hero2}
              alt="Modern workspace"
              className="w-full h-[600px] object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}