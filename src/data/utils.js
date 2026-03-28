const match = (needle, haystack) => {
	return haystack.toLowerCase().includes(needle.toLowerCase())
}

export { match }