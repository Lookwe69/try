import { Result } from './result';

declare function _try<T>(callback: () => Promise<T>): Promise<Result<T>>;
declare function _try<T>(callback: () => T): Result<T>;
export { _try };
