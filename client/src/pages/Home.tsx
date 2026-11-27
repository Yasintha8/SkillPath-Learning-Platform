import FeaturedCourses from "../components/home/FeaturedCourses"
import { HeroSection } from "../components/home/HeroSection"

const Home = () => {
    return (
        <div className="bg-white text-secondary">
            <HeroSection />
            <FeaturedCourses />
        </div>
    )
}

export default Home