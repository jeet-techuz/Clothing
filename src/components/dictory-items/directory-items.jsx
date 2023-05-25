import { useNavigate } from "react-router-dom";
import {
  BackGroundImage,
  Body,
  DicrectoryItmesContainer,
} from "./directory.style.jsx";

const DicrectoryItmes = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DicrectoryItmesContainer onClick={onNavigateHandler}>
      <BackGroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DicrectoryItmesContainer>
  );
};
export default DicrectoryItmes;
