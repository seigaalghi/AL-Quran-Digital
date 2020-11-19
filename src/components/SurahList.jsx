import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SurahList = ({ surah }) => {
  return !surah ? (
    <h1>loading</h1>
  ) : (
    <div className='surah-list-container'>
      <ol>
        {surah.map((srh) => {
          return (
            <Link to={`/${srh.nomor}`}>
              <li className='surah-list'>
                {srh.nama}
                <br />(<small>{srh.arti}</small>)<br />
                <small>{srh.asma}</small>
              </li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
};

export default SurahList;
