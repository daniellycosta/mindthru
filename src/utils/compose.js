export const compose = (...functions) => args =>
	functions.reduceRight((arg, fn) => fn(arg), args)
