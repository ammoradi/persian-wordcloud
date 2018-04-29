import resource from 'resource-router-middleware';
import common from '../models/common';

export default ({ config, db }) => resource({

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(common);
	}

});
