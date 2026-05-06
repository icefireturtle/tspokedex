export function cleanInput(input: string): string[] {
	const splitInput: string[] = input.split(" ")
	const cleanedInput: string[] = []
	for (const word of splitInput) {
		if (word.length > 0) {
			cleanedInput.push(word.trim().toLowerCase());
		}
	}	
	console.log(cleanedInput);
	return cleanedInput;
}
