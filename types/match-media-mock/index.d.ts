// Type definitions for match-media-mock 0.1.0
// Project: https://github.com/azazdeaz/match-media-mock
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "match-media-mock" {
    /**
     * Mock configuration options
     */
    interface ConfigOptions {
        /**
         * Screen type
         */
        type?: string | undefined;
        /**
         * Screen height
         */
        height?: number | undefined;
        /**
         * Screen width
         */
        width?: number | undefined;
    }
    interface MatchMediaMock {
        /**
         * Set configuration
         */
        setConfig(config: ConfigOptions): void;
        /**
         * Execute query based on provided configuration
         */
        (query: string): MediaQueryList;
    }
    export function create(): MatchMediaMock;
}
