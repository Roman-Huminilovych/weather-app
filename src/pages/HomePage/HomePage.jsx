import ParticlesLines from 'components/ParticlesLines/ParticlesLines';
import Weather from 'components/WeatherApp/WeatherApp';
import { HomeTitle, WrapperHomePage } from './HomePage.styled';

const HomePage = () => {
  return (
    <WrapperHomePage>
      <ParticlesLines />
      <Weather />
      <HomeTitle> Hello, this is your WeatherApp.</HomeTitle>
    </WrapperHomePage>
  );
};

export default HomePage;
