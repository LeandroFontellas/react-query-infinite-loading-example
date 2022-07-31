/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgress } from '@mui/material';
import { useInfinitePlanetsQuery } from './hooks/useInfinitePlanetsQuery';
import { PlanetCard } from './components/Card';

function App() {
  const { ref, inView } = useInView();
  const { data, status, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfinitePlanetsQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (status === 'loading')
    return (
      <div className="flex bg-slate-300 w-[80%] p-20 h-screen flex-1 justify-center items-center overflow-hidden">
        <CircularProgress style={{ color: 'white' }} />
      </div>
    );

  if (status === 'success')
    return (
      <div className="p-20 w-[80%] mx-auto bg-slate-300 h-full">
        <h1 className="text-4xl">Star wars stuff</h1>
        <div className="flex flex-col justify-center">
          <div
            id="content"
            className="pt-10 flex gap-5 flex-wrap overflow-hidden"
          >
            {data.pages.map(({ results }) =>
              results.map(planet => (
                <PlanetCard
                  key={planet.name}
                  name={planet.name}
                  description={planet.terrain}
                />
              )),
            )}
          </div>
          <button
            type="button"
            className="flex flex-1 items-center justify-center text-slate-900 pt-10"
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? (
              <CircularProgress style={{ color: 'white' }} />
            ) : hasNextPage ? (
              'Load more..'
            ) : (
              'Nothing else to be loaded anymore'
            )}
          </button>
        </div>
      </div>
    );

  return null;
}

export default App;
