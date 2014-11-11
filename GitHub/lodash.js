var _=require('lodash');

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
_.template(li.html(), { company: 'Github' });
