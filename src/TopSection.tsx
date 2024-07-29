import React, { useRef } from "react";
import PostStoriesJson from "./Stories.json";
import IO from "./IncredibleOffers.json";
import "./assets/css-styles/main.css";
import ReactPlayer from "react-player";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type PST = {
  onClick: React.MouseEventHandler<HTMLElement>;
  img: string;
  offer?: string;
  content: string;
};
type LST = {
  img: string;
  offer?: string;
  content: string;
};
const PostStory: React.FC<PST> = ({ onClick, img, offer, content }) => {
  return (
    <>
      <div
        className={"commerces__stuff"}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={onClick}
      >
        <div className="commerces__img__holder rounded">
          <div className="commerces__img__lable">
            <img
              src={img}
              alt=""
              className={
                offer && offer === "زنده"
                  ? "commerces__img-IL"
                  : "commerces__img-NL"
              }
            ></img>
          </div>
          {offer && offer !== null && (
            <div
              className={
                offer && offer === "زنده"
                  ? "commerces__img__offer-NL rounded"
                  : "commerces__img__offer-IL rounded"
              }
            >
              {offer && offer}
            </div>
          )}
        </div>
        <div className="commerces__content">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};
const LiveStory: React.FC<LST> = ({ img, offer, content }) => {
  return (
    <>
      <div
        className={"commerces__stuff"}
        // data-bs-toggle="modal"
        // data-bs-target="#staticBackdrop"
      >
        <div className="commerces__img__holder rounded">
          <div className="commerces__img__lable">
            <img
              src={img}
              alt=""
              className={
                offer && offer === "زنده"
                  ? "commerces__img-IL"
                  : "commerces__img-NL"
              }
            ></img>
          </div>
          {offer && offer !== null && (
            <div
              className={
                offer && offer === "زنده"
                  ? "commerces__img__offer-NL rounded"
                  : "commerces__img__offer-IL rounded"
              }
            >
              {offer && offer}
            </div>
          )}
        </div>
        <div className="commerces__content">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

type LiveStories = {
  id: string;
  title: string;
  description?: string;
  slug: string;
  cover: string;
  start_time: string;
  status: string;
  persian_calendar: string;
  is_approve: boolean;
  user: {
    username: string;
    bio?: string;
    photo: string;
    name: string;
    followings_count: number;
    followers_count: number;
    share_url: string;
    is_blocked: boolean;
    is_following: boolean;
    id: string;
  };
  link: string;
  badge_text: string;
  circle_cover: string;
};
type PostStoriesPriceExistsT = {
  selling_price: number;
  rrp_price: number;
  discount_percent: number;
};
type PostStoriesPriceDosntExistsT = {
  selling_price: number;
  rrp_price: number;
};
type PostStoriesPriceT = PostStoriesPriceExistsT | PostStoriesPriceDosntExistsT;
type PostProductsT = {
  id: number;
  title_fa: string;
  images: {
    main: string;
  };
  price: PostStoriesPriceT | never[];
};
type PostStories = {
  id: string;
  title: string;
  caption?: string;
  type: string;
  status: string;
  category_ids: number[];
  tag_ids?: number[];
  user_setting_id: number;
  related_product_ids: number[];
  likes_count: number;
  comments_count: number;
  created_at: string;
  author: {
    id: string;
    username: string;
    photo: string;
  };
  media: {
    id: number;
    status: string;
    type: string;
    url: string;
    ratio: number;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
  }[];
  tags?: { id: number; title: string }[];
  products: PostProductsT[];
  circle_cover: string;
};
type Story = {
  status: number;
  data: {
    lives: LiveStories[];
    posts: PostStories[];
  };
};
const StoriesJSON: Story = PostStoriesJson;

type IncredibleOffersTypeDefin = {
  img: string;
  content: string;
  discount: number;
  price: number;
  DPrice: number;
};
type IncredibleOffersT = {
  IO: IncredibleOffersTypeDefin[];
};
const IncredibleOfferJson: IncredibleOffersT = IO;

const Top = () => {
  const StoriesContainerSwiperRef = React.useRef<SwiperCore | null>(null);
  const HeroSwiperRef = useRef<SwiperCore | null>(null);
  const swiperRefStory = useRef<SwiperCore | null>(null);
  const StoryProductRef = useRef<SwiperCore | null>(null);
  const IncredibleOfferRef = useRef<SwiperCore | null>(null);

  const [played, setPlayed] = React.useState(0);
  const [isMuted, setIsMuted] = React.useState(false);
  const [Liked, setLiked] = React.useState(false);
  const [Commented, setCommented] = React.useState(false);
  const [videoDuration, setVideoDuration] = React.useState(0);
  // console.log(videoDuration);
  const playerRef = useRef<ReactPlayer>(null);
  const [playingIndex, setPlayingIndex] = React.useState<number | null>(null);

  // Incredible Offer ( Beginning | End )
  const [IOB, setIOB] = React.useState(true);
  const [IOE, setIOE] = React.useState(false);

  const StoriesContainerSwiperRightBtnHandler = () => {
    StoriesContainerSwiperRef?.current?.slideNext();
  };
  const StoriesContainerSwiperLeftBtnHandler = () => {
    StoriesContainerSwiperRef?.current?.slidePrev();
  };

  const IncredibleOfferSwiperRightBtnHandler = () => {
    IncredibleOfferRef?.current?.slideNext();
  };
  const IncredibleOfferSwiperLeftBtnHandler = () => {
    IncredibleOfferRef?.current?.slidePrev();
  };

  const HeroSwiperRightBtnHandler = () => {
    HeroSwiperRef?.current?.slideNext();
  };
  const HeroSwiperLeftBtnHandler = () => {
    HeroSwiperRef?.current?.slidePrev();
  };

  const StoryDialogSwiperRbtn = () => {
    if (swiperRefStory.current) {
      swiperRefStory.current.slideNext();
      const totalSlides = swiperRefStory.current.slides.length;
      const currentSwiperIndex = swiperRefStory.current.activeIndex;
      const targetIndex = totalSlides - 1 - currentSwiperIndex;
      setPlayingIndex(targetIndex);
    }
  };
  const StoryDialogSwiperLbtn = () => {
    if (swiperRefStory.current) {
      swiperRefStory.current.slidePrev();
      const totalSlides = swiperRefStory.current.slides.length;
      const currentSwiperIndex = swiperRefStory.current.activeIndex;
      const targetIndex = totalSlides - 1 - currentSwiperIndex;
      setPlayingIndex(targetIndex);
    }
  };
  const goToSlide = (index: number) => {
    if (swiperRefStory.current) {
      const totalSlides = swiperRefStory.current.slides.length;
      const targetIndex = totalSlides - 1 - index;
      swiperRefStory.current.slideTo(targetIndex);
      setPlayingIndex(index);
      // togglePlayPause();
    }
  };
  const formatTime = () => {
    const minutes = Math.floor(videoDuration / 60);
    const remainingSeconds = Math.round(videoDuration % 60);
    // mm:ss
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };
  const backToMainTrigre = () => {
    setIsMuted(true);
    setPlayingIndex(null);
  };

  // const [StoryDialogSliderEnd, setStoryDialogSliderEnd] = React.useState(false);
  // const [StoryDialogSliderBeginning, setStoryDialogSliderBeginning] =
  // React.useState(false);
  type StoryDialogType = {
    UserName: string;
    UserImage: string;
    Title: string;
    Caption?: string;
    LikeCount: number;
    CommentCount: number;
    StoryPoster: string;
    VideoUrl: string;
    Products: PostProductsT[];
    currentIndex: number;
    // RelatedProductsIds: number[];
  };
  const StoryDialog: React.FC<StoryDialogType> = (props) => {
    // selling_price
    const StoryPoster = props.StoryPoster;

    // TODO
    React.useMemo(() => {
      props.VideoUrl;
    }, [props.VideoUrl]);

    return (
      <div
        className={`modal-dialog border-none shadow-none relative w-[350px] grid place-content-center`}
      >
        {/* StoryPlayer section */}
        <div className={`video__section absolute w-full h-[600px]`}>
          <ReactPlayer
            ref={playerRef}
            url={props.VideoUrl}
            // shuldSetUrl={false}
            width={350}
            height={600}
            playing={props.currentIndex === playingIndex}
            controls={false}
            volume={isMuted ? 0 : 100}
            onPlay={() => setPlayingIndex(props.currentIndex)}
            onStart={() => setPlayingIndex(props.currentIndex)}
            onPause={() => setPlayingIndex(null)}
            onProgress={(state) => setPlayed(state.played / videoDuration)}
            onDuration={setVideoDuration}
            onReady={() => console.log(videoDuration)}
            config={{
              file: {
                attributes: {
                  // preload: "metadata", // or 'auto'
                  poster: { StoryPoster },
                },
              },
            }}
            className="absolute bottom-0"
          />
        </div>
        {/* OnVideoStuff section */}
        <div
          className={`storyContent__intire__section modal-content rounded-none w-[100vw] h-[100vh] xl:w-[360px] xl:h-[680px] border-none shadow-none`}
        >
          {/* StoryDialog buttons section */}
          <div className="PandNbuttonContainer hidden xl:block">
            <div
              className={`i-container-Story-left`}
              onClick={StoryDialogSwiperRbtn}
            >
              <i className="fa-sharp fa-solid fa-chevron-left"></i>
            </div>
            <div
              className={`i-container-Story-right`}
              onClick={StoryDialogSwiperLbtn}
            >
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div className="story__display flex justify-space-between h-[100%]">
            <div className="onVideo w-full">
              <div className="display__top h-[80px] w-full">
                <div className="author__section">
                  <div className="author__follow">
                    <button>
                      <strong>دنبال کن</strong>
                    </button>
                  </div>
                  <div className="author__name">
                    <h5>
                      <strong>{props.UserName}</strong>
                    </h5>
                  </div>
                  <div className="author__img">
                    <div className="mx-2 w-[40px] h-[40px] flex justify-center align-center">
                      <img
                        alt=""
                        className="rounded-full"
                        src={props.UserImage}
                      />
                    </div>
                  </div>
                  <div className="back_to_main">
                    <div
                      className="btn border-none"
                      onClick={backToMainTrigre}
                      data-bs-dismiss="modal"
                    >
                      <i className="fa-sharp fa-regular fa-arrow-left fa-flip-horizontal"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => (isMuted ? setIsMuted(false) : setIsMuted(true))}
                // onClick={handleVolumeChange}
                className="middle muting modal-body w-full h-96 flex justify-center align-items-center"
              >
                {/* muting button */}
                <span className="text-6xl text-white cursor-default">
                  {isMuted && <i className="fa-regular fa-volume-slash"></i>}
                </span>
              </div>
              <div className="bottom absolute w-full p-0 bottom-0 modal-body">
                <div className="__like&comment_title&discription__ flex p-3 w-full text-white">
                  <div
                    className="_like&comment_ w-[10%]"
                    // onClick={() =>
                    //   isMuted ? setIsMuted(false) : setIsMuted(true)
                    // }
                  >
                    <div className="like_section flex flex-col justify-center">
                      <button
                        onClick={() => {
                          setLiked(!Liked);
                        }}
                        className="flex justify-center outline-none"
                      >
                        <i
                          className={`text-2xl transition-all fa-${
                            Liked ? `solid text-red-500` : `regular`
                          } fa-heart`}
                        ></i>
                        <span className="hidden">.</span>
                      </button>
                      <span className="flex justify-center">
                        {props.LikeCount}
                      </span>
                    </div>
                    <div className="comment_section mt-3">
                      <div className="conetent flex flex-col justify-center">
                        <button
                          onClick={() => {
                            setCommented(!Commented);
                          }}
                          className="flex justify-center outline-none"
                        >
                          <i
                            className={`text-2xl transition-all fa-${
                              Commented ? `solid text-white` : `regular`
                            } fa-message`}
                          ></i>
                          <span className="hidden">.</span>
                        </button>
                        <span className="flex justify-center">
                          {props.CommentCount}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="_title&caption_ w-[90%] flex flex-col px-2 justify-end text-right">
                    <span className="text-right text-md rtl:mx-2">
                      {props.Title}
                    </span>
                    <span className="text-md opacity-85 rtl:mx-2 line-clamp-2">
                      {props.Caption}
                    </span>
                  </div>
                </div>
                <div className="video_play_control flex align-items-center w-full p-3 text-white">
                  <div className="time w-[20%] flex justify-center align-items-center">
                    {formatTime()}
                  </div>
                  <div className="video__progress w-[80%] flex justify-center align-items-center">
                    <input
                      type="range"
                      placeholder="."
                      min={0}
                      max={videoDuration || 1}
                      step="any"
                      value={played * videoDuration}
                      onChange={(e) =>
                        playerRef?.current?.seekTo(
                          parseFloat(e.target.value) / videoDuration
                        )
                      }
                      className="Story-video-progress w-full"
                    />
                  </div>
                </div>
                {/* product section */}
                <Swiper
                  className="StoryProductSlider p-3 pb-2"
                  onSwiper={(swiper) => {
                    StoryProductRef.current = swiper;
                  }}
                  slidesPerView={1.26}
                  // speed={100000}
                  dir="rtl"
                  touchReleaseOnEdges={false}
                  mousewheel={true}
                >
                  <div className="product__section w-full flex">
                    {props.Products.map((product) => (
                      <SwiperSlide key={product.id}>
                        <div
                          className={`product cursor-pointer bg-white flex w-[250px] h-[68px] rounded-3`}
                        >
                          <div className="product__img p-1 w-[30%] h-full">
                            <img
                              className="bg-contain w-full h-full rounded-r-md"
                              alt="product"
                              src={product.images.main}
                            />
                          </div>
                          <div
                            className={`product__title w-[73%] h-full rtl:pt-[10px] text-right`}
                          >
                            <span className="line-clamp-2 rtl:mr-2 ml-1 text-[13px] font-bold">
                              {product.title_fa}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="content mt-3">
      {/* StoriesContainer section */}
      <div className="itsSection1 container-xxl">
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
            .map((post: PostStories, index: number) => (
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
      {/* HeroSlider section */}
      <div className="itsSection2">
        <div className="main-slider-lable group/heroSlider relative container-xxl">
          {/* HeroSlider */}
          <Swiper
            // className="main-slider container-xxl"
            className="main-slider absolute right-[-100px] left-[-100px]"
            onSwiper={(swiper) => {
              HeroSwiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            slidesPerView={1}
            // initialSlide={TMSs}
            // autoplay={{ delay: 5000, reverseDirection: true }}
            dir="rtl"
            autoplay={{ delay: 5000 }}
            pagination={{
              // el: ".heroSwiper-pagination",
              clickable: true,
              // renderBullet: CustomeHeroSwiperPaginationBullets,
              // bulletClass: ".heroSwiper-pagination-bullet",
              // bulletActiveClass: ".heroSwiper-pagination-bullet-active",
            }}
            navigation={{
              nextEl: ".i-container-mainSlider-right",
              prevEl: ".i-container-mainSlider-left",
            }}
          >
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO22">
                <img
                  src="/images/slider/slider_20.jpg"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO23">
                <img
                  src="/images/slider/slider_22.jpg"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO24">
                <img
                  src="/images/slider/slider_23.jpg"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO25">
                <img
                  src="/images/slider/slider_24.jpg"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO26">
                <img
                  src="/images/slider/slider_25.gif"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO27">
                <img
                  src="/images/slider/slider_26.jpg"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO28">
                <img
                  src="/images/slider/slider_27.jpg"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO29">
                <img
                  src="/images/slider/slider_28.jpg"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO30">
                <img
                  src="/images/slider/slider_29.jpg"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a title="@" href="someProductCommercialNO31">
                <img
                  src="/images/slider/slider_30.gif"
                  alt=""
                  className="main-slider-img"
                />
              </a>
            </SwiperSlide>

            {/* <div className="heroSwiper-pagination-container"> */}
            <span className="heroSwiper-pagination"></span>
            {/* </div> */}
            {/* < swiper buttons start > */}
            <div
              className="i-container-mainSlider-left hidden group-hover/heroSlider:grid"
              onClick={HeroSwiperLeftBtnHandler}
            >
              <i className="fa-sharp fa-solid fa-chevron-left"></i>
            </div>
            <div
              className="i-container-mainSlider-right hidden group-hover/heroSlider:grid"
              onClick={HeroSwiperRightBtnHandler}
            >
              <i className="fa-sharp fa-solid fa-chevron-right"></i>
            </div>
          </Swiper>
        </div>
      </div>
      {/* intire modal section */}
      <div
        className={`modal`}
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <Swiper
          // onSlideChange={() => StoryDialogSliderBtnVisibHandler}
          // onReachBeginning={() => setStoryDialogSliderBeginning(true)}
          // onReachEnd={() => setStoryDialogSliderEnd(true)}
          className="storySlider"
          onSwiper={(swiper) => {
            swiperRefStory.current = swiper;
          }}
          allowTouchMove={false}
          speed={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".i-container-Story-right",
            prevEl: ".i-container-Story-left",
          }}
        >
          {StoriesJSON.data.posts.map((post: PostStories, index: number) => (
            <SwiperSlide key={post.id}>
              <StoryDialog
                currentIndex={StoriesJSON.data.posts.length - 1 - index}
                UserName={post.author.username}
                UserImage={post.author.photo}
                CommentCount={post.comments_count}
                LikeCount={post.likes_count}
                Products={post.products}
                Title={post.title}
                StoryPoster={post.media[0].cover_big}
                VideoUrl={post.media[0].url}
                Caption={post.caption}
                // RelatedProductsIds={post.related_product_ids}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* section 3 */}
      <div className="itsSection3 mt-[16px]">
        <div className="promotes-label container-3xl-w">
          <div className="promotes lg:flex lg:justify-around flex-wrap grid grid-cols-4">
            <button
              onClick={() => console.log("more")}
              className="lg:w-[145px] mx-0 h-[100px] flex flex-col justify-center align-items-center"
            >
              <i
                className="fa-duotone fa-circle-ellipsis text-5xl"
                style={{
                  "--fa-primary-color": "#a8acb3",
                  "--fa-secondary-color": "#d1d3d6",
                }}
              ></i>
              <span className="w-[100%] text-center">بیشتر</span>
            </button>
            <a
              href="promot1"
              className="lg:w-[145px] mx-0 h-[100px] flex flex-col justify-center align-items-center "
            >
              <img
                src="/images/offers/seven.jpg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <span className="mt-2 rtl:font-semibold w-full text-center text-xs font-bold">
                ضد آفتاب بگیر
              </span>
            </a>
            <a
              href="promot2"
              className="lg:w-[145px] mx-0 h-[100px] flex flex-col justify-center align-items-center "
            >
              <img
                src="/images/offers/six.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <span className="mt-2 rtl:font-semibold w-full text-center text-xs font-bold">
                سوپر مارکت پر تخفیف
              </span>
            </a>
            <a
              href="promot3"
              className="lg:w-[145px] mx-0 h-[100px] flex flex-col justify-center align-items-center "
            >
              <img
                src="/images/offers/five.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <span className="mt-2 rtl:font-semibold w-full text-center text-xs font-bold">
                پیشنهادهای اقتصادی
              </span>
            </a>
            <a
              href="promot4"
              className="lg:w-[145px] mx-0 h-[100px] flex flex-col justify-center align-items-center "
            >
              <img
                src="/images/offers/four.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <span className="mt-2 rtl:font-semibold w-full text-center text-xs font-bold">
                موبایل کارکرده
              </span>
            </a>
            <a
              href="promot5"
              className="lg:w-[145px] mx-0 h-[100px] flex flex-col justify-center align-items-center "
            >
              <img
                src="/images/offers/three.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <span className="mt-2 rtl:font-semibold w-full text-center text-xs font-bold">
                تخفیف پلاس ٪۷۰
              </span>
            </a>
            <a
              href="promot6"
              className="lg:w-[145px] mx-0 h-[100px] flex flex-col justify-center align-items-center "
            >
              <img
                src="/images/offers/two.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <span className="mt-2 rtl:font-semibold w-full text-center text-xs font-bold">
                دیجی‌پی
              </span>
            </a>
            <a
              href="promot7"
              className="lg:w-[145px] mx-0 h-[100px] flex flex-col justify-center align-items-center "
            >
              <img
                src="/images/offers/one.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <span className="mt-2 rtl:font-semibold w-full text-center text-xs font-bold">
                دیجی‌کالا جت
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* incredible offeres section */}
      <div className="itsSection4 mt-[30px] container-xxl md:w-auto">
        <div className="rounded-2xl h-[300px] bg-red-500 flex align-items-center">
          <Swiper
            onSwiper={(swiper) => {
              IncredibleOfferRef.current = swiper;
            }}
            onSlideChange={() => {
              setIOB(false);
              setIOE(false);
            }}
            onReachBeginning={() => setIOB(true)}
            onReachEnd={() => setIOE(true)}
            dir="rtl"
            slidesPerView={7.1}
            breakpoints={{
              // window width is >= N
              1800: {
                slidesPerView: 1,
              },
              //   800: {
              //     slidesPerView: 8,
              //   },
              //   700: {
              //     slidesPerView: 7,
              //   },
              //   600: {
              //     slidesPerView: 6,
              //   },
              //   450: {
              //     slidesPerView: 5,
              //   },
              //   400: {
              //     slidesPerView: 4,
              //   },
              //   300: {
              //     slidesPerView: 3,
              //   },
              //   0: {
              //     slidesPerView: 3,
              //   },
            }}
            spaceBetween={4}
            mousewheel={true}
            onWheel={() => IncredibleOfferRef?.current?.slideNext()}
            navigation={{
              nextEl: ".incredible-offer-container-right",
              prevEl: ".incredible-offer-container-left",
            }}
            className="w-[900px] lg:w-[1200px] xl:w-[1336px] pl-[18px] pr-[18px]"
          >
            {/* first slide */}
            <SwiperSlide className={`w-[160px] h-[270px] hidden lg:block`}>
              <a href="@" className="flex flex-col h-full">
                <div className="w-full h-[38%] flex justify-center align-items-center">
                  <img
                    src="/images/IncredibleOffers/firstSlide/Amazings.svg"
                    alt=""
                    className="w-[90%] h-[90%]"
                  />
                </div>
                <div className="w-full h-[20%] flex justify-center align-items-center">
                  <div className="w-[30px] h-[30px] bg-white flex justify-center align-items-center rounded-[5px] text-[#393a60]">
                    60
                  </div>
                  <span className="font-bold text-white text-md mx-[1px]">
                    :
                  </span>
                  <div className="w-[30px] h-[30px] bg-white flex justify-center align-items-center rounded-[5px] text-[#393a60]">
                    12
                  </div>
                  <span className="font-bold text-white text-md mx-[1px]">
                    :
                  </span>
                  <div className="w-[30px] h-[30px] bg-white flex justify-center align-items-center rounded-[5px] text-[#393a60]">
                    12
                  </div>
                </div>
                <div className="w-full h-[30%] flex flex-col align-items-center">
                  <img
                    src="/images/IncredibleOffers/firstSlide/Amazing.svg"
                    alt=""
                  />
                  <a
                    href="@"
                    className="w-full text-center text-white font-sans"
                  >
                    مشاهده همه {`>`}
                  </a>
                </div>
              </a>
            </SwiperSlide>

            {IncredibleOfferJson.IO.map((offer, index: number) => (
              <SwiperSlide
                key={index}
                className={`bg-white w-[200px] h-[270px] ${
                  index === 0 && `rounded-tr-xl rounded-br-xl`
                }`}
              >
                <a
                  href={offer.content}
                  className={`flex flex-col w-full h-full bg-white ${
                    index === 0 && `rounded-tr-xl rounded-br-xl`
                  }`}
                >
                  <div
                    className={`w-full h-[55%] flex justify-center align-items-center ${
                      index === 0 && `rounded-tr-xl`
                    }`}
                  >
                    <div className="w-[85%] h-[85%] flex justify-center align-items-center">
                      <div className="p-2">
                        <img src={offer.img} alt="" className="bg-cover" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-full h-[42%] flex flex-col ${
                      index === 0 && `rounded-br-xl`
                    }`}
                  >
                    <div className="w-full h-[45%] py-2 rtl:pr-3 pl-4 line-clamp-2 text-[13px]">
                      <span className="">{offer.content}</span>
                    </div>
                    <div className="w-full h-[65%] flex flex-col">
                      <div className="h-[55%] w-full flex">
                        <div className="flex justify-center place-items-center w-[30%]">
                          <div className="bg-red-500 grid place-items-cente place-content-center rounded-full">
                            <span className="w-full h-full pt-[1px] pb-[4px] px-2 text-xs font-semibold text-white">
                              {offer.discount}%
                            </span>
                          </div>
                        </div>
                        <div className="w-[70%] flex align-items-center justify-end">
                          <span className="rtl:ml-1 text-md font-mono">
                            {offer.DPrice.toLocaleString()}
                          </span>
                          <span className="ml-1 text-xs font-semibold">
                            توما
                          </span>
                        </div>
                      </div>
                      <div className="h-[45%] w-full flex justify-end align-items-start pl-8">
                        <span className="line-through text-[12px] font-mono text-slate-400 opacity-80">
                          {offer.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}

            <SwiperSlide
              content=""
              className="bg-white w-[200px] h-[270px] rounded-tl-xl rounded-bl-xl"
            >
              <div className="flex justify-center align-items-center w-full h-full">
                <a
                  href="@"
                  className="w-[100px] h-[100px] flex flex-col align-items-center justify-center"
                >
                  <span className="rounded-full w-[60px] border-[#19bfd3] border-[3px] h-[60px] grid place-items-center place-content-center">
                    <i className="text-2xl text-[#19bfd3] fa-sharp fa-solid fa-arrow-left"></i>
                  </span>
                  <span className="text-[#393a60] mt-[15px]">مشاهده همه</span>
                </a>
              </div>
            </SwiperSlide>

            <div className="incredible-offer-Swiper-btn-container top-0 right-0 left-0 absolute flex align-items-center px-2">
              <div
                className={`incredible-offer-container-left ${
                  IOB ? `invisible` : `visible`
                }`}
                onClick={IncredibleOfferSwiperLeftBtnHandler}
              >
                <i className="fa-sharp fa-solid fa-chevron-right"></i>
              </div>

              <div
                className={`incredible-offer-container-right ${
                  IOE ? `invisible` : `visible`
                }`}
                onClick={IncredibleOfferSwiperRightBtnHandler}
              >
                <i className="fa-sharp fa-solid fa-chevron-left"></i>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Top;
