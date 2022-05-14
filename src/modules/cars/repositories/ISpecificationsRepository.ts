interface ISpecificationDTO {
  name: string;
  description: string
}

interface ISpecificationRepository {
  create({ description, name }: ISpecificationDTO): void;
}

export { ISpecificationRepository, ISpecificationDTO };