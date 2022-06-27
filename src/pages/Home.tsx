import BreifAbout from '../components/BreifAbout';
import Hero from '../components/Hero';
import '../styles/Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Hero currentPage="home" />
            <BreifAbout />
        </div>
    );
};

export default Home;
