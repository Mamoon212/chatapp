var expect= require("expect");
var {generateMessage, generateLocationMessage}= require("./message")

describe("generateMessage", ()=>{
    it("should generate the correct message", ()=>{
        var res= generateMessage("me", "hello there")
        expect(res.from).toBe("me")
        expect(res.text).toBe("hello there")
        expect(res.createdAt).toBeA("number")
    })
})
describe("generateLocationMessage", ()=>{
    it("should generate correct location", ()=>{
        var res= generateLocationMessage("baby", 14, 19)
        expect(res.createdAt).toBeA("number")
        expect(res.from).toBe("baby")
        expect(res.url).toBe("https://www.google.com/maps/?q=14,19")

    })
})