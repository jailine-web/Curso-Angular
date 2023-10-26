/**
 * Modificadores de acesso, ou data modifiers são palavras reservadas que 
 * define os graus de acesso que cada elemento(atributos e métodos) terá. Sendo eles: 
 * private faz com que o atributo só seja acessado pela classe a qual pertence
 * public dá acesso geral ao atributo
 * protected os atributos só podem ser acessados pela própria classe ou pelas classes filhas(subclasses)
 */

class Chacacter{

    private name?: string;
    protected stregth: number;
    public skill: number;

    constructor(name:string,stregth:number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`)
    }

}

const p1 = new Chacacter("Ryu", 10, 78);
//único acesso possível
p1.skill

