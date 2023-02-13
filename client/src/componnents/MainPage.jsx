import React from "react";
import "../CssFiles/Main.css";
import QR from "../images/QR.png";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import user4 from "../images/user4.jpg";
import user5 from "../images/user5.jpg";
import user6 from "../images/user6.jpg";
import ta from "../images/ta.jpg";
import ef1 from "../images/ef1.png";
import top_img from "../images/topIMG.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Support from "./Support";
import { useContext } from "react";
import { AllContext } from './../context/Context';


const MainPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { support,setSupport} = useContext(AllContext);

  return (
    <div>
         <div className='fixed bottom-16 z-10 mr-auto right-5'>
      {!support?
      <div>
         <button onClick={()=>setSupport(true)} className='cursor-help transition duration-700 ease-in-out w-28 h-12 whitespace-nowrap rounded-full border border-transparent bg-indigo-800 text-base font-medium text-white shadow-sm hover:bg-indigo-900'>
            <div className=' grid grid-cols-8'>
               <div className='col-span-3 ml-2'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>
               </div>
               <div className='col-span-5 text-left'>
                  support
               </div>
            </div>
         </button>
      </div>
      :
      <Support/>
      }
   </div>

      <div className="container">
        <div className="upper">
          <div className="left">
            <p className="headline mb-8	">WELCOME TO QR CONTROL</p>
            <p className="slogen mb-8">QR GENERATOR SERVICE</p>
            <div className="text mb-8">
              <p className="content">
                Here in our website you can fill information on your company or
                busniss and generate it to a QR code for you to use and
                advertise your business with the most advancing technolagy there
                is today an the market{" "}
              </p>
            </div>
          
          </div>
          <div className="rigth">
            <img src={QR} className="QR" />
          </div>
        </div>
        <div className="con">
          <div className="toppings drop-shadow-2xl bg-sky-100">
            <p className="top_head">QR code</p>
            <img src={top_img} className="top_img" />
            <p className="top_text">
              A QR code (an initialism for quick response code) is a type of
              matrix barcode (or two-dimensional barcode) invented in 1994 by
              Japanese company Denso Wave.
            </p>
          </div>
          <div className="toppings drop-shadow-2xl bg-sky-100">
            <p className="top_head">Environment friendly</p>
            <img src={ef1} className="top_img" />
            <p className="top_text">
              QR codes don't require any physical printing and can be displayed
              on digital screens or smartphones, reducing paper waste and
              pollution.
            </p>
          </div>
          <div className="toppings drop-shadow-2xl bg-sky-100">
            <p className="top_head">Technologically advanced</p>
            <img src={ta} className="top_img" />
            <p className="top_text">
              QR codes can change and update dynamically, providing real-time
              information, while posters and paper prints cannot.
            </p>
          </div>
        </div>
      </div>
      <table className="table-auto w-full bg-sky-100 rounded-lg">
        <tbody>
          <tr>
            <td>
              <h1 className="text-5xl  text-center">
                Frequently Asked Questions
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <details className="border-b-2 border-gray-100 mt-16 close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg">
                  <summary className="text-3xl  text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-blue-600">
                    Can I make a QR code if a am not a comapny or a business?
                  </summary>
                  <div className="  mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      Unfortunately, no. not any user in this website can
                      create/generate a QR code only if you have a company or
                      business that you want to make a page of infomation for
                      then you can use our services{" "}
                    </p>
                  </div>
                </details>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <details className=" border-b-2 border-gray-100close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg">
                  <summary className="text-3xl  text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-blue-600">
                    Who can scan the QR code?
                  </summary>
                  <div className="  mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      Anyone with a smartphone or tablet that has a QR code
                      scanning app can scan a QR code.
                      <br /> QR code scanning apps are widely available for both
                      iOS and Android devices, and can be downloaded for free
                      from app stores such as the Apple App Store or Google Play
                      Store.
                    </p>
                  </div>
                </details>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <details className="border-b-2 border-gray-100 close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg">
                  <summary className="text-3xl  text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-blue-600">
                    What can i do with the generated QR code that i created in
                    your website?
                  </summary>
                  <div className="  mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      You can download it into your device as a pdf file for you
                      to use as you wish.{" "}
                    </p>
                  </div>
                </details>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <details className="border-b-2 border-gray-100 close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg">
                  <summary className="text-3xl  text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-blue-600">
                    How is your website is different then any other QR code
                    generator?
                  </summary>
                  <div className="  mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      Here in our website you can find the easiest way possible
                      to edit ,change and update the information in your page
                      that is eventually generated to an QR code{" "}
                    </p>
                  </div>
                </details>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <details className="border-b-2 border-gray-100 close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg">
                  <summary className="text-3xl  text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-blue-600">
                    How secure is the information I include in my QR code?
                  </summary>
                  <div className="  mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <p>
                      You and only you can access to the information that you
                      enterd in our website, no other user has access to this
                      information{" "}
                    </p>
                  </div>
                </details>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="animation flex justify-between">
      {/* animation */}
      <div className="animation_display">
      <div class="qr-container">
  <div class="border-masks"></div>
  <div class="border-masks"></div>
  <div class="border-masks"></div>
  <div class="border-masks"></div>

  <span className="animation_span"></span>

  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAD+/v4BAQH9/f26urrq6uqHh4dpaWm+vr7e3t44ODiXl5dMTEyAgICRkZGwsLDY2NjIyMhZWVnz8/NCQkJhYWENDQ2dnZ16enoyMjLLy8s9PT3i4uKtra1UVFR0dHQjIyMtLS2kpKQgICAZGRlOTk4SEhJtbW2rUa5WAAAaEklEQVR4nO1dC3sbq66dYYhdO45fsV0nruM03bun//8XXiMJkEDMK02bfT+rZ5/WM8CwWDwlAVV1k5vc5CY3uclNbnKT/5ZYY6z7v/5SWRcH/rCHZcH3LlplK9P6KetSZ7H6yTUn13Rbvl9+VygTi8UyNJorzc5Y17y2lVZr8gUxdn43SNYTR6K16xl7uCl/eochTsCQPXWkPlvPEeGsI6CMdTcrI7TVXT1MzljfxLNVGeHch4BYT53JzzDa92GZOrTxe1c3zZDEgENTiViLToQL1x5MtazbvtVc09xitPv+GXKxvpQzYAAhSh3/1E3yB/+PELpmKN5mCK2F9n8tiYDQEkL2LZ9B/6xOEDZ1kq00cyGtDoRQCvxTugQOTYUcxjcKQt+JRg6vf64Ia/YtiRCzIRA2DEdLxnpz2BehdQA6EFY0nPBaahiHOUL8V4KwV976cDikKU6wZxbPsp4mjlDnBGH2sYb9I+WwR3agaLo5vIaZzjpk+4UhtPbl2kV7yUcL11SfpldZPSkc1j8wHr7auxTuZk85h/VX96olT9fRBVtlDw59L90iU4/QdM8ToC/iIjisdxgKX1FPv64zDuu6M1NVL4RQdgMQ9pjPuBLQEcLHJj53hNC9Wisc1q42tHzm2iP047AexuG7EAJROkKVw9ZZXF+En5rD34LwxuEIhDH/n47DXw+Z7H9kCK8Y7+Hdk0hssWfRfv4uDq+zhm95ru53bs05gsOHOpeVhhB/XERiSyXy+zm01UZLcQf5GM5hjrApI2zqR5HYtDwLeReH70bYxqF7VUDoXuUICxjfy2Ge7I3DD+TQoxRoF6iCWfo0BELjEdYawr/HoZvVKxw2LCZHCPKkIKTeihDefQSHoxGGZdCUIUzyL8ESQ28+/042ogxotP0ktTSAXAgOJ7D4rTiHXm0xczm21TeJEGItKtB70Ez7k9RSr2PgCKGndCpVySGtxbegE74ihKJx6hxbzTGNI+gO3INPxCFlu0k5NKC7TtMhhI6lb0gKzsk2vpScYoAAfhIO43dXyMYSqZmAqq2qE42dRAj5h1gbzyGq/7Na+hc5jKEihx5husbH+ow9TdIOQy2FV5+pHTJZTs5OfjEOq93+wuSeFDQYkPIPPyakzsQ05pPP1A7zrzaMQ7nGWlPHFIpNxGLzhHw8/BQcMoCIEHrMDCFTcGbR/KvPMmsLOm8lj04bh1ZJ6PyNifPqppGTHg66EflIOFT0uUPWhwmHqWlAQYjjOZvUxEg4WmTfiRyK6lE3iTWhwGFuVIFyHMdhk4rGodfqU+HK8BNhwZUIRQUVsYoIrdkoyn1XS3sj5BzulRqfI6zCjEVbLk2U76wDqDy86Gk0PU2pHY7i8McqlzuTIbR2uZpeX9Fa4bLg4V+4fZZyvJ3Cq71ccMCzVxxjLvBjuskQmmo+zTO13BnXX/8ebSKp8Hk79GNBsLtwEdbNC08isZDiszlOeI74Kx/x04GHxNpxfWmL5NpEqyA0rqYzGMz+bFIbcEDY0KwtK6W/rREuImSSIuTiEQLsxQ3hOxB+jlr64RxuRyAMPQ2zAaccMp1xgcO23qozUz3thy6tL9MueYgInc8BPFttwRb7Aj+WG5hIAYdOL4hmWnw1Q/+GJb5aowkX01hgwB8YcC4Qrjpz1ZfDAaJp9SmNmUcILSthmetLSzbgOh3x+0k/DocjbKK+9M7nznPYNKwfcTJS590P38dxWETIOEwRDtN598X4STi0/xkOwbuphhlzCaHGoe9Lm9wXgxCmXl/9MbYiXHenIOSMPl3446dASGPqM/5KEIIscSEhEEqtPqXxz7BMSeuCFDs5T4bIeQc+wnY+cRFPYJ3dL/DddO+MwPcbDIgTZkL45oI9PHzHyg224v1+BwFn93ufxtklD9kalKXrfy3+paOcfb3i1sjRWlqWMAgijLqAsGoOLEu7Rav/TGuuim9Al2L7ivEIHY/Gz7hWqAMO/Qg4g2Ne5x5YvpwPGuHaz9qiVr9/jix+rIjQYJgBhWXIk90yC3ui1a/A3x2fzWsJkWuwMARpYaRWf4iYNkd26MUK5UVvY1Bk21jvbw8z74bZLZY1WWYMzE85Qq9LbeoIMFhmoBIf0aHRMiKpTCG5lDjcYQCvjI2fywUzrL/K1Lr0GF4Y4P6ccIjtkKcXECoiQhwragM5CWo185mAFtNeS4vvKrXOUBsUuaO1xSv+OvMS7Y1wBaQoXyxrMWLwFhS2bTzciyKlnnKOJkD88VN+0//dEyGKX18BI9UvfLhjCKuTFm0C+djJNBQx1aw0a2uu8TjCKUsZPdkTTwVqpXYgwkPlm5ZLd6kg1HXeuHMH23fLnMbCvFSolL1aGRCa2NuQt8zEeF99mHlLRGJPj0SoZBJ13gccA7HH8yvIHc9i1AgznfcO/Mgt5r1z5h27NyEX1OUZoS89e8/D3BeDJRs2DvHRosShoYbr/n4qcJglMIF8dGsxbPTVjznxDy7YyrHqof2zSdcWaa2kZA3NJbQRP34g1FLj62mspWxc2OBiRcbta3sKs2atNV5wEkVVL+ppjNU9hnjB+VjnUuKMQy55O0RtXOZPtjN9tfqzn4+Xx8dHcnFx/yS5XJ6wlk7mYLhdwbuHMxKLCB/OaLjNkr0W/gbebTHd50dF6JPXBPAL7i/qSzEyCS0d73nch0nVT6sfhrypUnY4fale8NU2xiAbcGgY6n4LUeLqziiVXo1urJfHLOf9ailAMbEOZu+S1Z8BAKTFaEr5N7mPcD6z8pC4o5hanxv475h+oT9CU0ZoMoSVR5j7YrBoqp+3jrCX5BxWH49Q5P+jEeYc/gGE//84ZHr/NP9ZT/MBHLb1Vu17SElmq8VVVrvkMUM4xX3AO+wzposoq9zoEUIsBcLTGtKwPHf31wQonevf0hnk6F+xr2AaflvyyoVYrXsgLAhDWHuWBy3D2e48a1QPWnXEJ9FSfO0MMUjejbCnVh8/plin8rrNdks39de25f3fQVjQ6o9DWH9GhP8JDgclqWj1/yyHYV7aolJMEYr4/N9aEsF+SLvVVYSUE7fk0voRg0pR+pba07Rooqrt03I5nT5RV7xYJjbW5XK5mm2jzNwTejNdLjgo87KcLpP4yxXG2lhbsj0941fWsHnYnvjH7p6W7t0Ri2cLaS/XWx4CPrk8thEpZywtXl+VEqJ7Z5dfQeKxJQqHfmq04DvAvbB6bP0a56SHKIl1mqimzXPPW6i9GnjPlSbZjpIsNu6I8Zo/hUMf8EiLNX6+i/V6JljtvuCvU5WEGOZtknlf1k3C4YPXXGW6NtIiCX0Wla4hta5cwdcBIurNaT3KcocZcaVUuXUqJMo4vEbA3PTRtXEPWlyOBRpWITnX2vfRn9kh5C6Wy6Bw4hxSZGkDhki+lnq7BWpMmebHeoRQf8NKPGj1aZ09wgsaPWepgHMOY/6VnV1Mx5S0ENqPn/Y0TfRry2xIoZZWlUnaIZRYrMetCJNamikSlhpCfCV03h6hiMxC6CM+37NRGTniBI22zRFC5+x1JS024IInuzSyYsEu7vdO/ocg8M3p2T26DzuFoe2deFyu+AwcfoOUqFd+9F+BYW8K7952COLsX5mIELPxhrp3CnFuGw9VT3Y2ggbFIK0gSX2Mayjp9RXsh4VveYSS5UNFhjzoboVG2OIrPAzGIyTZsROwVJsVR5j2NC7/aOSlg3RC/ptQD3EWJu2H0ULKLbQSIfWcTOd0CCeAZVp9UEejjZAj9Fp9SybEVvsh+dM0fieHRwj9OxlDg76xYT0JFnB6NgtWYLIxelxhKLXJGUN+PCGDDuT1ySOECMF+FkcLb1SBs47wTetBJLZQS2HLAXbKfkI49eWfI6SdXXzfE9mshdnWl0HDumMc7SC6xVoKD3d+nuoRhhHfR9v59E3Mok4inRKTI/REGCvaITlTJBzGMkCEsF0yrzDKCTw42qF928g5gamCVdjG8TC2w5Bs+0lwFG+dIoyzefrLzzrVWupDNH5XkP5R6kuFUE9vka9X0dOE3UUutR8SIW98bTbgxE7MEAZPi3Q8zDkMXQDtZgGLVa1Jw32iUIKVm/oaEPKJYr1kWhP/5cm22ICpIILKnSEkPwRtXlrrCJuAsDJG1RXijE6zLJGvvq/b3kc4TlONmLKa6jnW9h52C55/jxDzr8+8CwhJWna3EUoxYo70ZH+OU6+RCA0i1OelZYRNF0I2a/MIoWWPQEhT5xuHUn4mHDpR1/j4o4AQpIXDpB3S2kLmn32lhLAnh7s5k0nIv+tpJj8PV3lcnFmI8+vj9dHhAs/O24sLcaBYD/DjcsKA+OqCr+7hx+ENOTzxBGfI4VR85dej+/KBP5MyeevJYcFHWCjOZAixPqe1Ec0aTkr5E8vEUMvpJ1LEV9plnBd0QKhrhN/lyT4MYZ8SGePJ3gchW+MP2Y0wFGFnhBuHIzg079qNMBThezkseAzRO9QeqFp9/CF3BTGEddLTrHA113aOsMDiEfItwnn4EKVFI2yqk7OhLo7yeLX1VV7Wa1w9U/5fj2CJ/bEGWaHlFv59t8wQNpjGNRW0387w2O31oigHgeQFI5OrkBb+X/jK1wXk46VtCUyjwkopzQdfjyn/IOLUDjnicw59dqkeG1zOttQl1c8VE1LrII74//MwygDxOFwb9EyBf/Lc474YUavvdFXu11zoRwVCtoL3Wn1QuxSkWouGwlbzoC/Nwz8jh+Cg2LYCtqR3TBBi9b8k3iawfnmgVmb9eQ5xSStqKToTEkJDWwasLUEEHUWKsGZpSJRVQGhNZU2LbRADpBxSvtGDNuHQry1A/0O6tpxDoYUxdBg/nViviYV9TwnCOnCINoECQtMB0GAJcIReLth+dISwWJXtcIY669JOZ1ROlWup7rNX12B7QqWNbId1Lzu+1w2slOQf8JW0MPpaqqye5LkkoZQ4xLKoCBthWRLR+yK8jhZPSydU8ImBFeSIv47467uyAn49QYgFBHjiVtztSXzsZVmUi4B2hxlAEp8x3XXKYdPHU8EmI75Ym6Y6e1+uLbo2J6lfFftY26xNH/HZU+n11Z/Du6BoR4SsaZzxs7RLOdHqS40whSBtouz1BMJ8T4A3r9USIfRPvMfJEfbiUJl1coQN07UlWn3Qp80ThH7fU4YQ9NmtCOUElM+8CWXQAvi+tO6NsNERwlhQNxxhUMmD7aayOULQM5kMIWnfk3P1pdRaLeUDzzECxBG/HschezUXurZpaITuD47gZ8wW37um+hThFTK2uLagqqhymCKkzA2ppUrZoVArW/r8h9w0uo5Ceh5y8f1869pCr6WRW6kRw3npcA7vv0W5/7LjNmD4sdvhjKXeYxD8/Hf49bzGII8skftX/M762f16m+1Km3l3x7rEYbQSw7MpJL//2ozjUMglBGKCI35UqDPZYlgxp6G1hTwTQhO5thArYLm28PWgGdcOU4R59IdyiTAtRpBw6gXUtm0pP+mueaHF+CLyMdBzr4XDpoiwBJGdOKAgbLoQlvrSMsIbh6MRtnFoEg5DOxzJIZXSxyHMpZVDEL2nGclhB8K6fcHCZZXEczLBH3TSczZrbpqin30cMauAkDh0s5zv/CsBYXFcrtB9WFq5B/lim0SLoVvX8jVyy5nsCsI6IhTarIBQ4ZC9zzyGOpe+XQjNp0c4gMU2DpsywqZ8c0BHLdURttbSj0P43+fQL+DSnsYqfnmBujBbk71tLIMyhyA5wsKsjcTCf+MQWjPZbDbz+fyXwuEczbgLNMsu0Iz7L8688ccSy2e3gSCrEKLE4XEOH8tt2NdR6zFYiWthJd7MN3ghIYb48jaQw3h2asahV8NJrX7QtVEJsTSiv3+BQ16JEw79xwr+/jaeRRH3s/cDaGd+lZlziPffCR9b0pfiCjh4Ld8hQzNcfQv7YUTol7kRaXxtSG/LLIxRxeG1+lQIT8MQstsBUw69g6k/ZyxqhGuvxfDK5uDfCOGF/TAibATIhENyYA8etEK9ccDTRFDpPRSh99VP5prkvIreieSByiwzNdgtotOj5xANBPtiO4yZVmopKv7D6o/9CWeDjEEYfIQThOg+q9statImRi/kGMIaGzjkurZ1nRZiHUJE3ZfR2mFiexqDsE50lbXoR1L74V6GoPzLEGotzbKu+gPpCLmMa4fXNRhYeI/UFaMJ+M5wK/cUjboQ7LjAELSjd4Nm2R/waP2GfSlacWcBYc7h3TqRa/RLGugqex7m7jKGwyZ4Qf/EUkN5EFZuEmHHl/stuDbO4wkn6hXXXBll6QM95giEvpXVXtHsbMCqVtya9GwTE7X6aC4KLVtqMTrA5c2l9hbp0QiDJ/sd60caUmRdYEz0fSl2htHbhM9LsUtZ1nEsiAjhXbw5gAKEvo0rvYO+WfzJenpC6Lse/UwyzmHDaqnY1XTBDlPe3HAun08Td+fFjCQIiQ4WSgKUIyF7lSFET2QPsWW/BcxpiggNjYfsId5AUrqVzNOQInypQ+VgaXGEOrbwKq26sF+BxphWT4X0rqxvPBlnA7bpeWfnMsI4WnOE/Cu+qou8Fl/FMGot5dLii2HmYLKd0d6oE9vxu93iZOos9gHvrLV6LbUU+ZlDfEP77QJfHbAqriEkHcP2gK/oIt0Vy4E3Ix/zDqipX6+povX4afnUtg/YTzrUIOAfkNRxcBpROfThtL3E3Ercch9wk+zyRdHOfJOQ+5z8MUgKPQ3B3GclPvwsaPEx9SYdhnWQn/cAhHk7DAg1DgkhZLb7LOgUYat8FMIbh7+Lw8JtSH+AQycP2luNw1XwoHVEiZ4meOGO5JCloYmpZt/vh8g/ZKXfoWAqszcW4ttX8W0bAkYdBQZ8xlcbzMB3weHlGR6iGlFyOINYlvxpLM+HjnDMqfOptKTR534LL4zDoI1zFVhyGPY8NGjl7pA/jpBLQMhs5t23kkWE9TttwB+DUOOQTVF73CWbcvge+2EBYZ7k5+ewKcx4dYQlDtU0vJ83ZqSAkKIrHFrqadiSbBSHLuj7EappIIfo460j3PjIjcIhqPvo1PYmRVgP8E0UZwYWZNWJsMVb5ocWAp/FuxHy8RDOIkCEdbZ/bwCHTT3uNqQgcUdJaSm69jpjnh/Psi3MaWDtHjnMEA7hsEF9dZv0QDhDW0eq5CWEDuKWf4XOZjngIdByXkpxcfEWEPLT1wdzeKfsaRiOMGwaiKkFhHXdkIXUv0DWDuGMJMahV8AYj7D29+l6QIHDDpVbenpLQoERJ38kCJ2KCzeKMLsFbRoIJ6LQPc1rzCT4FNHxCYYhtCa2w2ii8GVE91ofw2ddit43sUun2H0rmUlOb5nErJvEwjij4yLgrfx00PtbGytaaIfMwqWv8UGDI9uhv728D0LO4XyTy1xH6Apzd4IAL4cvV3ncokEHY52wCeKva4jDNczjCY9KooQfXazDFBvbmjrMPAdzasSE8IwPfx2+XP8cOn1OUg6Fro0k3A2fILRh9b3yD8CMqd2kE0LA0Chuj8dtO7TvqaRrY32pODmj+9aWrvuAm8zbJCA02f0WFXZ/hR2WdLAT3q0eEMLxOtb4dqggbLwKXnoi7/yVIgM57InQUid0xsgrMnDiHjz9vic04uLI4G+Px84Mz2hZCzumUAg3gsNwgo3x+Ygd7AgO3SvtPmDjT7wXHAKNKsJV5bPB71YHwY4z2bsmC7lROJwg92D+br1nZhSHvr7Fu4L4EK/XUhuU8CZwSIhDX5rCIgZrnUPrFfrtdwWN4zC5SzY/VyJFKHt6fn+jT6rt7jDBYehp+EU47QiHc3hl4vjy8uP6vyPI9V9M3hQOD2seYoHRMAcTiL3+JfpRCoGyFPPSGTxbwR0lZneEBO9+O4f6Xu5YLCmHSQsTiqNNjFUIMfezNi50OBgVYBHg2Hao78cXGDM9E0sxP9skDZXcwqKsLfDVqLvV0xyVEDKNcK7FKCNkGuEQQrNhJwgzDocg/PMc5mcM3Tj82xyqPT2+ajuFqCWEdt7Z3+Rwsj05+YKTmbsT/Hx9crI65bKlvv2XEuIgEIYQLsUfT0x+7cAn5E8hrHwIQKjZXVTBEG13BYkQuY/wn6ulEqE466vN/hxC+Cmryc9Sdl/5gvb28Qh/N4e/F2Fdvx/hjcMxHBqJULkKqS/CmvauSYT9byVLOdRuGl7qCNs4jDda0cxVu5xNnCmf3AuQcugk5ZClMeAs6F0qE2dvLSL83/3zVb6z09gaf36pnaCF9x8fIocoOHz5DgHv8LMmILyGwK8804mfaAPePby5Z/eYxZb7gLu1iZXXD+YIQ3mKMwnCGbQgTIuR5UIgVHcKS90N/oP0jajNaghF/9VTdmdrdIvTOCSHQnYWdCPPEY4nWyrVlNfSqNW37FhgsrmF9T4ilBrhrvuAuziMlgIFof9ohjCWS9TT5J0NQ0gnPae2pzroMCKXzLoGJ/B0nAUdfITvKtsuPRAuGUJvMWHntWUf9whJm5gjtKRD9booSJ5ZSAfanrokQxj7texe7niwFz9zr4SQrGtUS/MQUlIbcB/LjAu6Hswhk4Dw61XoTPYdVp1eCF3yP2pue0LZQYJSRtqAB9rxdQ59/6Bp9csIY0+ZcdiqsR9mPxyFMOPQktFM7F3r5jBuF8o4tKkJSyLsxWG8D7hbPEIwpAjV2CImhzujdK2+itB7cTe6X5uNymZSOUeEwGGbRt/JcI+hMw5fUrspUtxj1RMIV9qonCaNNtSe8gxf6baQJp74PYhErX4lBmKGkGn1DSKkENqIryQ/ACGOh53GpzF+bW7wFs+4Vj/aXQghsVyctUnpjfCNf6VFTDUD+21veZzAAXj2wp4d+AWLxjzhQwQ0geQPL+kVMk4e8+QPfRGaV4zQ1Qyz8/i7BbTprXcR+H+Ig8y01VNr9K5wA8Pf5CY3uclNbnKTm9zkJjf57fJ/UAew3VyAA9EAAAAASUVORK5CYII=" className="animation_img"/>
</div>
      </div>
      <div className="mt-14">
      <img src={QR} className="middle_img" />
      <div className="middle">
        <p className="middle_head ">QR useage advantages</p>
        <ol className="list-disc">
          <li className="middle_list ">
             Easy Access to Information: QR codes allow users to quickly
            access information about your company and its products/services
            through their smartphone cameras.
          </li>
          <li className="middle_list ">
             Increased Engagement: QR codes can increase engagement with your
            advertisements, as customers can easily access more information
            about your company and what you have to offer.
          </li>
          <li className="middle_list ">
             Measurable Results: QR codes can be tracked, allowing you to
            measure the success of your advertising campaign and make
            adjustments accordingly.
          </li>
          <li className="middle_list ">
             Cost-Effective: QR codes are cost-effective, as they do not
            require printing costs for traditional advertisements, and the
            technology to use them is widely available.
          </li>
          <li className="middle_list ">
             Versatility: QR codes can be used in a variety of media, such as
            print advertisements, billboards, packaging, and more.
          </li>
          <li className="middle_list ">
             Increased Reach: QR codes can reach a wider audience, as they can
            be accessed by anyone with a smartphone.
          </li>
        </ol>
      </div>
      </div>
        {/* animation */}
        <div className="animation_display">
      <div class="qr-container">
  <div class="border-masks"></div>
  <div class="border-masks"></div>
  <div class="border-masks"></div>
  <div class="border-masks"></div>

  <span className="animation_span"></span>

  <img src="data:image/png;base64,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" className="animation_img"/>
</div>
      </div>
      </div>
      <hr />
      <p className="text-center text-5xl mb-16 italic mt-12">CUSTOMER RATING</p>
      <div>
        <Carousel responsive={responsive}>
          <div className="comment drop-shadow-2xl">
            <div className="comment_upp">
              <div>
                <img src={user1} className="comment_img" />
              </div>
              <div>
                <p className="comment_username">Bill nelson</p>
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="comment_txt_div">
              <p className="comment_txt">
                I just wanted to take a moment to thank you for creating such an
                informative and user-friendly website. I've been able to find
                everything I needed quickly and easily.
              </p>
            </div>
          </div>
          <div className="comment drop-shadow-2xl">
            <div className="comment_upp">
              <div>
                <img src={user2} className="comment_img" />
              </div>
              <div>
                <p className="comment_username">james morales</p>
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-half"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="comment_txt_div">
              <p className="comment_txt">
                I was very happy with my purchase from this website. The
                checkout process was smooth and the delivery was prompt. I will
                definitely be shopping here again!
              </p>
            </div>
          </div>
          <div className="comment drop-shadow-2xl">
            <div className="comment_upp">
              <div>
                <img src={user3} className="comment_img" />
              </div>
              <div>
                <p className="comment_username">erik west</p>
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="comment_txt_div">
              <p className="comment_txt">
                I love the design of this website! It's visually appealing and
                easy to navigate, making it a pleasure to use.
              </p>
            </div>
          </div>
          <div className="comment drop-shadow-2xl">
            <div className="comment_upp">
              <div>
                <img src={user4} className="comment_img" />
              </div>
              <div>
                <p className="comment_username">jeff gordon</p>
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-half"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="comment_txt_div">
              <p className="comment_txt">
                I was impressed with the level of detail and care that went into
                creating this website.
              </p>
            </div>
          </div>
          <div className="comment drop-shadow-2xl">
            <div className="comment_upp">
              <div>
                <img src={user5} className="comment_img" />
              </div>
              <div>
                <p className="comment_username">kate winston</p>
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="comment_txt_div">
              <p className="comment_txt">
                The customer service on this website is outstanding! I had a
                question and received a prompt and helpful response.
              </p>
            </div>
          </div>
          <div className="comment drop-shadow-2xl">
            <div className="comment_upp">
              <div>
                <img src={user6} className="comment_img" />
              </div>
              <div>
                <p className="comment_username">cody wallace</p>
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="comment_txt_div">
              <p className="comment_txt">
                I had an excellent experience using this website. The customer
                service was top-notch and the products arrived quickly and in
                perfect condition.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MainPage;
