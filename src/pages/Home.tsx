import BreifAbout from '../components/BreifAbout';
import BreifNews from '../components/BriefNews';
import Hero from '../components/Hero';
import '../styles/Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Hero currentPage="home" />
            <BreifAbout />
            <BreifNews />
        </div>
    );
};

export default Home;
