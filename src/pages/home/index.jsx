// library
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

// styles
import styles from "@/pages/home/Home.module.css";
import "swiper/css";
import "swiper/css/navigation";

// components
import HomeArticles from "@/components/homeArticles";

// services
import { getPosts } from "@/services/posts";

function Home() {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await getPosts();
        if (!cancelled) {
          setPosts(data);
        }
      } catch (error) {
        console.error("Failed to load posts", error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.homeInfo}>
          <h4>{t("posts.description")}</h4>
        </div>
        <div className={styles.gridContainer}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={4}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper"
          >
            {posts.map((post) => (
              <SwiperSlide className="swiper-slide" key={post.id}>
                <HomeArticles {...post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Home;
