import resource from 'resource-router-middleware';
import common from '../models/common';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'common',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let facet = common.find( facet => facet.id===id ),
			err = facet ? null : 'Not found';
		callback(err, facet);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(common);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = common.length.toString(36);
		common.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ facet }, res) {
		res.json(facet);
	},

	/** PUT /:id - Update a given entity */
	update({ facet, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				facet[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ facet }, res) {
		common.splice(common.indexOf(facet), 1);
		res.sendStatus(204);
	}
});