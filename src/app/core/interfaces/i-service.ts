import { Observable } from 'rxjs';

/**
 * @interface IService
 * Define method to be implented in services CRUD class
 * @author Riri
 * @version 1.0.0
 * - add method
 */
export interface IService<T> {
  /**
   * @param item T any type specialized in your implementation
   * returns void
   */
  add(item: T): void;

  /**
   * Returns the whole list of T type
   */
  findAll(): Observable<Array<T>>;
}
