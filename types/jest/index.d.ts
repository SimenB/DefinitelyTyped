// Type definitions for Jest 28.0
// Project: https://jestjs.io/
// Definitions by: Asana (https://asana.com)
//                 Ivo Stratev <https://github.com/NoHomey>
//                 jwbay <https://github.com/jwbay>
//                 Alexey Svetliakov <https://github.com/asvetliakov>
//                 Alex Jover Morales <https://github.com/alexjoverm>
//                 Allan Lukwago <https://github.com/epicallan>
//                 Ika <https://github.com/ikatyang>
//                 Waseem Dahman <https://github.com/wsmd>
//                 Jamie Mason <https://github.com/JamieMason>
//                 Douglas Duteil <https://github.com/douglasduteil>
//                 Ahn <https://github.com/ahnpnl>
//                 Jeff Lau <https://github.com/UselessPickles>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Martin Hochel <https://github.com/hotell>
//                 Sebastian Sebald <https://github.com/sebald>
//                 Andy <https://github.com/andys8>
//                 Antoine Brault <https://github.com/antoinebrault>
//                 Gregor Stamać <https://github.com/gstamac>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Alex Bolenok <https://github.com/quassnoi>
//                 Mario Beltrán Alarcón <https://github.com/Belco90>
//                 Tony Hallett <https://github.com/tonyhallett>
//                 Jason Yu <https://github.com/ycmjason>
//                 Devansh Jethmalani <https://github.com/devanshj>
//                 Pawel Fajfer <https://github.com/pawfa>
//                 Regev Brody <https://github.com/regevbr>
//                 Alexandre Germain <https://github.com/gerkindev>
//                 Adam Jones <https://github.com/domdomegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

declare var beforeAll: jest.Lifecycle;
declare var beforeEach: jest.Lifecycle;
declare var afterAll: jest.Lifecycle;
declare var afterEach: jest.Lifecycle;
declare var describe: jest.Describe;
declare var fdescribe: jest.Describe;
declare var xdescribe: jest.Describe;
declare var it: jest.It;
declare var fit: jest.It;
declare var xit: jest.It;
declare var test: jest.It;
declare var xtest: jest.It;

declare const expect: jest.Expect;

type ExtractEachCallbackArgs<T extends ReadonlyArray<any>> = {
    1: [T[0]],
    2: [T[0], T[1]],
    3: [T[0], T[1], T[2]],
    4: [T[0], T[1], T[2], T[3]],
    5: [T[0], T[1], T[2], T[3], T[4]],
    6: [T[0], T[1], T[2], T[3], T[4], T[5]],
    7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]],
    8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]],
    9: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]],
    10: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]],
    'fallback': Array<(T extends ReadonlyArray<infer U>? U: any)>
}[
    T extends Readonly<[any]> ? 1
        : T extends Readonly<[any, any]> ? 2
        : T extends Readonly<[any, any, any]> ? 3
        : T extends Readonly<[any, any, any, any]> ? 4
        : T extends Readonly<[any, any, any, any, any]> ? 5
        : T extends Readonly<[any, any, any, any, any, any]> ? 6
        : T extends Readonly<[any, any, any, any, any, any, any]> ? 7
        : T extends Readonly<[any, any, any, any, any, any, any, any]> ? 8
        : T extends Readonly<[any, any, any, any, any, any, any, any, any]> ? 9
        : T extends Readonly<[any, any, any, any, any, any, any, any, any, any]> ? 10
        : 'fallback'
];

declare namespace jest {
    /**
     * Disables automatic mocking in the module loader.
     */
    function autoMockOff(): typeof jest;
    /**
     * Enables automatic mocking in the module loader.
     */
    function autoMockOn(): typeof jest;
    /**
     * Clears the mock.calls and mock.instances properties of all mocks.
     * Equivalent to calling .mockClear() on every mocked function.
     */
    function clearAllMocks(): typeof jest;
    /**
     * Use the automatic mocking system to generate a mocked version of the given module.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function createMockFromModule<T>(moduleName: string): T;
    /**
     * Resets the state of all mocks.
     * Equivalent to calling .mockReset() on every mocked function.
     */
    function resetAllMocks(): typeof jest;
    /**
     * available since Jest 21.1.0
     * Restores all mocks back to their original value.
     * Equivalent to calling .mockRestore on every mocked function.
     * Beware that jest.restoreAllMocks() only works when mock was created with
     * jest.spyOn; other mocks will require you to manually restore them.
     */
    function restoreAllMocks(): typeof jest;
    /**
     * Removes any pending timers from the timer system. If any timers have
     * been scheduled, they will be cleared and will never have the opportunity
     * to execute in the future.
     */
    function clearAllTimers(): typeof jest;
    /**
     * Returns the number of fake timers still left to run.
     */
    function getTimerCount(): number;
    /**
     * Set the current system time used by fake timers. Simulates a user
     * changing the system clock while your program is running. It affects the
     * current time but it does not in itself cause e.g. timers to fire; they
     * will fire exactly as they would have done without the call to
     * jest.setSystemTime().
     *
     * > Note: This function is only available when using modern fake timers
     * > implementation
     */
    function setSystemTime(now?: number | Date): void;
    /**
     * When mocking time, Date.now() will also be mocked. If you for some
     * reason need access to the real current time, you can invoke this
     * function.
     *
     * > Note: This function is only available when using modern fake timers
     * > implementation
     */
    function getRealSystemTime(): number;
    /**
     * Indicates that the module system should never return a mocked version
     * of the specified module, including all of the specificied module's dependencies.
     */
    function deepUnmock(moduleName: string): typeof jest;
    /**
     * Disables automatic mocking in the module loader.
     */
    function disableAutomock(): typeof jest;
    /**
     * Mocks a module with an auto-mocked version when it is being required.
     */
    function doMock(moduleName: string, factory?: () => unknown, options?: MockOptions): typeof jest;
    /**
     * Indicates that the module system should never return a mocked version
     * of the specified module from require() (e.g. that it should always return the real module).
     */
    function dontMock(moduleName: string): typeof jest;
    /**
     * Enables automatic mocking in the module loader.
     */
    function enableAutomock(): typeof jest;
    /**
     * Creates a mock function. Optionally takes a mock implementation.
     */
    function fn(): Mock;
    /**
     * Creates a mock function. Optionally takes a mock implementation.
     */
    function fn<T, Y extends any[]>(implementation?: (...args: Y) => T): Mock<T, Y>;
    /**
     * (renamed to `createMockFromModule` in Jest 26.0.0+)
     * Use the automatic mocking system to generate a mocked version of the given module.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function genMockFromModule<T>(moduleName: string): T;
    /**
     * Returns whether the given function is a mock function.
     */
    function isMockFunction(fn: any): fn is Mock;
    /**
     * Mocks a module with an auto-mocked version when it is being required.
     */
    function mock(moduleName: string, factory?: () => unknown, options?: MockOptions): typeof jest;

    /**
     * The mocked test helper provides typings on your mocked modules and even
     * their deep methods, based on the typing of its source. It makes use of
     * the latest TypeScript feature, so you even have argument types
     * completion in the IDE (as opposed to jest.MockInstance).
     *
     * Note: while it needs to be a function so that input type is changed, the helper itself does nothing else than returning the given input value.
     */
     function mocked<T>(item: T, deep?: false): MaybeMocked<T>;
    /**
     * The mocked test helper provides typings on your mocked modules and even
     * their deep methods, based on the typing of its source. It makes use of
     * the latest TypeScript feature, so you even have argument types
     * completion in the IDE (as opposed to jest.MockInstance).
     *
     * Note: while it needs to be a function so that input type is changed, the helper itself does nothing else than returning the given input value.
     */
     function mocked<T>(item: T, deep: true): MaybeMockedDeep<T>;
    /**
     * Returns the actual module instead of a mock, bypassing all checks on
     * whether the module should receive a mock implementation or not.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function requireActual<TModule extends {} = any>(moduleName: string): TModule;
    /**
     * Returns a mock module instead of the actual module, bypassing all checks
     * on whether the module should be required normally or not.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function requireMock<TModule extends {} = any>(moduleName: string): TModule;
    /**
     * Resets the module registry - the cache of all required modules. This is
     * useful to isolate modules where local state might conflict between tests.
     */
    function resetModules(): typeof jest;
    /**
     * Creates a sandbox registry for the modules that are loaded inside the callback function..
     * This is useful to isolate specific modules for every test so that local module state doesn't conflict between tests.
     */
    function isolateModules(fn: () => void): typeof jest;
    /**
     * Runs failed tests n-times until they pass or until the max number of retries is exhausted.
     * This only works with jest-circus!
     */
    function retryTimes(numRetries: number): typeof jest;
    /**
     * Exhausts tasks queued by setImmediate().
     * > Note: This function is only available when using modern fake timers
     * > implementation
     */
    function runAllImmediates(): typeof jest;
    /**
     * Exhausts the micro-task queue (usually interfaced in node via process.nextTick).
     */
    function runAllTicks(): typeof jest;
    /**
     * Exhausts both the macro-task queue (i.e., all tasks queued by setTimeout(),
     * setInterval(), and setImmediate()) and the micro-task queue (usually interfaced
     * in node via process.nextTick).
     */
    function runAllTimers(): typeof jest;
    /**
     * Executes only the macro-tasks that are currently pending (i.e., only the
     * tasks that have been queued by setTimeout() or setInterval() up to this point).
     * If any of the currently pending macro-tasks schedule new macro-tasks,
     * those new tasks will not be executed by this call.
     */
    function runOnlyPendingTimers(): typeof jest;
    /**
     * Advances all timers by msToRun milliseconds. All pending "macro-tasks" that have been
     * queued via setTimeout() or setInterval(), and would be executed within this timeframe
     * will be executed.
     */
    function advanceTimersByTime(msToRun: number): typeof jest;
    /**
     * Advances all timers by the needed milliseconds so that only the next
     * timeouts/intervals will run. Optionally, you can provide steps, so it
     * will run steps amount of next timeouts/intervals.
     */
    function advanceTimersToNextTimer(step?: number): void;
    /**
     * Explicitly supplies the mock object that the module system should return
     * for the specified module.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    function setMock<T>(moduleName: string, moduleExports: T): typeof jest;
    /**
     * Set the default timeout interval for tests and before/after hooks in milliseconds.
     * Note: The default timeout interval is 5 seconds if this method is not called.
     */
    function setTimeout(timeout: number): typeof jest;
    /**
     * Creates a mock function similar to jest.fn but also tracks calls to `object[methodName]`
     *
     * Note: By default, jest.spyOn also calls the spied method. This is different behavior from most
     * other test libraries.
     *
     * @example
     *
     * const video = require('./video');
     *
     * test('plays video', () => {
     *   const spy = jest.spyOn(video, 'play');
     *   const isPlaying = video.play();
     *
     *   expect(spy).toHaveBeenCalled();
     *   expect(isPlaying).toBe(true);
     *
     *   spy.mockReset();
     *   spy.mockRestore();
     * });
     */
    function spyOn<T extends {}, M extends NonFunctionPropertyNames<Required<T>>>(
        object: T,
        method: M,
        accessType: 'get'
    ): SpyInstance<Required<T>[M], []>;
    function spyOn<T extends {}, M extends NonFunctionPropertyNames<Required<T>>>(
        object: T,
        method: M,
        accessType: 'set'
    ): SpyInstance<void, [Required<T>[M]]>;
    function spyOn<T extends {}, M extends FunctionPropertyNames<Required<T>>>(
        object: T,
        method: M
    ): Required<T>[M] extends (...args: any[]) => any
        ? SpyInstance<ReturnType<Required<T>[M]>, ArgsType<Required<T>[M]>>
        : never;
    function spyOn<T extends {}, M extends ConstructorPropertyNames<Required<T>>>(
        object: T,
        method: M
    ): Required<T>[M] extends new (...args: any[]) => any
        ? SpyInstance<InstanceType<Required<T>[M]>, ConstructorArgsType<Required<T>[M]>>
        : never;
    /**
     * Indicates that the module system should never return a mocked version of
     * the specified module from require() (e.g. that it should always return the real module).
     */
    function unmock(moduleName: string): typeof jest;
    /**
     * Instructs Jest to use fake versions of the standard timer functions.
     */
    function useFakeTimers(implementation?: 'modern' | 'legacy'): typeof jest;
    /**
     * Instructs Jest to use the real versions of the standard timer functions.
     */
    function useRealTimers(): typeof jest;

    interface MockOptions {
        virtual?: boolean | undefined;
    }

    type MockableFunction = (...args: any[]) => any;
    type MethodKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? K : never }[keyof T];
    type PropertyKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? never : K }[keyof T];
    type ArgumentsOf<T> = T extends (...args: infer A) => any ? A : never;
    type ConstructorArgumentsOf<T> = T extends new (...args: infer A) => any ? A : never;

    interface MockWithArgs<T extends MockableFunction> extends MockInstance<ReturnType<T>, ArgumentsOf<T>> {
        new (...args: ConstructorArgumentsOf<T>): T;
        (...args: ArgumentsOf<T>): ReturnType<T>;
    }
    type MaybeMockedConstructor<T> = T extends new (...args: any[]) => infer R
        ? MockInstance<R, ConstructorArgumentsOf<T>>
        : T;
    type MockedFn<T extends MockableFunction> = MockWithArgs<T> & { [K in keyof T]: T[K] };
    type MockedFunctionDeep<T extends MockableFunction> = MockWithArgs<T> & MockedObjectDeep<T>;
    type MockedObject<T> = MaybeMockedConstructor<T> & {
        [K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFn<T[K]> : T[K];
    } & { [K in PropertyKeysOf<T>]: T[K] };
    type MockedObjectDeep<T> = MaybeMockedConstructor<T> & {
        [K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFunctionDeep<T[K]> : T[K];
    } & { [K in PropertyKeysOf<T>]: MaybeMockedDeep<T[K]> };
    type MaybeMockedDeep<T> = T extends MockableFunction
        ? MockedFunctionDeep<T>
        : T extends object // eslint-disable-line @typescript-eslint/ban-types
        ? MockedObjectDeep<T>
        : T;
    // eslint-disable-next-line @typescript-eslint/ban-types
    type MaybeMocked<T> = T extends MockableFunction ? MockedFn<T> : T extends object ? MockedObject<T> : T;
    type EmptyFunction = () => void;
    type ArgsType<T> = T extends (...args: infer A) => any ? A : never;
    type ConstructorArgsType<T> = T extends new (...args: infer A) => any ? A : never;
    type RejectedValue<T> = T extends PromiseLike<any> ? any : never;
    type ResolvedValue<T> = T extends PromiseLike<infer U> ? U | T : never;
    // see https://github.com/Microsoft/TypeScript/issues/25215
    type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K }[keyof T] &
        string;
    type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never }[keyof T] &
        string;
    type ConstructorPropertyNames<T> = { [K in keyof T]: T[K] extends new (...args: any[]) => any ? K : never }[keyof T] &
        string;

    interface DoneCallback {
        (...args: any[]): any;
        fail(error?: string | { message: string }): any;
    }

    type ProvidesCallback = ((cb: DoneCallback) => void | undefined) | (() => Promise<unknown>);
    type ProvidesHookCallback = (() => any) | ProvidesCallback;

    type Lifecycle = (fn: ProvidesHookCallback, timeout?: number) => any;

    interface FunctionLike {
        readonly name: string;
    }

    interface Each {
        // Exclusively arrays.
        <T extends any[] | [any]>(cases: ReadonlyArray<T>): (name: string, fn: (...args: T) => any, timeout?: number) => void;
        <T extends ReadonlyArray<any>>(cases: ReadonlyArray<T>): (name: string, fn: (...args: ExtractEachCallbackArgs<T>) => any, timeout?: number) => void;
        // Not arrays.
        <T>(cases: ReadonlyArray<T>): (name: string, fn: (...args: T[]) => any, timeout?: number) => void;
        (cases: ReadonlyArray<ReadonlyArray<any>>): (
            name: string,
            fn: (...args: any[]) => any,
            timeout?: number
        ) => void;
        (strings: TemplateStringsArray, ...placeholders: any[]): (
            name: string,
            fn: (arg: any) => any,
            timeout?: number
        ) => void;
    }

    /**
     * Creates a test closure
     */
    interface It {
        /**
         * Creates a test closure.
         *
         * @param name The name of your test
         * @param fn The function for your test
         * @param timeout The timeout for an async function test
         */
        (name: string, fn?: ProvidesCallback, timeout?: number): void;
        /**
         * Only runs this test in the current file.
         */
        only: It;
        /**
         * Skips running this test in the current file.
         */
        skip: It;
        /**
         * Sketch out which tests to write in the future.
         */
        todo: It;
        /**
         * Experimental and should be avoided.
         */
        concurrent: It;
        /**
         * Use if you keep duplicating the same test with different data. `.each` allows you to write the
         * test once and pass data in.
         *
         * `.each` is available with two APIs:
         *
         * #### 1  `test.each(table)(name, fn)`
         *
         * - `table`: Array of Arrays with the arguments that are passed into the test fn for each row.
         * - `name`: String the title of the test block.
         * - `fn`: Function the test to be ran, this is the function that will receive the parameters in each row as function arguments.
         *
         *
         * #### 2  `test.each table(name, fn)`
         *
         * - `table`: Tagged Template Literal
         * - `name`: String the title of the test, use `$variable` to inject test data into the test title from the tagged template expressions.
         * - `fn`: Function the test to be ran, this is the function that will receive the test data object..
         *
         * @example
         *
         * // API 1
         * test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
         *   '.add(%i, %i)',
         *   (a, b, expected) => {
         *     expect(a + b).toBe(expected);
         *   },
         * );
         *
         * // API 2
         * test.each`
         * a    | b    | expected
         * ${1} | ${1} | ${2}
         * ${1} | ${2} | ${3}
         * ${2} | ${1} | ${3}
         * `('returns $expected when $a is added $b', ({a, b, expected}) => {
         *    expect(a + b).toBe(expected);
         * });
         *
         */
        each: Each;
    }

    interface Describe {
        // tslint:disable-next-line ban-types
        (name: number | string | Function | FunctionLike, fn: EmptyFunction): void;
        /** Only runs the tests inside this `describe` for the current file */
        only: Describe;
        /** Skips running the tests inside this `describe` for the current file */
        skip: Describe;
        each: Each;
    }

    type CustomMatcher = import('@jest/expect').MatcherFunction;
    type MatcherState = import('@jest/expect').MatcherState;

    type SnapshotSerializerPlugin = import('pretty-format').Plugin;

    type Expect = import('@jest/expect').JestExpect;

    interface Constructable {
        new (...args: any[]): any;
    }

    interface Mock<T = any, Y extends any[] = any> extends Function, MockInstance<T, Y> {
        new (...args: Y): T;
        (...args: Y): T;
    }

    interface SpyInstance<T = any, Y extends any[] = any> extends MockInstance<T, Y> {}

    /**
     * Represents a function that has been spied on.
     */
    type SpiedFunction<T extends (...args: any[]) => any> = SpyInstance<ReturnType<T>, ArgsType<T>>;

    /**
     * Wrap a function with mock definitions
     *
     * @example
     *
     *  import { myFunction } from "./library";
     *  jest.mock("./library");
     *
     *  const mockMyFunction = myFunction as jest.MockedFunction<typeof myFunction>;
     *  expect(mockMyFunction.mock.calls[0][0]).toBe(42);
     */
    type MockedFunction<T extends (...args: any[]) => any> = MockInstance<ReturnType<T>, ArgsType<T>> & T;

    /**
     * Wrap a class with mock definitions
     *
     * @example
     *
     *  import { MyClass } from "./library";
     *  jest.mock("./library");
     *
     *  const mockedMyClass = MyClass as jest.MockedClass<typeof MyClass>;
     *
     *  expect(mockedMyClass.mock.calls[0][0]).toBe(42); // Constructor calls
     *  expect(mockedMyClass.prototype.myMethod.mock.calls[0][0]).toBe(42); // Method calls
     */

    type MockedClass<T extends Constructable> = MockInstance<
        InstanceType<T>,
        T extends new (...args: infer P) => any ? P : never
    > & {
        prototype: T extends { prototype: any } ? Mocked<T['prototype']> : never;
    } & T;

    /**
     * Wrap an object or a module with mock definitions
     *
     * @example
     *
     *  jest.mock("../api");
     *  import * as api from "../api";
     *
     *  const mockApi = api as jest.Mocked<typeof api>;
     *  api.MyApi.prototype.myApiMethod.mockImplementation(() => "test");
     */
    type Mocked<T> = {
        [P in keyof T]: T[P] extends (...args: any[]) => any
            ? MockInstance<ReturnType<T[P]>, ArgsType<T[P]>>
            : T[P] extends Constructable
            ? MockedClass<T[P]>
            : T[P]
    } &
        T;

    interface MockInstance<T, Y extends any[]> {
        /** Returns the mock name string set by calling `mockFn.mockName(value)`. */
        getMockName(): string;
        /** Provides access to the mock's metadata */
        mock: MockContext<T, Y>;
        /**
         * Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.
         *
         * Often this is useful when you want to clean up a mock's usage data between two assertions.
         *
         * Beware that `mockClear` will replace `mockFn.mock`, not just `mockFn.mock.calls` and `mockFn.mock.instances`.
         * You should therefore avoid assigning mockFn.mock to other variables, temporary or not, to make sure you
         * don't access stale data.
         */
        mockClear(): this;
        /**
         * Resets all information stored in the mock, including any initial implementation and mock name given.
         *
         * This is useful when you want to completely restore a mock back to its initial state.
         *
         * Beware that `mockReset` will replace `mockFn.mock`, not just `mockFn.mock.calls` and `mockFn.mock.instances`.
         * You should therefore avoid assigning mockFn.mock to other variables, temporary or not, to make sure you
         * don't access stale data.
         */
        mockReset(): this;
        /**
         * Does everything that `mockFn.mockReset()` does, and also restores the original (non-mocked) implementation.
         *
         * This is useful when you want to mock functions in certain test cases and restore the original implementation in others.
         *
         * Beware that `mockFn.mockRestore` only works when mock was created with `jest.spyOn`. Thus you have to take care of restoration
         * yourself when manually assigning `jest.fn()`.
         *
         * The [`restoreMocks`](https://jestjs.io/docs/en/configuration.html#restoremocks-boolean) configuration option is available
         * to restore mocks automatically between tests.
         */
        mockRestore(): void;
        /**
         * Returns the function that was set as the implementation of the mock (using mockImplementation).
         */
        getMockImplementation(): ((...args: Y) => T) | undefined;
        /**
         * Accepts a function that should be used as the implementation of the mock. The mock itself will still record
         * all calls that go into and instances that come from itself – the only difference is that the implementation
         * will also be executed when the mock is called.
         *
         * Note: `jest.fn(implementation)` is a shorthand for `jest.fn().mockImplementation(implementation)`.
         */
        mockImplementation(fn?: (...args: Y) => T): this;
        /**
         * Accepts a function that will be used as an implementation of the mock for one call to the mocked function.
         * Can be chained so that multiple function calls produce different results.
         *
         * @example
         *
         * const myMockFn = jest
         *   .fn()
         *    .mockImplementationOnce(cb => cb(null, true))
         *    .mockImplementationOnce(cb => cb(null, false));
         *
         * myMockFn((err, val) => console.log(val)); // true
         *
         * myMockFn((err, val) => console.log(val)); // false
         */
        mockImplementationOnce(fn: (...args: Y) => T): this;
        /** Sets the name of the mock`. */
        mockName(name: string): this;
        /**
         * Just a simple sugar function for:
         *
         * @example
         *
         *   jest.fn(function() {
         *     return this;
         *   });
         */
        mockReturnThis(): this;
        /**
         * Accepts a value that will be returned whenever the mock function is called.
         *
         * @example
         *
         * const mock = jest.fn();
         * mock.mockReturnValue(42);
         * mock(); // 42
         * mock.mockReturnValue(43);
         * mock(); // 43
         */
        mockReturnValue(value: T): this;
        /**
         * Accepts a value that will be returned for one call to the mock function. Can be chained so that
         * successive calls to the mock function return different values. When there are no more
         * `mockReturnValueOnce` values to use, calls will return a value specified by `mockReturnValue`.
         *
         * @example
         *
         * const myMockFn = jest.fn()
         *   .mockReturnValue('default')
         *   .mockReturnValueOnce('first call')
         *   .mockReturnValueOnce('second call');
         *
         * // 'first call', 'second call', 'default', 'default'
         * console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
         *
         */
        mockReturnValueOnce(value: T): this;
        /**
         * Simple sugar function for: `jest.fn().mockImplementation(() => Promise.resolve(value));`
         */
        mockResolvedValue(value: ResolvedValue<T>): this;
        /**
         * Simple sugar function for: `jest.fn().mockImplementationOnce(() => Promise.resolve(value));`
         *
         * @example
         *
         * test('async test', async () => {
         *  const asyncMock = jest
         *    .fn()
         *    .mockResolvedValue('default')
         *    .mockResolvedValueOnce('first call')
         *    .mockResolvedValueOnce('second call');
         *
         *  await asyncMock(); // first call
         *  await asyncMock(); // second call
         *  await asyncMock(); // default
         *  await asyncMock(); // default
         * });
         *
         */
        mockResolvedValueOnce(value: ResolvedValue<T>): this;
        /**
         * Simple sugar function for: `jest.fn().mockImplementation(() => Promise.reject(value));`
         *
         * @example
         *
         * test('async test', async () => {
         *   const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));
         *
         *   await asyncMock(); // throws "Async error"
         * });
         */
        mockRejectedValue(value: RejectedValue<T>): this;

        /**
         * Simple sugar function for: `jest.fn().mockImplementationOnce(() => Promise.reject(value));`
         *
         * @example
         *
         * test('async test', async () => {
         *  const asyncMock = jest
         *    .fn()
         *    .mockResolvedValueOnce('first call')
         *    .mockRejectedValueOnce(new Error('Async error'));
         *
         *  await asyncMock(); // first call
         *  await asyncMock(); // throws "Async error"
         * });
         *
         */
        mockRejectedValueOnce(value: RejectedValue<T>): this;
    }

    /**
     * Represents the result of a single call to a mock function with a return value.
     */
    interface MockResultReturn<T> {
        type: 'return';
        value: T;
    }
    /**
     * Represents the result of a single incomplete call to a mock function.
     */
    interface MockResultIncomplete {
        type: 'incomplete';
        value: undefined;
    }
    /**
     * Represents the result of a single call to a mock function with a thrown error.
     */
    interface MockResultThrow {
        type: 'throw';
        value: any;
    }

    type MockResult<T> = MockResultReturn<T> | MockResultThrow | MockResultIncomplete;

    interface MockContext<T, Y extends any[]> {
        calls: Y[];
        instances: T[];
        invocationCallOrder: number[];
        /**
         * List of results of calls to the mock function.
         */
        results: Array<MockResult<T>>;
    }
}

// Jest ships with a copy of Jasmine. They monkey-patch its APIs and divergence/deprecation are expected.
// Relevant parts of Jasmine's API are below so they can be changed and removed over time.
// This file can't reference jasmine.d.ts since the globals aren't compatible.

declare function spyOn<T>(object: T, method: keyof T): jasmine.Spy;
/**
 * If you call the function pending anywhere in the spec body,
 * no matter the expectations, the spec will be marked pending.
 */
declare function pending(reason?: string): void;
/**
 * Fails a test when called within one.
 */
declare function fail(error?: any): never;
declare namespace jasmine {
    let DEFAULT_TIMEOUT_INTERVAL: number;
    function clock(): Clock;
    function any(aclass: any): Any;
    function anything(): Any;
    function arrayContaining(sample: any[]): ArrayContaining;
    function objectContaining(sample: any): ObjectContaining;
    function createSpy(name?: string, originalFn?: (...args: any[]) => any): Spy;
    function createSpyObj(baseName: string, methodNames: any[]): any;
    // tslint:disable-next-line: no-unnecessary-generics
    function createSpyObj<T>(baseName: string, methodNames: any[]): T;
    function pp(value: any): string;
    function addCustomEqualityTester(equalityTester: CustomEqualityTester): void;
    function stringMatching(value: string | RegExp): Any;

    interface Clock {
        install(): void;
        uninstall(): void;
        /**
         * Calls to any registered callback are triggered when the clock isticked forward
         * via the jasmine.clock().tick function, which takes a number of milliseconds.
         */
        tick(ms: number): void;
        mockDate(date?: Date): void;
    }

    interface Any {
        new (expectedClass: any): any;
        jasmineMatches(other: any): boolean;
        jasmineToString(): string;
    }

    interface ArrayContaining {
        new (sample: any[]): any;
        asymmetricMatch(other: any): boolean;
        jasmineToString(): string;
    }

    interface ObjectContaining {
        new (sample: any): any;
        jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): boolean;
        jasmineToString(): string;
    }

    interface Spy {
        (...params: any[]): any;
        identity: string;
        and: SpyAnd;
        calls: Calls;
        mostRecentCall: { args: any[] };
        argsForCall: any[];
        wasCalled: boolean;
    }

    interface SpyAnd {
        /**
         * By chaining the spy with and.callThrough, the spy will still track all
         * calls to it but in addition it will delegate to the actual implementation.
         */
        callThrough(): Spy;
        /**
         * By chaining the spy with and.returnValue, all calls to the function
         * will return a specific value.
         */
        returnValue(val: any): Spy;
        /**
         * By chaining the spy with and.returnValues, all calls to the function
         * will return specific values in order until it reaches the end of the return values list.
         */
        returnValues(...values: any[]): Spy;
        /**
         * By chaining the spy with and.callFake, all calls to the spy
         * will delegate to the supplied function.
         */
        callFake(fn: (...args: any[]) => any): Spy;
        /**
         * By chaining the spy with and.throwError, all calls to the spy
         * will throw the specified value.
         */
        throwError(msg: string): Spy;
        /**
         * When a calling strategy is used for a spy, the original stubbing
         * behavior can be returned at any time with and.stub.
         */
        stub(): Spy;
    }

    interface Calls {
        /**
         * By chaining the spy with calls.any(),
         * will return false if the spy has not been called at all,
         * and then true once at least one call happens.
         */
        any(): boolean;
        /**
         * By chaining the spy with calls.count(),
         * will return the number of times the spy was called
         */
        count(): number;
        /**
         * By chaining the spy with calls.argsFor(),
         * will return the arguments passed to call number index
         */
        argsFor(index: number): any[];
        /**
         * By chaining the spy with calls.allArgs(),
         * will return the arguments to all calls
         */
        allArgs(): any[];
        /**
         * By chaining the spy with calls.all(), will return the
         * context (the this) and arguments passed all calls
         */
        all(): CallInfo[];
        /**
         * By chaining the spy with calls.mostRecent(), will return the
         * context (the this) and arguments for the most recent call
         */
        mostRecent(): CallInfo;
        /**
         * By chaining the spy with calls.first(), will return the
         * context (the this) and arguments for the first call
         */
        first(): CallInfo;
        /**
         * By chaining the spy with calls.reset(), will clears all tracking for a spy
         */
        reset(): void;
    }

    interface CallInfo {
        /**
         * The context (the this) for the call
         */
        object: any;
        /**
         * All arguments passed to the call
         */
        args: any[];
        /**
         * The return value of the call
         */
        returnValue: any;
    }

    interface CustomMatcherFactories {
        [index: string]: CustomMatcherFactory;
    }

    type CustomMatcherFactory = (util: MatchersUtil, customEqualityTesters: CustomEqualityTester[]) => CustomMatcher;

    interface MatchersUtil {
        equals(a: any, b: any, customTesters?: CustomEqualityTester[]): boolean;
        // tslint:disable-next-line: no-unnecessary-generics
        contains<T>(haystack: ArrayLike<T> | string, needle: any, customTesters?: CustomEqualityTester[]): boolean;
        buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: any[]): string;
    }

    type CustomEqualityTester = (first: any, second: any) => boolean;

    interface CustomMatcher {
        compare<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
        compare(actual: any, ...expected: any[]): CustomMatcherResult;
    }

    interface CustomMatcherResult {
        pass: boolean;
        message: string | (() => string);
    }

    interface ArrayLike<T> {
        length: number;
        [n: number]: T;
    }
}
