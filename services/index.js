export const AddressDestructor = (address) => {
  const splitAddress = address.split("(")
  const name = splitAddress[0]
  const phone = splitAddress.join("").split("/n").join("").match(/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/)[0]
  const alamat = splitAddress.join("").split('\n')[1]
  const kode_pos = splitAddress.join("").match(/\b\d{5}\b/g).join("")
  const kotaSplited = splitAddress.join("") ? splitAddress.join("").split("\n") : splitAddress.join("").split("\n")
  const kota = kotaSplited.join("").split(",").filter(x => x.includes("Kota" || "Kab."))
  const kecamatan = alamat.split(",").filter(x => x.includes("Bandung"))
  return {
    name,
    phone,
    kode_pos,
    alamat,
    kota,
    kecamatan
  }
}
