import {ReactNode} from "react";

export interface MovieType {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number

}

export interface StorageContextProps {
    children: ReactNode;
}
