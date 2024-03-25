import { Type } from './type';

describe('Type', () => { //description de ce qui se passe dans Type

  it('should create an instance', () => {
    expect(new Type()).toBeTruthy();
  });

  it('should give an empty string for lastname attibute', () => {
    const object = new Type() //Instancie dans type la classe Type
    expect(object.lastname).toEqual('') // on attend que lastname de object soit une strig vide
  });

  it('should give a Date instance for birthDate', () => {
    /**
     * on est obligé d'instancier un nouvel object Type car 
     * l'heure ne sera jamais la même entre le moment où on teste et 
     * le moment où on initialise l'attribut de classe
     *  */
    const object = new Type()
    expect(object.birthDate).toBeInstanceOf(Date)
  })

});
