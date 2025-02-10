import pool from './conexao.js';

export async function cadastraContato(nome, email, telefone) {
   const conexao = await pool.getConnection();

   const resposta = await conexao.query('INSERT INTO contatos (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);

   console.log(resposta)

   conexao.release();
}