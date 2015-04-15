var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * MySite Model
 * ==========
 */

var MySite = new keystone.List('MySite');

MySite.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
MySite.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Relationships
 */

MySite.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

MySite.defaultColumns = 'name, email, isAdmin';
MySite.register();
