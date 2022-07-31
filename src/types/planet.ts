type IPlanetsUrl = `https://swapi.dev/api/planets/?page=${number}`;
type IPlanetUrl = `https://swapi.dev/api/planets/${number}/`;
type IResidentUrl = `https://swapi.dev/api/people/${number}/`;
type IFilmUrl = `https://swapi.dev/api/films/${number}/`;

export interface IPlanetsResponse {
  count: number;
  next: IPlanetsUrl | null;
  previous: IPlanetsUrl | null;
  results: IResult[];
}

export interface IResult {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: IResidentUrl[];
  films: IFilmUrl[];
  created: string;
  edited: string;
  url: IPlanetUrl;
}
