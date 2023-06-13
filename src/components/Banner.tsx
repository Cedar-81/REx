import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  bannerCarouselSettings,
  fetchMovies,
  getLatestTVSeriesAndMovies,
} from "../utils";
import { BannerContent } from ".";
import { useQuery } from "react-query";

type BannerType = {
  type: string;
};

function Banner({ type }: BannerType) {
  const fetchData = () => {
    if (type == "all") {
      return getLatestTVSeriesAndMovies();
    } else if (type == "movie") {
      return fetchMovies("movie/popular");
    } else {
      return fetchMovies("tv/popular");
    }
  };

  const { data, isLoading, isError } = useQuery("bannershows", fetchData);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (isError) {
    return <section>Error occurred while fetching movies</section>;
  }

  return (
    <div>
      <Slider {...bannerCarouselSettings}>
        {data?.map((show: any, index: number) => (
          <BannerContent key={index} data={show} />
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
