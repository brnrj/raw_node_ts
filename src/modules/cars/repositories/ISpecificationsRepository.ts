import { Specification } from "../model/Specification";

interface ISpecificationDTO {
  name: string;
  description: string
}

interface ISpecificationRepository {
  create({ description, name }: ISpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ISpecificationDTO };