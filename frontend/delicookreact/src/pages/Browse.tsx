import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import CategoryCard from "../components/CategoryCard";
import FeaturedRecipeCard from "../components/FeaturedRecipeCard";

export default function Browse() {
    return (
        <>
        <nav className="flex items-center justify-between px-5 mt-[30px]">
          <a href="index.html" className="flex shrink-0">
            <img src="/assets/images/logos/logo.svg" alt="logo" />
          </a>
          <a href="#">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_10px_20px_0_#D6D6D6AB] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
              <img
                src="/assets/images/icons/notification.svg"
                className="w-5 h-5 object-contain"
                alt="icon"
              />
            </div>
          </a>
        </nav>
        <div id="SearchForm" className="px-5 mt-[30px]">
          <form
            action="search.html"
            className="flex items-center rounded-full p-[5px_14px] pr-[5px] gap-[10px] bg-white shadow-[0_12px_30px_0_#D6D6D652] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#FF4C1C]"
          >
            <img
              src="/assets/images/icons/note-favorite.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              type="text"
              name="search"
              id="search"
              className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-black"
              placeholder="Find our best food recipes"
            />
            <button type="submit" className=" flex shrink-0 w-[42px] h-[42px]">
              <img src="/assets/images/icons/search.svg" alt="icon" />
            </button>
          </form>
        </div>
        <section id="Categories" className="mt-[30px]">
          <div className="flex items-center justify-between px-5">
            <h2 className="font-bold">By Categories</h2>
          </div>
          <div className="swiper w-full mt-3">
           <Swiper
            className="w-full mt-3"
            direction="horizontal"
            spaceBetween={16}
            slidesPerView="auto" 
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}>
              <SwiperSlide  className="!w-fit pb-[30px]">
               <CategoryCard />
                </SwiperSlide>
              <SwiperSlide  className="!w-fit pb-[30px]">
               <CategoryCard />
                </SwiperSlide>
              <SwiperSlide  className="!w-fit pb-[30px]">
               <CategoryCard />
                </SwiperSlide>
              <SwiperSlide  className="!w-fit pb-[30px]">
               <CategoryCard />
                </SwiperSlide>
          
            </Swiper>
          </div>
        </section>
        <section id="MadeByPeople">
          <div className="flex items-center justify-between px-5">
            <h2 className="font-bold">Made by People</h2>
            <a
              href="#"
              className="font-semibold text-sm leading-[21px] text-[#FF4C1C]"
            >
              Explore All
            </a>
          </div>
          <div className="swiper w-full mt-3">
          <Swiper
            className="w-full mt-3"
            direction="horizontal"
            spaceBetween={16}
            slidesPerView="auto" 
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}>
              <SwiperSlide className="!w-fit">
              <FeaturedRecipeCard />
              </SwiperSlide>
              <SwiperSlide className="!w-fit">
              <FeaturedRecipeCard />
              </SwiperSlide>
              <SwiperSlide className="!w-fit">
              <FeaturedRecipeCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <div
          id="BottomNav"
          className="fixed z-50 bottom-0 w-full max-w-[640px] mx-auto border-t border-[#E7E7E7] py-4 px-5 bg-white/70 backdrop-blur"
        >
          <div className="flex items-center justify-evenly ">
            <a href="#" className="nav-items">
              <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px] font-semibold">
                <img
                  src="/assets/images/icons/note-favorite-orange.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Browse</span>
              </div>
            </a>
            <a href="#" className="nav-items">
              <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                <img
                  src="/assets/images/icons/crown-grey.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Featured</span>
              </div>
            </a>
            <a href="#" className="nav-items">
              <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                <img
                  src="/assets/images/icons/receipt-item-grey.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Pricing</span>
              </div>
            </a>
            <a href="#" className="nav-items">
              <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                <img
                  src="/assets/images/icons/setting-2-grey.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Settings</span>
              </div>
            </a>
          </div>
        </div>
      </>
      
    )
}