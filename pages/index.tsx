import { NextPage } from 'next';
import { useQuery, withWunderGraph } from '../components/generated/nextjs';
import AppHome from "../components/AppHome";

const Home: NextPage = () => {
	return (
		<AppHome/>
	)
};
export default withWunderGraph(Home);
