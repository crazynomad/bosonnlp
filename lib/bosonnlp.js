'use strict';

var request = require('request')

var postOptions = {
};

module.exports = BosonNLP;

function BosonNLP (token) {
	postOptions.token = token
};

BosonNLP.prototype.tag = function (data, params, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/tag/analysis";
	var datas = parseDatas(data);
	sendPost(postOptions, datas, callback);
};

BosonNLP.prototype.ner = function (data, params, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/ner/analysis";
	var datas = parseDatas(data);
	sendPost(postOptions, datas, callback);
};

BosonNLP.prototype.extractKeywords = function (data, params, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/keywords/analysis";
	var datas = parseDatas(data);
	sendPost(postOptions, datas, callback);
};

BosonNLP.prototype.sentiment = function (data, params, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/sentiment/analysis";
	var datas = parseDatas(data);
	sendPost(postOptions, datas, callback);
};

BosonNLP.prototype.depparser = function (data, params, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/depparser/analysis";
	var datas = parseDatas(data);
	sendPost(postOptions, datas, callback);
};

BosonNLP.prototype.classify = function (data, params, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/classify/analysis";
	var datas = parseDatas(data);
	sendPost(postOptions, datas, callback);
};

BosonNLP.prototype.rate_limit_status = function (data, params, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/application/rate_limit_status.json";
	// 查询API 频率限制
	sendPost(postOptions, null, callback);
};
BosonNLP.prototype.suggest = function (data, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/suggest/analysis";
	var datas = parseDatas(data);
	sendPost(postOptions, datas, callback);
};
BosonNLP.prototype.summary = function (data, params, callback) {
	if(typeof params === 'function') {
		callback = params;
		postOptions.qs = null;
	} else {
		postOptions.qs = params;
	}
	postOptions.path = "/summary/analysis";
	var datas = parseDatas(data);
	sendPost(postOptions, datas, callback);
};

function parseDatas (data) {
	return JSON.stringify(data);
};

function sendPost (options, body, callback) {
	var reqOptions = {
	  url: `http://api.bosonnlp.com${options.path}`,
	  method: "POST",
	  headers: {
	    "Content-Type": "application/json",
	    "Accept": "application/json",
	    "X-Token": options.token
	  }
	};
	reqOptions.qs = options.qs
	reqOptions.form = body;
	request(reqOptions, function(err, res, body){
		if(err){
			return callback(err)
		}
		callback(null, body, res.headers)
	})
};

function encodeString (data) {
	data = "\"" + escape(data).replace(/\%/g, '\\') + "\"";
	data = restorePunctuation(data);
	return data;
};

function restorePunctuation (data) {
	data = data.replace(/\\A0/g, " ");
	data = data.replace(/\\A2/g, "\\u00A2");
	data = data.replace(/\\A3/g, "\\u00A3");
	data = data.replace(/\\A4/g, "\\u00A4");
	data = data.replace(/\\A5/g, "\\u00A5");
	data = data.replace(/\\A6/g, "\\u00A6");
	data = data.replace(/\\A7/g, "\\u00A7");
	data = data.replace(/\\A8/g, "\\u00A8");
	data = data.replace(/\\A9/g, "\\u00A9");
	data = data.replace(/\\AA/g, "\\u00AA");
	data = data.replace(/\\AB/g, "\\u00AB");
	data = data.replace(/\\AC/g, "\\u00AC");
	data = data.replace(/\\AD/g, "\\u00AD");
	data = data.replace(/\\AE/g, "\\u00AE");
	data = data.replace(/\\AF/g, "\\u00AF");
	data = data.replace(/\\B0/g, "\\u00B0");
	data = data.replace(/\\B1/g, "\\u00B1");
	data = data.replace(/\\B2/g, "\\u00B2");
	data = data.replace(/\\B3/g, "\\u00B3");
	data = data.replace(/\\B4/g, "\\u00B4");
	data = data.replace(/\\B5/g, "\\u00B5");
	data = data.replace(/\\B6/g, "\\u00B6");
	data = data.replace(/\\B7/g, ".");
	data = data.replace(/\\B8/g, "\\u00B8");
	data = data.replace(/\\B9/g, "\\u00B9");
	data = data.replace(/\\BA/g, "\\u00BA");
	data = data.replace(/\\BB/g, "\\u00BB");
	data = data.replace(/\\BC/g, "\\u00BC");
	data = data.replace(/\\BD/g, "\\u00BD");
	data = data.replace(/\\BE/g, "\\u00BE");
	data = data.replace(/\\BF/g, "\\u00BF");
	data = data.replace(/\\D7/g, " ");
	data = data.replace(/\\0A/g, " ");
	data = data.replace(/\\0D/g, " ");
	data = data.replace(/\\20/g, " ");
	data = data.replace(/\\21/g, "!");
	data = data.replace(/\\22/g, "\"");
	data = data.replace(/\\23/g, "#");
	data = data.replace(/\\24/g, "$");
	data = data.replace(/\\25/g, "%");
	data = data.replace(/\\26/g, "&");
	data = data.replace(/\\27/g, "\'");
	data = data.replace(/\\28/g, "(");
	data = data.replace(/\\29/g, ")");
	data = data.replace(/\\2C/g, ",");
	data = data.replace(/\\3A/g, ":");
	data = data.replace(/\\3B/g, ";");
	data = data.replace(/\\3C/g, "<");
	data = data.replace(/\\3D/g, "=");
	data = data.replace(/\\3E/g, ">");
	data = data.replace(/\\3F/g, "?");
	data = data.replace(/\\5B/g, "[");
	data = data.replace(/\\5D/g, "]");
	data = data.replace(/\\5E/g, "^");
	data = data.replace(/\\7B/g, "{");
	data = data.replace(/\\7C/g, "|");
	data = data.replace(/\\7D/g, "}");
	data = data.replace(/\\7E/g, "~");
	return data;
};

