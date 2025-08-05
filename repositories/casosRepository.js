const db = require("../db/db");

async function create(object) {
  try{

    const created = await db("casos").insert(object,["*"])

    return created

  }catch(erro){
    
    console.log(erro)
    return false

  }
}

async function read(id) {
  try{

    const result = await db("casos").where({id:id})
    if(!result){
      return false
    }

    return result[0]

  }catch(erro){
    
    console.log(erro)
    return false

  }
}


async function update(id,fieldsToUpdate) {
  try{

    const updated = await db("casos").where({id:id}).update(fieldsToUpdate,["*"])
    if(!updated){
      return false
    }
    return updated[0]

  }catch(erro){
    
    console.log(erro)
    return false

  }
}

async function remove(id) {
  try{

    const deleted = await db("casos").where({id:id}).del()
    if(!deleted){
      return false
    }
    return deleted[0]

  }catch(erro){
    
    console.log(erro)
    return false

  }
}
