export const isEmail = str =>
	str.indexOf('@') >= 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
