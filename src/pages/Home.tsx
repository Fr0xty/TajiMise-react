import '../styles/Home.scss';
import '../styles/HomeHeaders.scss';

import BreifAbout from '../components/BreifAbout';
import BreifNews from '../components/BriefNews';
import Hero from '../components/Hero';

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
