import resource from 'resource-router-middleware';
import speech89 from '../models/speech89';

export default ({ config, db }) => resource({

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(speech89);
	}

});
