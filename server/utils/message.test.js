var expect= require("expect");
var {generateMessage}= require("./message")

describe("generateMessage", ()=>{
    it("should generate the correct message", ()=>{
        var res= generateMessage("me", "hello there")
        expect(res.from).toBe("me")
        expect(res.text).toBe("hello there")
        expect(res.createdAt).toBeA("number")
    })
})