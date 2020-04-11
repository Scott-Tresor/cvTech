export class Personne {
    id: number;
    name: string;
    firstname: string;
    age: number;
    path: string;
    job: string;
    cin: number;

    constructor(id = 0, name = '', firstname = '', age = 0, path = '', job = '', cin = 1){
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.age = age;
        this.path = path;
        this.job = job;
        this.cin = cin;
    }
}