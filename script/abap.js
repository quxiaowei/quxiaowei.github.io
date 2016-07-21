/*
Language: ABAP
Category: common
*/

function(hljs) {
	var STRING = {
		className: 'string',
		variants: [
			{
				begin: /\'/, end: /\'/,
			}
		]
	};

	var COMMENT = {
		className: 'comment',
		variants: {
			{
				begin: /^*|\"/, end: /$/,
			}
		}
	};

	var NUMBER = {
		className: 'number',
		relevance: 0,
		variants: [
			{begin: '-?[0-9]+(\.[0-9]+)?'}
		]
	};

	return {
		aliases: ['abap'],
		keywords: {
			keyword:
				'data type length call function exporting importing tables exceptions if else elseif endif do enddo begin end form endform header line select endselect update modify delete commit work rollback and wait seconds with length loop at endat endloop try catch return exit continue endtry move to move-corresponding assgin field-symbol concatenate into single into corresponding fields structure ref to transform types write source result value parameters select-options message',
			built_in:
				''
		},
		contains: [
			STRING,
			COMMENT,
			NUMBER,
		],
	};
}