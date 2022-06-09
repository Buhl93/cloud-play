import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useImage } from "../../hooks/useImage";
import { MdImageNotSupported } from "react-icons/md";

import WishlistButton from "../../components/wishlistButton/WishlistButton";

import "./ItemDetails.scss";

const ItemDetails = () => {
  const [descriptionEN, setDescriptionEN] = useState("");
  const { id } = useParams();
  const url = `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/${id}?form=json`; //&fields=title,description,plprogram$year,plprogram$thumbnails,plprogram$tags,plprogram$credits,plprogram$descriptionLocalized
  const { data: item, error, isPending } = useFetch(url);
  const {
    title,
    description,
    plprogram$descriptionLocalized: descriptionLocalized,
    plprogram$year: year,
    plprogram$tags: tags,
    plprogram$credits: participants,
  } = item;
  const { coverTall } = useImage(item, "coverTall");
  const { backdrop } = useImage(item, "backdrop");
  const { coverWide: wishlistCover } = useImage(item, "coverWide");

  useEffect(() => {
    if (descriptionLocalized && descriptionLocalized.en) {
      setDescriptionEN(descriptionLocalized.en);
    }
    console.log(item);
  }, [item]);

  return (
    <div className="itemDetails">
      <div className="itemDetails__mainInfo">
        <div className="itemDetails__mainInfo-imageHolder">
          {coverTall ? (
            <img src={coverTall} alt="thumbnail" />
          ) : (
            <div className="imagePlaceholder">
              <MdImageNotSupported />
            </div>
          )}
        </div>

        <div className="itemDetails__mainInfo-header">
          <h1>{title}</h1>
          <WishlistButton id={id} title={title} cover={wishlistCover} />
        </div>
      </div>
      <div className="itemDetails__secondaryInfo">
        <div>{year}</div>
        <div className="itemDetails__secondaryInfo-genre">
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
      </div>

      <div className="itemDetails__description">
        {description ? description : descriptionEN ? descriptionEN : null}
      </div>

      <div className="itemDetails__participants">
        {participants && (
          <>
            <div className="itemDetails__participants-crew">
              <strong>Actors:</strong>
              {participants.map((participant, index) => {
                if (participant.plprogram$creditType === "actor") {
                  return (
                    <div key={participant.plprogram$personId + index}>
                      {participant.plprogram$personName}
                    </div>
                  );
                }
              })}
            </div>
            <div className="itemDetails__participants-crew">
              <strong>Director:</strong>
              {participants.map((participant, index) => {
                if (participant.plprogram$creditType === "director") {
                  return (
                    <div key={participant.plprogram$personId + index}>
                      {participant.plprogram$personName}
                    </div>
                  );
                }
              })}
            </div>
          </>
        )}
      </div>
      {backdrop && (
        <div className="backdrop">
          <img src={backdrop} alt="backdrop" />
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
