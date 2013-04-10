/*
Copyright (c) 2013 Sam Decrock <sam.decrock@gmail.com>

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var httpreq = require('httpreq');

function Pushover(options) {
	if(!options.token) {
		throw new Error('No app token defined');
		return;
	}

	this.token = options.token;
	if(options.user)
		this.user = options.user;

	return this;
}

/**
 * send({[user,] [title,] message, title, ...)
 */
Pushover.prototype.send = function(options) {
	if(!options) {
		throw new Error('No options object provided');
		return;
	}
	var defaults = {
		token: this.token,
		user: this.user
	}
	for (var a in options) { defaults[a] = options[a]; }
	console.log(defaults);
	send(defaults);
}

function send(parameters, callback){
	httpreq.post("https://api.pushover.net/1/messages.json", { parameters: parameters}, function (err, res){
		if (callback && typeof callback === "function"){
			if(err){
				callback(err);
			}else{
				var response = JSON.parse(res.body);
				if(response.status != 1) {
					callback(response);
				} else {
					callback(null, response);
				}
			}
		}
	});
}

module.exports = Pushover;


