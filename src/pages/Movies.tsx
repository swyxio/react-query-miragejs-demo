import React from "react";
import { useQuery } from 'react-query';
type Data = { id: number; name: string; year: number };
export default function App() {
  const { status, data, error } = useQuery<Data[], any>('movies', () =>
    fetch('/api/movies').then((x) => x.json())
  );
  return (
    <div className='px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4'>
      <div className='px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto'>
        <p className='mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-gray-600'>
          Here is a list of movies
        </p>
        <div>{status}</div>
        {error && <div>{error}</div>}
        <div>
          {status === 'loading' ? (
            <span>Loading...</span>
          ) : status === 'error' ? (
            <span>Error: {error!.message}</span>
          ) : (
            <ul>
              {data!.map((movie) => (
                <li key={movie.id}>
                  {movie.name} ({movie.year})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
