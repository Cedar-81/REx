import React, { ReactNode } from "react";
import Slider from "react-slick";
import { carouselSettings } from "../utils";

interface SliderWrapperProps {
  children: ReactNode;
}

class SliderWrapper extends React.Component<SliderWrapperProps> {
  render() {
    return <Slider {...carouselSettings}>{this.props.children}</Slider>;
  }
}

export default SliderWrapper;
