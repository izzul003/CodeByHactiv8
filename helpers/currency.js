function formatRupiah(value) {
    if (value) {
        return `Rp. ${value.toLocaleString()},00`
    } else {
        return null
    }
}

module.exports = formatRupiah