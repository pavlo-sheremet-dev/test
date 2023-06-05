import homePicture from 'keyboard.jpg';
import { HomeJoinBtn, HomePagePic, Title } from './Home.styled';

const Home = () => {
  return (
    <>
      <HomePagePic src={homePicture} alt="keyboard" />
      <Title>Read, write and enjoy!</Title>
      <HomeJoinBtn to="/tweets">Join us</HomeJoinBtn>
    </>
  );
};

export default Home;
