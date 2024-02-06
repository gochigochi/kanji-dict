export const createResource = (promise) => {

    let response: string
    let status = "pending"

    const suspender = promise().then(
        (res: string) => {
            status = "success"
            response = res
        },
        (err: string) => {
            status = "error",
                response = err
        },
    )

    return {
        read() {

            if (status === "pending") {
                throw suspender
            } else if (status === "error") {
                throw response
            } else if (status === "success") {
                return response
            }
        }
    }
}