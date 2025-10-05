const raw = prompt ('input number or string');
const trimmed = raw?.trim();

switch (true) {
	case raw === null:
	    alert('ви скасували');
	break;
	case trimmed === '':
	    alert('Empty String');
	break;
	case Number.isNaN(Number(trimmed)):
	    alert('number is Ba_NaN');
	break;
	default:
	    alert('OK!');
}