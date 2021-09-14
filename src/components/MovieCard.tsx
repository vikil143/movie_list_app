import React from "react";
import StarRating from "./StarRating";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
// import MovieIcon from "./movie_one.jpg";

interface Movie {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  rating: string;
}

interface Props extends Movie {}

export default function MovieCard({
  title,
  subtitle,
  description,
  image,
  rating,
}: Props) {
  return (
    <div style={{ margin: 10, width: "45%" }}>
      <Card>
        {/* <img src={require("./movie_one.jpg")} /> */}
        {/* <img src={MovieIcon} /> */}
        <CardImg
          top
          width="100%"
          height={200}
          //   src={require("../images/movie_one.jpg")}
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {subtitle}
          </CardSubtitle>
          <CardText>{description}</CardText>

          <StarRating rating={rating} />
          <Button>Pay</Button>
        </CardBody>
      </Card>
      {/* MovieCard */}
    </div>
  );
}
