const LikeController = require("./LikeController")
// @ponicode
describe("LikeController.store", () => {
    test("0", async () => {
        await LikeController.store({ headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", Accept-Encoding: "gzip, deflate", Accept-Language: "en-GB,en-US;q=0.9,en;q=0.8", Dnt: 1, Host: "httpbin.org", Upgrade-Insecure-Requests: 1, User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" }, params: ["ponicode.com", "http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/bot"], connectedUsers: [true, false, true], io: { to: () => "C:\\\\path\\to\\file.ext" } }, { status: () => 429, json: () => "\"[3,\"false\",false]\"" })
    })

    test("1", async () => {
        await LikeController.store({ headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" }, params: ["https://twitter.com/path?abc", "https://api.telegram.org/bot", "https://"], connectedUsers: [true, false, true], io: { to: () => "path/to/file.ext" } }, { status: () => 429, json: () => "\"[3,\"false\",false]\"" })
    })

    test("2", async () => {
        await LikeController.store({ headers: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", params: ["http://www.croplands.org/account/confirm?t=", "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc"], connectedUsers: [false, true, true], io: { to: () => "/path/to/file" } }, { status: () => 500, json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("3", async () => {
        await LikeController.store({ headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Accept-Language: "en-US,en;q=0.5", Connection: "keep-alive", Upgrade-Insecure-Requests: 1, Pragma: "no-cache", Cache-Control: "no-cache" }, params: ["ponicode.com", "https://api.telegram.org/bot", "Www.GooGle.com"], connectedUsers: [true, false, true], io: { to: () => "C:\\\\path\\to\\folder\\" } }, { status: () => 400, json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("4", async () => {
        await LikeController.store({ headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", Accept-Encoding: "gzip, deflate", Accept-Language: "en-GB,en-US;q=0.9,en;q=0.8", Dnt: 1, Host: "httpbin.org", Upgrade-Insecure-Requests: 1, User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" }, params: ["http://base.com", "http://base.com", "https://"], connectedUsers: [false, false, false], io: { to: () => "path/to/folder/" } }, { status: () => 429, json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("5", async () => {
        await LikeController.store(undefined, { status: () => Infinity, json: () => "" })
    })
})
