import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { MovieType, StorageContextProps } from "../types";

export const Usecontext = createContext<any>(null);

export const StorageContext = ({ children }: StorageContextProps) => {
  const [dados, setDados] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    getDados();
  }, []);
  const getDados  = async () => {
    await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "7eefeae7661a8e7ebad99660f3630a4c",
        language: "pt-BR",
      },
    }).then((response) => {
      setDados(response.data.results);
      console.log(response);
    });

    setIsLoading(false);
  };

  return (
    <>
      <Usecontext.Provider value={{ dados , isLoading}}>{children}</Usecontext.Provider>
    </>
  );
};
