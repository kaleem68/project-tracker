import { NextPage } from 'next';
import { useQuery, withWunderGraph } from '../components/generated/nextjs';

const Home: NextPage = () => {
	const projects = useQuery.GetProjects();
	return (
		<div>
			{projects.result.status === "ok" &&
				projects.result.data["db_findManyProject"].map(project=> {
					return(
						<div key={project.id}>{project.name}</div>
					)
				})
			}
		</div>
	)
};
export default withWunderGraph(Home);
