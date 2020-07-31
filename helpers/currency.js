function formatRupiah(value) {
    return `Rp. ${value.toLocaleString()},00`
}

module.exports = formatRupiah