import toArray = require("stream-to-array");
import * as stream from "stream";

const stream1 = new stream.Readable();
toArray(stream1); // $ExpectType Promise<any[]>
toArray(stream1, (err, arr) => {
    err; // $ExpectType any
    arr; // $ExpectType any[]
});

toArray(stream1)
    .then(parts => {
        const buffers = parts
            .map(part => Buffer.isBuffer(part) ? part : Buffer.from(part));
        return Buffer.concat(buffers);
    });
