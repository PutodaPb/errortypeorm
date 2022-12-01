import { CategoriaModel } from "../../../modelos/Categorias";


interface ICriacaoDeCategoriasDTO {
    name : string;
    descricao : string;
}
// Interface de Requisição de tipos par as infos pedidas.

class IContratoCategoriaRepositorio{
    findByName(name:string) : CategoriaModel;
    list():CategoriaModel[];
    create({name, descricao}: ICriacaoDeCategoriasDTO): void;
}
/** 
 * - Class com as funções de Verificação de nome ("FindByName")
 * - List tem a função de inserir o Arrei (CategoriaModel), dentro da loista de referencia
 * - create tem a função de criar os dados informados dentro da nossa ITF ("ICriaçãoDeCategoriasDTO")
*/



export {IContratoCategoriaRepositorio, ICriacaoDeCategoriasDTO}