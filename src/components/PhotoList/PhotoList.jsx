import axios from "axios";
import { useState, useEffect } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";

const NewPhotoList = ({ activeFilter }) => {
  const [photos, setPhotos] = useState([]);

  let filteredPhotos = photos.filter((photo) => {
    if (activeFilter === null) {
      return true;
    } else if (photo.tags.includes(activeFilter)) {
      return true;
    } else {
      return false;
    }
  });

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8888/api/photos`
      );
      setPhotos(response.data);
    } catch (error) {
      console.log("Error fetching photos", error);
    }
  };
 

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="photo__list">
    {filteredPhotos.map((photo) => {
      return <PhotoCard key={photo.id} photo={photo} />;
    })}
  </div>
  );
};

export default NewPhotoList;

