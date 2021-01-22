import React from "react";
import { Carousel } from "react-bootstrap";
import "./ImageGallery.css";
import '../cards/postCard/postCard.css';

interface iImageGallery{
    images: Array<any>;
    type?:string;
}

export default function ImageGallery(props:iImageGallery) {
    let outer_class:string;
    let inner_class:string;

    switch(props.type){
        case "postcard":
            outer_class = "gallery-container-card";
            inner_class = "image-container-card";
            break;
        case "viewpost":
            outer_class = "gallery-container";
            inner_class = "image-container";
            break;
        default:
            outer_class = "gallery-container";
            inner_class = "image-container";
    }

    return (
      <Carousel className={outer_class}>
          {/* TODO: Add ind as image number to carousel */}
        {props.images.map((img:any, ind: number) => {
           return (
            <Carousel.Item>
                <img
                className={inner_class}
                src={img}
                alt="First slide"
                />
            </Carousel.Item>
          )
        })}
      </Carousel>
  );
}
