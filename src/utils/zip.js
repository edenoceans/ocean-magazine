// Small dependency-free ZIP writer. WebP files are already compressed, so entries are
// "stored" (method 0) rather than deflated.
const crcTable = (() => {
  const t = []
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[i] = c >>> 0
  }
  return t
})()

function crc32(bytes) {
  let c = 0xffffffff
  for (const b of bytes) c = crcTable[(c ^ b) & 255] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

const u16 = (view, off, n) => view.setUint16(off, n, true)
const u32 = (view, off, n) => view.setUint32(off, n, true)

/** files: [{ name: string, data: Uint8Array }] -> Blob (application/zip) */
export function buildZip(files) {
  const enc = new TextEncoder()
  let offset = 0
  const parts = []
  const central = []

  for (const f of files) {
    const name = enc.encode(f.name)
    const data = f.data
    const crc = crc32(data)

    const header = new Uint8Array(30 + name.length)
    const h = new DataView(header.buffer)
    u32(h, 0, 0x04034b50)
    u16(h, 4, 20)
    u16(h, 8, 0)
    u32(h, 14, crc)
    u32(h, 18, data.length)
    u32(h, 22, data.length)
    u16(h, 26, name.length)
    header.set(name, 30)
    parts.push(header, data)

    const c = new Uint8Array(46 + name.length)
    const v = new DataView(c.buffer)
    u32(v, 0, 0x02014b50)
    u16(v, 4, 20)
    u16(v, 6, 20)
    u32(v, 16, crc)
    u32(v, 20, data.length)
    u32(v, 24, data.length)
    u16(v, 28, name.length)
    u32(v, 42, offset)
    c.set(name, 46)
    central.push(c)

    offset += header.length + data.length
  }

  const centralSize = central.reduce((sum, c) => sum + c.length, 0)
  const end = new Uint8Array(22)
  const view = new DataView(end.buffer)
  u32(view, 0, 0x06054b50)
  u16(view, 8, files.length)
  u16(view, 10, files.length)
  u32(view, 12, centralSize)
  u32(view, 16, offset)

  return new Blob([...parts, ...central, end], { type: 'application/zip' })
}
