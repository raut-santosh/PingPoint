import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import _ from "lodash";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { toggleGifModal } from "../redux/slices/app";

const gf = new GiphyFetch("t1wK5qsykdVF8BasoZwtvMDH2Jk55vAi");

export default function Giphy() {
  const gridRef = useRef(null);
  const [isLoading, setIsLoading] = useState(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]);

  const dispatch = useDispatch();

  const fetchGifs = async (offset) => {
    return gf.search(value, { offset, limit: 10 });
  };

  const debouncedFetchGifs = _.debounce(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const initialGifs = await fetchGifs();
      setGifs(initialGifs.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, 500);

  useEffect(() => {
    // fetch gifs initially based on search term
    const fetchInitialGifs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const initialGifs = await fetchGifs();
        setGifs(initialGifs.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialGifs();
  }, []);

  const handleGifClick = (gif, e) => {
    e.preventDefault();
    console.log(gif);
    const gifUrl = gif.images.original.url;
    console.log(gifUrl);
    dispatch(toggleGifModal({
      value: true,
      url: gifUrl,
    }))
  };

  return (
    <div ref={gridRef} className="w-full mt-3">
      <input
        type="text"
        placeholder="Search for Gif..."
        className="w-full border border-stroke rounded-md p-2 mb-2 outline-none bg-transparent dark:border-strokedark"
        onChange={(e) => {
          setValue(e.target.value);
          debouncedFetchGifs();
        }}
      />

      {isLoading && <p>Loading GIFs...</p>}

      {error && <p className="text-red">Error: {error}</p>}

      <div className="h-48 overflow-auto no-scrollbar">
        {gifs.length > 0 ? (
          <Grid
            width={gridRef.current?.offsetWidth}
            columns={8}
            gutter={6}
            fetchGifs={fetchGifs}
            key={value}
            onGifClick={handleGifClick}
            data={gifs}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <MagnifyingGlass size={40} weight="bold" />
            <span className="text-xl text-black dark:text-white font-semibold">
                Please search for any Gif
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
