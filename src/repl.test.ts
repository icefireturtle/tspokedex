import { cleanInput } from "./repl.js"
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
])("cleanInput($input)", ({ input, expected }) => {
	const actual = cleanInput(input);
	test(`Expected: ${expected}`, () => {
		expect(actual).toHaveLength(expected.length);
    		for (const i in expected) {
			expect(actual[i]).toBe(expected[i]);
    }
  });
});
