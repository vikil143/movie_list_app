import React from "react";
import { CardText } from "reactstrap";

interface Props {
  rating: string;
}

export default function StarRating({ rating }: Props) {
  return <CardText>rating: {rating}</CardText>;
}
