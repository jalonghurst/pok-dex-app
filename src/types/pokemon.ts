export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
}
