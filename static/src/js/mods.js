odoo.define('steersman_app_switcher.mods', function(require) {
	'use strict';
	var core = require('web.core');
	var ajax = require('web.ajax');
	ajax.loadXML('/steersman_app_switcher/static/src/xml/mods.xml', core.qweb);
});