import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Stars from "./RenderStars";
import DynamicIcon from "./DynamicIcon";
import Carousel from "./Carrousel";

const Card = ({ id, name, stars, address, boardbases, images, amenities }) => {
  const visibleAmenities = amenities?.slice(0, 6);
  const remainingAmenities = amenities?.slice(6);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-screen-lg w-full sm:px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold ml-6">{name}</h3>
          <Stars stars={stars} className="mr-4" />
        </div>
        <p className="text-blue-500 flex items-center gap-2 ml-6">
          <FontAwesomeIcon icon={faLocationDot} />
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {address}
          </a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div className="w-full h-96 md:w-[400px] rounded-lg overflow-hidden">
            <Carousel images={images} />
          </div>
          <div className="w-full">
            <ul className="border-b pb-2 mb-4">
              {boardbases?.map((boardbase, index) => (
                <li
                  key={`${id}-board-${index}`}
                  className="flex items-center gap-2 font-semibold text-lg"
                >
                  <DynamicIcon word={boardbase} />
                  {boardbase}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="flex flex-col gap-2">
                {visibleAmenities?.map((amenity, index) => (
                  <li key={`${id}-amenity-${index}`} className="flex items-center gap-2">
                    <DynamicIcon word={amenity.code} />
                    {amenity.name}
                  </li>
                ))}
              </ul>

              {remainingAmenities?.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {remainingAmenities.map((amenity, index) => (
                    <li key={`${id}-remaining-amenity-${index}`} className="flex items-center gap-2">
                      <DynamicIcon word={amenity.code} />
                      {amenity.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
