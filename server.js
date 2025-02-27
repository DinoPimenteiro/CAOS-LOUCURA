// Criando o servidor pela biblioteca fastify

import {fastify} from 'fastify' //Existem diversas outras depedências dentro da bibilioteca, por isto o mesmo nome, não é a mesma coisa
import {DataBaseMemory} from './database_memory.js'

const database = new DataBaseMemory

const server = fastify() // Criando um server.

server.post('/videos', (request, reply) => { //Aqui estou criando uma requisição para criar videos
    const {title, description, duration} = request.body // Agora que os dados estão no server basta desestruturar e encai-los em seus modelos
    
    database.create({
        title: title,
        description: description,
        duration: duration,
    })


    return reply.status(201).send() // Cria uma resposta com o status 201 (algo foi criado),igual node raiz
})

server.get('/videos', () => {  //Com a mesma rota, mas com método diferente, pegando informações
    const videos = database.list()
    
    return videos
})

server.put('/videos/:id', (request, reply) => { // ao modificar um arquivo deve-se especificar qual o arquivo, por isso o ":id" ali estará o video
    const videoId = request.params.id
    const {title, description, duration} = request.body

    database.update(videoId, {
        title: title,
        description: description,
        duration: duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => { // O mesmo ocorre com o delete, deve-se especificar qual video.
    const videoId = request.params.id
    database.delete(videoId)
    
    
    return reply.status(204).send()
})


server.listen({ //Indicando a porta do server.
    port: 3332,
})
