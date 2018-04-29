import resource from 'resource-router-middleware';
import speech97 from '../models/speech97';

export default ({ config, db }) => resource({

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(speech97);
	}

});
