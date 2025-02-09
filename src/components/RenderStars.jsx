import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = ({ stars }) => {
  
  const renderStars = (stars) => {
    let starElements = [];

    for (let i = 0; i < stars; i++) {
      starElements.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} className="text-yellow-500" />);
    }

    for (let i = stars; i < 5; i++) {
      starElements.push(<FontAwesomeIcon key={`empty-star-${i}`} icon={faStar} className="text-gray-400" />);
    }
    return starElements;
  };

  return <div className="flex gap-1">{renderStars(stars)}</div>;
};

export default Stars;
