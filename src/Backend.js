URL = "http://localhost:8000/"

/**
 * Faz uma pesquisa pelo termo no BackEnd
 * @param {String} text 
 */
async function request_find(text) {
    return await request("find", text)
}

/**
 * Realiza um pedido para a AI analisar o pedido da pessoa e retorna items do banco de dado de acordo com a mensagem
 * @param {String} text 
 */
async function request_ai(text) {
    return await request("ai", text)
}

/**
 * Faz um requisito generico ao BackEnd
 * @param {String} func 
 * @param {String} content 
 * @returns Json com estrtura dos objetos
 */
async function request(func, content) {
    try {
        const response = await fetch(`${URL}${func}?input=${encodeURIComponent(content)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return await response.json();
        }

        return {"error": []};
    } catch (error) {
        return {"error": []};
    }
}