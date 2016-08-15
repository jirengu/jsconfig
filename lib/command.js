var path = require('path');
var filecopy = require('filecopy');

function command(opts) {

	switch (opts.command){
		case 'gulp':
			filecopy(path.join(__dirname, '../sample/gulpfile.sample.js'), process.cwd(), {}, function(err) {
				if (err) new Error('初始化数据出错');
				console.log('已创建 gulp.sample.js');
			});
			break;
		case 'npm':
			filecopy(path.join(__dirname, '../sample/package.sample.json'), process.cwd(), {}, function(err) {
				if (err) new Error('初始化数据出错');
				console.log('已创建 package.sample.json');
			});
			break;
		case 'webpack':
			filecopy(path.join(__dirname, '../sample/webpack.config.sample.js'), process.cwd(), {}, function(err) {
				if (err) new Error('初始化数据出错');
				console.log('已创建 webpack.config.sample.js');
			});
			break;
		case 'all':
			filecopy(path.join(__dirname, '../sample/gulpfile.sample.js'), process.cwd(), {}, function(err) {
				if (err) new Error('初始化数据出错');
				console.log('已创建 gulp.sample.js');
			});
			filecopy(path.join(__dirname, '../sample/package.sample.js'), process.cwd(), {}, function(err) {
				if (err) new Error('初始化数据出错');
				console.log('已创建 package.sample.js');
			});
			filecopy(path.join(__dirname, '../sample/webpack.config.sample.js'), process.cwd(), {}, function(err) {
				if (err) new Error('初始化数据出错');
				console.log('已创建 webpack.config.sample.js');
			});
		default:
			console.log('输入命令出错');
	}


}

module.exports = command;