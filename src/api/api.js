const BASEURL = "https://jsonplaceholder.typicode.com/todos"

export const getTodos = async () => {
    const response = await fetch(BASEURL + "?_start=0&_limit=10")
    const data = await response.json()
    return data
}

export const setTodo = async (obj) => {
    const response = await
        fetch(BASEURL, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    return await response.json()
}

export const deleteTodo = async (id) => {
    await fetch(`${BASEURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const updateTodo = async (obj) => {
    const response = await fetch(`${BASEURL}/${obj.id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await response.json()
}

