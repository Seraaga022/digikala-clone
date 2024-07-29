import { useRef } from "react";
import "./assets/css-styles/main.css";
import PostStoriesJson from "./Stories.json";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Story } from "./components/Stories/types/StoriesT";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StoriesSlider = () => {
  const StoriesContainerSwiperRef = useRef<SwiperCore | null>(null);

  const StoriesContainerSwiperRightBtnHandler = () => {
    StoriesContainerSwiperRef?.current?.slideNext();
  };
  const StoriesContainerSwiperLeftBtnHandler = () => {
    StoriesContainerSwiperRef?.current?.slidePrev();
  };

  const StoriesJSON: Story = PostStoriesJson;

  return (
    <div className="itsSection1">
      {/* StoriesContainer slider */}
      <Swiper
        onSwiper={(swiper) => {
          StoriesContainerSwiperRef.current = swiper;
        }}
        slidesPerView={12.4}
        breakpoints={{
          // window width is >= N
          1300: {
            slidesPerView: 12.4,
          },
          1200: {
            slidesPerView: 11,
          },
          1100: {
            slidesPerView: 10,
          },
          900: {
            slidesPerView: 9,
          },
          800: {
            slidesPerView: 8,
          },
          700: {
            slidesPerView: 7,
          },
          600: {
            slidesPerView: 6,
          },
          450: {
            slidesPerView: 5,
          },
          400: {
            slidesPerView: 4,
          },
          300: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 3,
          },
        }}
        initialSlide={StoriesJSON.data.posts.length}
        className="commerces-slider"
        // onReachEnd={() => setIsActiveRightBtn(false)}
        // onReachBeginning={() => setIsActiveLeftBtn(false)}
        // onChange={() => {setIsActiveRightBtn(true); setIsActiveLeftBtn(true)}}
        navigation={{
          nextEl: ".i-container-right",
          prevEl: ".i-container-left",
        }}
      >
        {StoriesJSON.data.posts
          .slice()
          .reverse()
          .map((post, index: number) => (
            <SwiperSlide key={post.id}>
              <PostStory
                img={post.media[0]?.cover_medium}
                content={post.title}
                onClick={() => {
                  goToSlide(index);
                  setIsMuted(false);
                }}
              />
            </SwiperSlide>
          ))}

        {StoriesJSON.data.lives
          .slice()
          .reverse()
          .map((live: LiveStories) => (
            <SwiperSlide key={live.id}>
              <LiveStory
                img={live.cover}
                content={live.title}
                offer={live.badge_text}
              />
            </SwiperSlide>
          ))}

        <div className="story-Swiper-i-container-btn">
          <div
            className={`i-container-left`}
            onClick={StoriesContainerSwiperLeftBtnHandler}
          >
            <i className="fa-sharp fa-solid fa-chevron-left"></i>
          </div>

          <div
            className={`i-container-right`}
            onClick={StoriesContainerSwiperRightBtnHandler}
          >
            <i className="fa-sharp fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default StoriesSlider;
