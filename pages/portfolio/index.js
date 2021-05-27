import Link from 'next/link'

export default function Portfolio({ projects }) {
    return (
        <div className="">
            {projects.map(project => <Link href={`/portfolio/${project.name}`}>{project.name}</Link>)}
        </div>
    )
}

export async function getStaticProps() {
    const projects = [{ name: "MeMonkey" }, { name: "Overwatch Tournament" }]
    return { props: { projects } };
}