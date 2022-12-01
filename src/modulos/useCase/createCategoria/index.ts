import { CategoriaRepositorio } from "../../carros/repositorios/Categorias/CategoriaRepositorio";
import { CreateCategoryController} from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriaRepositorio = CategoriaRepositorio.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriaRepositorio)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export {createCategoryController};