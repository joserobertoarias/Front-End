
export interface actorEdicionDTO {
    id:number;
    nombre: string;
    biografia: string;
    fechaNac : Date;
    foto: string;
}

export interface actorCreacionDTO {
    id:number;
    nombre: string;
    biografia: string;
    fechaNac : Date;
    foto: File;
}