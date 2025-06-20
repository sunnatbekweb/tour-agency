// "use client";
// import React, { useState } from "react";
// import { useCountryData } from "@/store/data";
// import { Link } from "@/i18n/navigation";
// import { Map } from "../ui/Map";
// import "./XlCountry.css";
// import { useTranslations } from "next-intl";
// export const XlCountry = () => {
//   const [selectedCountry, setSelectedCountry] = useState(1);
//   const countryData = useCountryData();
//   const t = useTranslations("home_map");
//   return (
//     <section className="homemap hidden 2xl:block py-[120px] font-medium">
//       <div className="container px-6 2xl:hidden">
//         <div className="w-3/4 xl:w-3/5">
//           <span className="text-xl text-[#A5958B] uppercase">
//             {t("top_title")}
//           </span>
//           <h2 className="mt-8 mb-12 text-6xl text-[#323232] uppercase">
//             {t("title")}
//           </h2>
//         </div>
//       </div>
//       <div className="container flex flex-col-reverse 2xl:flex-row justify-between items-center gap-x-12 px-6">
//         <div className="2xl:w-1/2">
//           <div className="hidden 2xl:block">
//             <span className="text-xl text-[#A5958B] uppercase">
//               {t("top_title")}
//             </span>
//             <h2 className="mt-8 mb-12 text-6xl text-[#323232] uppercase">
//               {t("title")}
//             </h2>
//           </div>
//           {countryData
//             .filter((country) => country.id === selectedCountry)
//             .map((country) => (
//               <div key={country.id} className="flex 2xl:flex-col gap-x-6">
//                 <div className="transition-all duration-500 ease-in-out w-full bg-[#E9DED8] rounded-[10px] px-[22px] pt-[14px] pb-[14px] md:px-[48px] md:pt-[32px] md:pb-[32px] md:rounded-[24px]">
//                   <div className="w-full cursor-pointer flex flex-row justify-between items-center mb-5 transition-all duration-500 ease-in-out">
//                     <h3 className="font-medium text-[22px] md:text-[40px] md:leading-[60px] transition-all duration-500 ease-in-out">
//                       {country.title}
//                     </h3>
//                     <Link href={country.link}>
//                       <div
//                         className={`transition-all duration-500 ease-in-out bg-[#A5958B] w-[48px] h-[48px] rounded-full flex justify-center items-center`}
//                       >
//                         <img
//                           className="w-[20px] h-[20px] transition-transform duration-500"
//                           src={"/icons/open__chevron.svg"}
//                           alt="toggle icon"
//                         />
//                       </div>
//                     </Link>
//                   </div>
//                   <p className="w-full text-[#878787] font-medium text-lg overflow-hidden transition-all duration-500 ease-in-out">
//                     {country.text}
//                   </p>
//                 </div>
//                 <div className="2xl:mt-4">
//                   <div className="h-[360px] 2xl:h-[460px] flex flex-row justify-center items-center gap-4">
//                     <img
//                       className="countries__bottom-left-image w-[50%] h-full object-cover rounded-[10px] md:rounded-[24px]"
//                       src={country.images[0]}
//                       alt={`image 1`}
//                     />
//                     <div className="2xl:w-[50%] h-full flex flex-col justify-center items-center gap-2">
//                       <div className="w-full h-[calc(50%-4px)]">
//                         <img
//                           className="w-full h-full object-cover rounded-[10px] md:rounded-[24px]"
//                           src={country.images[1]}
//                           alt={`image 2`}
//                         />
//                       </div>
//                       <div className="w-full h-[calc(50%-4px)]">
//                         <img
//                           className="w-full h-full object-cover rounded-[10px] md:rounded-[24px]"
//                           src={country.images[2]}
//                           alt={`image 3`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//         <div className="w-1/2">
//           <Map
//             onSelectCountry={setSelectedCountry}
//             selectedCountry={selectedCountry}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
