import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import WishlistButton from "../../components/wishlistButton/WishlistButton";

const ItemDetails = () => {
  const [cover, setCover] = useState("");
  const [descriptionEN, setDescriptionEN] = useState("");
  const coverSize = "orig-364x250";
  const { id } = useParams();
  const url = `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/${id}?form=json`; //&fields=title,description,plprogram$year,plprogram$thumbnails,plprogram$tags,plprogram$credits,plprogram$descriptionLocalized
  const { data, error, isPending } = useFetch(url);
  const {
    title,
    description,
    plprogram$descriptionLocalized: descriptionLocalized,
    plprogram$year: year,
    plprogram$thumbnails: thumbnails,
    plprogram$tags: tags,
    plprogram$credits: participants,
  } = data;

  useEffect(() => {
    if (thumbnails && thumbnails.hasOwnProperty(coverSize)) {
      setCover(thumbnails[coverSize].plprogram$url);
    }
    if (descriptionLocalized && descriptionLocalized.en) {
      setDescriptionEN(descriptionLocalized.en);
    }
  }, [data]);

  return (
    <div>
      <img src={cover} />
      <WishlistButton id={id} title={title} cover={cover} />
      <div>{title}</div>
      <div>{year}</div>
      <div>
        {description ? description : descriptionEN ? descriptionEN : null}
      </div>

      <div>
        {tags &&
          tags.map((tag, index) => {
            if (tag.plprogram$scheme === "genre") {
              return (
                <div key={tag.plprogram$title + index}>
                  {tag.plprogram$title}
                </div>
              );
            }
          })}
      </div>
      <div>
        {participants && (
          <>
            <div>
              Actors:
              {participants.map((participant) => {
                if (participant.plprogram$creditType === "actor") {
                  return (
                    <div key={participant.plprogram$personId}>
                      {participant.plprogram$personName}
                    </div>
                  );
                }
              })}
            </div>
            <div>
              Director:
              {participants.map((participant) => {
                if (participant.plprogram$creditType === "director") {
                  return (
                    <div key={participant.plprogram$personId}>
                      {participant.plprogram$personName}
                    </div>
                  );
                }
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
