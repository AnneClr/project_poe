import { Poe } from '../../poe/poe_types/poe_types';

/**Fichier dans lequel on déclare le type de données de l'attribut interns
 *Dans un type on ne peut définir que des propriétés
 */
export type Intern = {
  lastname: string;
  firstname: string;
  poe: Poe;
};
