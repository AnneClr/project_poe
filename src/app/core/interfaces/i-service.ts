// Une interface permet de créer une méthode add qui sera commune à tous les services
// on généralise une interface = généricité. De manière générique on accepte un item de type T pour pouvoir l'utiliser dans n'importe quel service
// on le spécialise losqu'on l'utilise dans le service

export interface IService<T> {
  add(item: T): void;
}
