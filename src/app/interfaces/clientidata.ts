import { Clienti } from "../classes/clienti";

export interface Clientidata {
    content: Array<Clienti>;
    empty: string;
    first: string;
    last: string;
    number: number;
    numberOfElements: number;
    pageable: object;
    size: number;
    sort: object;
    totalElements: number;
    totalPages: number;


}
