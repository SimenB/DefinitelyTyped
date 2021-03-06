// Type definitions for gulp-newer
// Project: https://github.com/tschaub/gulp-newer
// Definitions by: Thomas Corbière <https://github.com/tomc974>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


interface IOptions {
    /**
     * Path to destination directory or file.
     */
    dest: string;

    /**
     * Source files will be matched to destination files with the provided extension.
     */
    ext?: string | undefined;

    /**
     * Map relative source paths to relative destination paths.
     */
    map?: ((relativePath: string) => string) | undefined;
}

interface IGulpNewer {
    /**
     * Create a transform stream that passes through files whose modification time
     * is more recent than the corresponding destination file's modification time.
     * @param dest Path to destination directory or file.
     */
    (dest: string): NodeJS.ReadWriteStream;

    /**
     * Create a transform stream that passes through files whose modification time
     * is more recent than the corresponding destination file's modification time.
     */
    (options: IOptions): NodeJS.ReadWriteStream;
}

declare const newer: IGulpNewer;
export = newer;
