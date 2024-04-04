export const isValidLat = (lat: number) => {
    if (lat > -90 && lat < 90) {
        return true
    }
    return false
}

export const isValidLong = (long: number) => {
    if (long > -180 && long < 180) {
        return true
    }
    return false
}
