import { CategoriaRepositorio } from "../../../carros/repositorios/Categorias/CategoriaRepositorio";
import { ImportCategoriaController } from "./importCategoriaController";
import { ImportCategoriaUseCase } from "./importCategoriaUseCase";





const importCategoriaRepositorio = CategoriaRepositorio.getInstance();

const importCategoriaUseCase = new ImportCategoriaUseCase(importCategoriaRepositorio);

const importCategoriaController = new ImportCategoriaController(importCategoriaUseCase);



export { importCategoriaController }

