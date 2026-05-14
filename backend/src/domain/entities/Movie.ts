export interface MovieProps {
  id?: string;
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Movie {
  private props: MovieProps;

  constructor(props: MovieProps) {
    //validações de negócio,

    if (props.rating < 0 || props.rating > 10) {
      throw new Error("A nota do filme deve ser entre 0 e 10.");
    }
    this.props = props;
  }

  public get id() {
    return this.props.id;
  }
  public get title() {
    return this.props.title;
  }
  public get director() {
    return this.props.director;
  }
  public get genre() {
    return this.props.genre;
  }
  public get releaseYear() {
    return this.props.releaseYear;
  }
  public get rating() {
    return this.props.rating;
  }
}
