//Atributo decorator

function minLength(length: number){
    return(classe : any, key: string) =>{
       //console.log(classe[key])
       //console.log(key)
        let _value = classe[key];

        const getter = () => "[Play] "+_value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(`Tamanho manor do que ${length}`);
            }
            else{
                _value = value;
            }
        };

        Object.defineProperty(classe, key,{
            get: getter,
            set: setter,
        });
    };
}

class Api{

    @minLength(7)
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

const api = new Api("produtos");
console.log(api.name);





