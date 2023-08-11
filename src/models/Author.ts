export interface AuthorDB {
  id: string;
  name: string;
  cpf: string;
}

export class Author {
  constructor(
    private id: string,
    private name: string, 
    private cpf: string
    ) {}
  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getcpf(): string {
    return this.cpf;
  }

  public setcpf(cpf: string) {
    this.cpf = cpf;
  }
}
