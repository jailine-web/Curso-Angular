function apiVersion(version: any){
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: "Felipe" });
    }
}

@apiVersion("1.5")
class Api{}

const api = new Api();
console.log(api.__version);
console.log(api.__name);






