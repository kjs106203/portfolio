import { Route } from 'react-router-dom';
import './App.css';
import Port from './components/Port';
import Resume from './components/Resume';

function App() {
	return (
		<div>
			<Route path="/" exact component={Resume} />
			<Route path="/port" component={Port} />
		</div>
	);
}

export default App;
