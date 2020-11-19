import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Tafsir from './Tafsir';

const Surah = ({ surah }) => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`/surah/${params.nomorSurah}.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        setData({ ...res });
        console.log(data.text);
      });
  }, []);

  return !data.text ? (
    <h1>loading</h1>
  ) : (
    <div className='surah'>
      <div className='title'>
        <h1>
          Surah {data.name_latin} ({data.name})
        </h1>
      </div>
      <div className='text'>
        <ol>
          {Object.values(data.text).map((value, index) => {
            return (
              <li>
                <p className='ayat'>{value}</p>
                <small>{Object.values(data.translations.id.text)[index]} </small>
              </li>
            );
          })}
        </ol>
      </div>
      <div className='tafsir'>
        <h1>Tafsir</h1>

        <ol>
          {Object.values(data.tafsir.id.kemenag.text).map((value) => (
            <Tafsir text={value} />
          ))}
        </ol>
      </div>

      {surah.length > 0 ? <ReactAudioPlayer src={surah[params.nomorSurah - 1].audio} controls className='audio' /> : <h3>Loading</h3>}
    </div>
  );
};

export default Surah;
