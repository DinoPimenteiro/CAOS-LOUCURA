/* Criação de um banco de dados em memória, ou seja,
    uma database temporária, numa variável*/ 

import { randomUUID} from 'node:crypto' // Permite criar IDs únicos

export class DataBaseMemory { 
    #videos = new Map() //criação de um módulo privado que será uma espécie de array (lista)

    list(){
        return Array.from(this.#videos.entries()).map ((videoArray) =>{
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data, //Copiando os dados de title, descriçao e duração
            }
        })
    }
    create(video){
        const videoId = randomUUID() // UUID = Unique Univesal ID
        this.#videos.set(videoId, video)
    }

    update(id, video){
        this.#videos.set(id, video)
    }

    delete(id){
        this.#videos.delete(id)
    }
}