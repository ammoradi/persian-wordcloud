import { version } from '../../package.json';
import { Router } from 'express';
import speech89 from './speech89';
import speech97 from './speech97';
import commons from './commons';

export default ({ config, db }) => {
	let api = Router();

	// mount the speech89 resource
	api.use('/speech89', speech89({ config, db }));
	api.use('/speech97', speech97({ config, db }));
	api.use('/commons', commons({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
