export const convertStockToStatus = (stock: number): boolean => {
    const status = stock > 0 ? true : false

    return status
}