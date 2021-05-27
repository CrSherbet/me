export default ({ project }) => {
	return (
		<div className="">
			{project.name} HI
		</div>
	)
}

export async function getStaticPaths() {
	const paths = [{ params: { project: "MeMonkey" } }, { params: { project: "Overwatch Tournament" } }]
	return { paths, fallback: false };
}

export async function getStaticProps() {
	const project = { name: "MeMonkey" }
	return { props: { project } };
}