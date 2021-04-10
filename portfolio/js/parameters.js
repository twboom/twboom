const parameters = [];
parameters.data = {};
parameters.get = function(param) { return (new URL(document.location)).searchParams.get(param) }

// Parameters
parameters.data.modal = parameters.get('modal')

// 'Export'
const pm = parameters.data;