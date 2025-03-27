import { Result } from './result.js';

export function _try(callback) {
	try {
		const result = callback();
		if (result instanceof Promise) {
			return result.then(
				(value) => Result.ok(value),
				(e) => Result.error(e),
			);
		}
		return Result.ok(result);
	} catch (e) {
		return Result.error(e);
	}
}
