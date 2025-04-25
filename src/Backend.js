URL = "http://localhost:8000/"
OFFLINE = true

let botao = document.getElementById('botao')


class FAKEBACKEND {
    
}
/**
 * Faz uma pesquisa pelo termo no BackEnd
 * @param {String} text 
 */
async function request_find(text) {
    return await request("find", text);
}

/**
 * Realiza um pedido para a AI analisar o pedido da pessoa e retorna items do banco de dado de acordo com a mensagem
 * @param {String} text 
 */
async function request_ai(text) {
    return await request("ai", text);
}

/**
 * Faz um requisito generico ao BackEnd
 * @param {String} func 
 * @param {String} content 
 * @returns Json com estrtura dos objetos
 */
async function request(func, content) {
    try {
        const link = `${URL}${func}?input=${encodeURIComponent(content)}`;
        const res = await fetch(link);
        const txt = await res.text();

      
        if (!res.ok) {
          throw new Error(`Erro ${res.status}: ${txt}`);
        }
      
        const data = JSON.parse(txt);
        return data;
    } catch (error) {
        console.log(error)
        return {"error": []};
    }
}

botao.addEventListener('click' , () =>{
  console.log(request_find(), request_ai(), request())  
})