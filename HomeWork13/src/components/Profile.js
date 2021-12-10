import React, { useState } from "react";

export default function Profile(props) {
  const [profile, setProfile] = useState({});

  const name = React.useRef(null);
  const suranme = React.useRef(null);
  const photo = React.useRef(null);

  function add(e) {
    e.preventDefault();


    // console.dir(photo.current.file.files[0]);
    // var file = photo.file.files[0];
    // var reader = new FileReader();
    // var url = reader.readAsDataURL(file);

    const _profile = {
      name: name.current.value,
      surname: suranme.current.value,
      img: photo.current.value,
    };


    setProfile(_profile);
  }

  return (
    <div>
      <form>
        <h2>Name</h2>
        <input type="text" ref={name} />
        <h2>Surname</h2>
        <input type="text" ref={suranme} />
        <h2>Profile</h2>
        <input type="file" name="user[image]" multiple="true" ref={photo} />
        <br /> <button onClick={add}>SET</button>
      </form>
      <User user={profile} />
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h2>Name: {props.user.name}</h2>
      <h2>Surname: {props.user.surname}</h2>
      <img src={props.user.img} alt={props.user.name} />
    </div>
  );
}
