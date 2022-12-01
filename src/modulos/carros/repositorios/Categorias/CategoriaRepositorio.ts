import { CategoriaModel } from "../../modelos/Categorias";

import { IContratoCategoriaRepositorio ,
        ICriacaoDeCategoriasDTO } from "../Interface/Categorias/IContratoCategoriaRepositorio";



//              implements = Transformando a calss "CategoriaRepositorio" em um Sub-titulo.

class CategoriaRepositorio implements IContratoCategoriaRepositorio{ //Função Responsavel por Cadastrar as infos inseridas no esqueleto(CategoriaModel) dentro do arrei ({}) de "Categoria Repositorio".

    private categorias : CategoriaModel [] ;

    private static INSTANCE : CategoriaRepositorio

    private constructor() {
        this.categorias = [];
    }

    public static getInstance(): CategoriaRepositorio {
        if(!CategoriaRepositorio.INSTANCE){
            CategoriaRepositorio.INSTANCE = new CategoriaRepositorio
        }
    return CategoriaRepositorio.INSTANCE
    }

    create({ name,descricao } : ICriacaoDeCategoriasDTO){
           // ↥ Desestruturando as const, para poderem ser substituidas.
           // (ICriaçãoDeCategoriasDTO) ↦ Função que pre-define as categorias das const.
        const categoriamodel = new CategoriaModel();

        Object.assign(categoriamodel,{
         name,
         descricao,
         created_at: new Date(),
    });
    // Linha de comando para subistituir as infos do Modelo para as requisitadas no body da rota.
   
   
        this.categorias.push(categoriamodel);
        // Comando para inserir as infos infromadas na "const categoriamodel" no arrei "categorias".
        } 

    list(): CategoriaModel[] {
        return this.categorias;
    };
    findByName(name:string): CategoriaModel {
        const categoriamodel = this.categorias.find(categoriamodel => categoriamodel.name === name);
        return categoriamodel;
    // Função com objetivo de Consultar a Existencia de um nome ja inserido no banco de dados!
    }
};

export {CategoriaRepositorio};