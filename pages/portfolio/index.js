import Carousel from 'react-multi-carousel';
import responsiveCarousel from './responsiveCarousel'
import 'react-multi-carousel/lib/styles.css';
import Badge from '../../SharedComponents/Badge';
import Project from '../../SharedComponents/Project';

export default function Portfolio({ badges, projects }) {
    return (
        <div className="my-12 mx-64">
            <div className="badges mb-8">
                <h2 className="text-6xl header mb-2">Badge<span className="text-yellow-400">s</span></h2>
                <Carousel 
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    responsive={responsiveCarousel}
                >
                    {badges.map(badge => <Badge badge={badge} />)}
                </Carousel>
            </div>
            <div className="projects">
                <h2 className="text-6xl header mb-8">Project<span className="text-purple-400">s</span></h2>
                <div className="project-container">
                    {projects.map(project => <Project project={project} />)}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const badges = [{ name: "Azure 900" }, { name: "Azure 900" },{ name: "Azure 900" }, { name: "Azure 900" },{ name: "Azure 900" }, { name: "Azure 900" }]
    const projects = [{ name: "MeMonkey" }, { name: "Overwatch Tournament" },{ name: "MeMonkey" }, { name: "Overwatch Tournament" },{ name: "MeMonkey" }, { name: "Overwatch Tournament" },{ name: "MeMonkey" }, { name: "Overwatch Tournament" }]
    return { props: { badges, projects } };
}