import { NextPage } from 'next';
import {withWunderGraph } from '../components/generated/nextjs';
import Dashboard from "../components/Dashboard";

const Home: NextPage = () => {
	return (<Dashboard/>)
};
export default withWunderGraph(Home);
