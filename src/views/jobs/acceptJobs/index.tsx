import React, { useState } from "react";
import {
  AcceptJobContainer,
  AcceptJobWrapper,
  Button,
  Info,
  Rate,
  RateText,
  Star,
  Stars,
} from "../jobs.styled";
import { HiOutlineStar } from "react-icons/hi";

const colors = {
  gray: "#808080",
  blue: "#1f2041",
};

export default function AcceptJobs() {
  const stars = Array(5).fill(0);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(undefined);

  const handleClick = (value: any) => {
    setRating(value);
  };

  const handleMouseOver = (newHoverValue: any) => {
    setHover(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHover(undefined);
  };

  return (
    <AcceptJobContainer>
      <AcceptJobWrapper>
        <Info>Job Accepted!</Info>

        <Rate>
          <RateText>Rate the job</RateText>
          <Stars>
            {stars.map((_, index) => {
              return (
                <Star>
                  <HiOutlineStar
                    className="starIcon"
                    key={index}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={
                      (hover || rating) > index ? colors.blue : colors.gray
                    }
                    onClick={() => handleClick(index + 1)}
                  />
                </Star>
              );
            })}
          </Stars>
        </Rate>

        <Button>Submit</Button>
      </AcceptJobWrapper>
    </AcceptJobContainer>
  );
}
