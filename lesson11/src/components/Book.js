import React, { useState } from "react";

export default function Book() {
  const imgGavlet =
    "https://s1.livelib.ru/boocover/1000026528/200/0968/boocover.jpg";
  const imgRAndG =
    "https://all-the-books.ru/upload/resize_cache/iblock/9d0/350_551_14ea206e1adc774c374d982cab5ef0488/romeo_i_dzhuletta.jpg";
  const magbet =
    "https://s1.livelib.ru/boocover/1002783491/o/18c5/Uilyam_Shekspir__Makbet.jpeg";

  let [book, setState] = useState(imgGavlet);

  const updImage = (img) => {
    setState(img);
  };

  return (
    <>
      <br />
      <button onClick={() => updImage(imgGavlet)} type="button">
        Гамлет
      </button>
      <button onClick={() => updImage(imgRAndG)} type="button">
        Ромео и Джульетта
      </button>
      <button onClick={() => updImage(magbet)} type="button">
        Макбет
      </button>
      <br />
      <img src={book} alt=""></img>
    </>
  );
}
