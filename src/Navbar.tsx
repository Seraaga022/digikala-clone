// import React from "react";
import "./assets/css-styles/head.css";
import DRPDNMN from "./dropDownMenu";

const Navbar = () => {
  // const commercChanger = () => {
  //   let commerces = [commer1, commer2, commer3, commer4, commer5, commer6];
  //   let randomIndex = Math.floor(Math.random() * 6);
  //   return commerces[randomIndex]
  // };
  // const randomCommerc = commercChanger();

  return (
    <div className="ULTRA-NAVBAR sticky-top">
      <nav className="its-navbar bg-white">
        <a href="commerc">
          <img
            className="commerc-content"
            src="/images/commercial/commercial4.webp"
            alt="commercial1"
          />
          {/* <img className="commerc-content" src={randomCommerc} alt="commercial1" /> */}
        </a>
        <div className="nav-item1 container-xxl p-0">
          <div className="nav-item1-left ">
            <a title="@" href="cart" className="nav-basket-lable">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-cart2 nav-basket"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </a>
            <span className="separator h-[20px] mr-5"></span>
            <a href="login/signUp">
              <div className="flex justify-center items-center border rounded-lg py-3 px-3 h-10">
                <div className="nav-login mr-2 mb-1 text-xs">
                  ورود | ثبت نام
                </div>
                <i className="fa-solid fa-arrow-left-to-bracket text-[16px] m-0 p-0 text-[#424750]"></i>
              </div>
            </a>
          </div>
          <div className="nav-serachbar">
            <input className="nav-search cursor-default" placeholder="جستجو" />
            <i className="fa-sharp fa-regular fa-magnifying-glass search-icon text-gray-400"></i>
          </div>
          <div className="nav-item1-logo">
            <a href="/">
              <img src="/svgs/logo.svg" className="nav-logo" alt="dgklLg" />
            </a>
          </div>
        </div>
        <div className="nav-item2 xl:space-x-4 container-xxl pr-5 pl-5 ">
          <div className="nav-item2-city">
            <a
              href="choose-city"
              data-tooltip="لطفا شهر خود را انتخاب کنید"
              className="nav-item2-chooseCity space-x-2"
            >
              <span className="text-[11.5px] xl:text-[13px] text-neutral-600">
                لطفا شهر خود را انتخاب کنید
              </span>
              <i className="fa-sharp fa-regular fa-location-dot text-[1.1rem] text-neutral-700"></i>
            </a>
          </div>
          <a
            href="become-seller"
            className="nav-item2-become-seller max-xl:mx-3"
          >
            <span className="text-[11.5px] xl:text-[13px] text-neutral-600">
              !در دیجی‌کالا بفروشید
            </span>
          </a>
          <a href="faq" className="nav-item2-faq max-xl:mx-3">
            <span className="text-[11.5px] xl:text-[13px] text-neutral-600">
              سوالی دارید؟
            </span>
          </a>
          <span className="separator"></span>
          <a href="discount" className="flex">
            <span className="hidden xl:inline text-[11.5px] xl:text-[13px] text-neutral-600">
              تخفیف‌ها و پیشنهادها
            </span>
            <span className="hidden xl:inline material-symbols-outlined text-[1rem] text-gray-400">
              confirmation_number
            </span>
          </a>
          <a
            href="best-selled"
            className="flex items-center space-x-2 max-xl:mx-3"
          >
            <span className="text-[11.5px] xl:text-[13px] text-neutral-600">
              پرفروش‌ترین‌ها
            </span>
            <i className="fa-regular fa-fire-flame-curved text-[1rem] text-gray-400"></i>
          </a>
          <a href="gift-card" className="nav-item2-gift-card max-xl:mx-3">
            <span className="text-[11.5px] xl:text-[13px] text-neutral-600">
              کارت هدیه
            </span>
            <span className="material-symbols-outlined text-[1rem] text-gray-400">
              redeem
            </span>
          </a>
          <a href="groceries" className="nav-item2-market max-xl:mx-3">
            <span className="text-[11.5px] xl:text-[13px] text-neutral-600">
              سوپر مارکت
            </span>
            <span className="material-symbols-outlined text-[1rem] text-gray-400">
              grocery
            </span>
          </a>
          <a href="promotion" className="nav-item2-incredible max-xl:mx-3">
            <span className="text-[11.5px] xl:text-[13px] text-neutral-600">
              شگفت انگیزها
            </span>
            <i className="lni lni-offer nav-item2-incredible-icon text-[1rem] text-gray-400"></i>
          </a>
          <span className="separator"></span>
          <div className="dropDown ml-5">
            <div className="nav-item2-category">
              دسته‌بندی کالاها
              <i className="fa-sharp fa-solid fa-bars ml-2"></i>
            </div>
            <DRPDNMN />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
