import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

import { Repository } from "typeorm";
import dataSource from "../../../../database";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name
    })
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = this.repository.find();
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });
    return category;
  }
}

export { CategoriesRepository } 