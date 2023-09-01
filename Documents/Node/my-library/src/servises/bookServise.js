export const BooksList = {
    getAll: async function () {
        const response = await fetch("http://localhost:4200/books")
        return await response.json()

    },
    getById: async function (id) {
        const response = await fetch(`http://localhost:4200/books?id=${id}`)
        const res = await response.json()
        return await res[0]

    }
}
