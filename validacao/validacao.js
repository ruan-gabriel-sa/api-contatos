function validaNome(nome) {
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    
    const isValid = nome.length >= 2 && regexNome.test(nome);
    return isValid;
}

function validaEmail(email) {
    
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regexEmail.test(email);
   
    return isValid;
}

function validaTelefone(telefone){
    const regexTelefone = /^(\+55)?\s?(?:\(?\d{2}\)?)?\s?\d{5}-?\d{4}$/;
    const isValid = regexTelefone.test(telefone);
    return isValid;
}

export function validaUsuario(nome, email, telefone) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    const telefoneValido = validaTelefone(telefone)

    const usuarioValido = nomeValido && emailValido && telefoneValido;

    if(usuarioValido) {
        return {status: true, mensagem: ''};
    } else if (!validaNome(nome)){
        return {status: false, mensagem: 'Nome inválido'}
    } else if (!validaEmail(email)){
        return {status: false, mensagem: 'Email inválido'}
    } else {
        return {status: false, mensagem: 'Telefone inválido'}
    }
}