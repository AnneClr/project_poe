// Penser à commenter le code @var etcommenter la classe

/**
 * Type testing
 * @author Anne-Claire <s36093@stagiaire.aelion.fr>
 * @version 1.0.0
 * - string, number, boolean, array and Date type
 */

export class Type {
    /**
     * @var {string} lastname of any guy or gal
     */
    public lastname: string = '';

    /**
     * @var {number} age of someone
     */
    public age: number = 0;

    /**
     * @var {boolean} isMale gender of the person
     */
    public isMale: boolean = false

    /**
     * @var {Array} skills any skills of someone
     * @var {Array} madSkills any skills of someone
     */
    public skills: Array<string> = []
    public madSkills: string[] = []

    public birthDate: Date = new Date()

}
