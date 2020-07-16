const decoder = new TextDecoder("utf-8")

const f = await Deno.open("sample.txt")
export default decoder.decode(await Deno.readAll(f)) // Hello, World!
f.close()