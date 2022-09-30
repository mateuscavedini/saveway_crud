export const convertBooleanToAvailability = (value: boolean): "available" | "not available" => {
    return value ? "available" : "not available"
}