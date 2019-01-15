exports.questions = [
	{
		type: 'input',
		name: 'description',
		message: 'Description of this project',
		default: 'A Electron Application.'
	},
	{
		type: 'input',
		name: 'product_name',
		message: 'Product name of this application',
		default: 'App Name'
	},
	{
		type: 'input',
		name: 'app_id',
		message: 'App ID of this application',
		default: 'com.example.appid'
	},
	{
		type: 'confirm',
		name: 'eslint',
		message: 'Enable ESLint?',
		default: true
	}
];

exports.preprocess = function (answer, module) {
	if (!answer.eslint) {
		module.rm('./.eslintrc.js');
	}
}
