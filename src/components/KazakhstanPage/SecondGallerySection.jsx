"use client";
import "./SecondGallerySection.css";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
export default function SecondGallerySection() {
  const t = useTranslations();
  const [images, setImages] = useState([]);
  const getImagesWidth = (width) => {
    if (width <= 640) {
      return [
        {
          image: "/images/kazakhstan__first.jpg",
          description: "images",
          height: 243,
        },
        {
          image: "/images/kazakhstan__second.jpg",
          description: "images",
          height: 113,
        },
        {
          image: "/images/kazakhstan__third.jpg",
          description: "images",
          height: 243,
        },
        {
          image: "/images/kazakhstan__fourth.jpg",
          description: "images",
          height: 113,
        },
        {
          image: "/images/kazakhstan__fifth.jpg",
          description: "images",
          height: 113,
        },
        {
          image: "/images/kazakhstan__sixth.jpg",
          description: "images",
          height: 243,
        },
        {
          image: "/images/kazakhstan__seventh.jpg",
          description: "images",
          height: 243,
        },
        {
          image: "/images/kazakhstan__eight.jpg",
          description: "images",
          height: 113,
        },
      ];
    } else if (width <= 1024) {
      return [
        {
          image: "/images/kazakhstan__first.jpg",
          description: "images",
          height: 675,
        },
        {
          image: "/images/kazakhstan__second.jpg",
          description: "images",
          height: 343,
        },
        {
          image: "/images/kazakhstan__third.jpg",
          description: "images",
          height: 675,
        },
        {
          image: "/images/kazakhstan__fourth.jpg",
          description: "images",
          height: 345,
        },
        {
          image: "/images/kazakhstan__fifth.jpg",
          description: "images",
          height: 674,
        },
        {
          image: "/images/kazakhstan__sixth.jpg",
          description: "images",
          height: 528,
        },
        {
          image: "/images/kazakhstan__seventh.jpg",
          description: "images",
          height: 491,
        },
        {
          image: "/images/kazakhstan__eight.jpg",
          description: "images",
          height: 344,
        },
      ];
    } else {
      return [
        {
          image: "/images/kazakhstan__first.jpg",
          description: "images",
          height: 668,
        },
        {
          image: "/images/kazakhstan__second.jpg",
          description: "images",
          height: 339,
        },
        {
          image: "/images/kazakhstan__third.jpg",
          description: "images",
          height: 523,
        },
        {
          image: "/images/kazakhstan__fourth.jpg",
          description: "images",
          height: 341,
        },
        {
          image: "/images/kazakhstan__fifth.jpg",
          description: "images",
          height: 668,
        },
        {
          image: "/images/kazakhstan__sixth.jpg",
          description: "images",
          height: 668,
        },
        {
          image: "/images/kazakhstan__seventh.jpg",
          description: "images",
          height: 486,
        },
        {
          image: "/images/kazakhstan__eight.jpg",
          description: "images",
          height: 341,
        },
      ];
    }
  };
  useEffect(() => {
    const updateImages = () => {
      const width = window.innerWidth;
      setImages(getImagesWidth(width));
    };
    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "8px",
    overflow: "hidden",
  }));
  return (
    <section className="secondGallery mt-[64px] md:mt-[120px]">
      <div className="container secondGallery__container w-full flex flex-col justify-center items-start gap-10 px-6 md:px-9 md:gap-[56px] lg:gap-[51px]">
        <div className="secondGallery__top flex flex-col justify-center items-start gap-2 md:gap-4">
          <p className="secondGallery__top-text font-medium text-[16px] leading-[100%] uppercase text-[#A5958B] md:text-[24px]">
            Trip founder
          </p>
          <h2 className="secondGallery__top-title font-medium text-[32px] leading-[40px] uppercase text-[#323232] w-[170px] md:w-full md:text-[56px]">
            {t("destinations.exclusive_text")}
          </h2>
        </div>
        <div className="secondGallery__bottom-box w-full">
          <Box sx={{ width: "100%" }} data-aos="zoom-in-up">
            <Masonry
              columns={{ xs: 2, sm: 2, md: 2, lg: 4 }}
              spacing={{ xs: 2, sm: 2, md: 1, lg: 1 }}
            >
              {images.map((item, index) => (
                <Item key={index}>
                  <img
                    className="secondGallery__images object-cover"
                    src={item.image}
                    alt={item.description}
                    style={{
                      width: "100%",
                      height: `${item.height}px`,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Item>
              ))}
            </Masonry>
          </Box>
        </div>
      </div>
    </section>
  );
}
