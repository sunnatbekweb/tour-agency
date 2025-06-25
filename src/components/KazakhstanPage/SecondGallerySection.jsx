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
          height: 575,
        },
        {
          image: "/images/kazakhstan__second.jpg",
          description: "images",
          height: 243,
        },
        {
          image: "/images/kazakhstan__third.jpg",
          description: "images",
          height: 575,
        },
        {
          image: "/images/kazakhstan__fourth.jpg",
          description: "images",
          height: 245,
        },
        {
          image: "/images/kazakhstan__fifth.jpg",
          description: "images",
          height: 574,
        },
        {
          image: "/images/kazakhstan__sixth.jpg",
          description: "images",
          height: 428,
        },
        {
          image: "/images/kazakhstan__seventh.jpg",
          description: "images",
          height: 391,
        },
        {
          image: "/images/kazakhstan__eight.jpg",
          description: "images",
          height: 244,
        },
      ];
    } else {
      return [
        {
          image: "/images/kazakhstan__first.jpg",
          description: "images",
          height: 328,
        },
        {
          image: "/images/kazakhstan__second.jpg",
          description: "images",
          height: 184,
        },
        {
          image: "/images/kazakhstan__third.jpg",
          description: "images",
          height: 328,
        },
        {
          image: "/images/kazakhstan__fourth.jpg",
          description: "images",
          height: 184,
        },
        {
          image: "/images/kazakhstan__fifth.jpg",
          description: "images",
          height: 328,
        },
        {
          image: "/images/kazakhstan__sixth.jpg",
          description: "images",
          height: 328,
        },
        {
          image: "/images/kazakhstan__seventh.jpg",
          description: "images",
          height: 184,
        },
        {
          image: "/images/kazakhstan__eight.jpg",
          description: "images",
          height: 184,
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
          <p className="secondGallery__top-text text-[16px] leading-[100%] text-[#A5958B] uppercase md:text-[24px]">
            {t(
              "destinations.kazakhstan.kazakhstan__gallery.kazakhstan__gallery-text"
            )}
          </p>
          <h2 className="secondGallery__top-title w-full font-medium text-[22px] leading-[30px] text-[#323232] uppercase md:w-[620px] md:text-[36px] md:leading-[40px] lg:w-[642px] xl:text-[40px] xl:leading-[46px]">
            {t(
              "destinations.kazakhstan.kazakhstan__gallery.kazakhstan__gallery-title"
            )}
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
