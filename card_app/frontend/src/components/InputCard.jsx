import React, { useState } from "react";

const InputCard = (props) => {
  const [card, setCard] = useState({
    name: "",
    description: "",
    interests: [""],
    socialMedias: [{ name: "", url: "" }],
  });

  function handleInterestInputChange(e, index) {
    let newInterests = [...card.interests];

    newInterests[index] = e.target.value;
    setCard({ ...card, interests: newInterests });
  }

  const handleSocialNameInputChange = (e, index) => {
    let newsocialMedias = [...card.socialMedias];

    newsocialMedias[index].name = e.target.value;

    setCard({ ...card, socialMedias: newsocialMedias });
  };

  function handleSocialUrlInputChange(e, index) {
    let newSocialMedias = [...card.socialMedias];

    newSocialMedias[index].url = e.target.value;
    setCard({ ...card, socialMedias: newSocialMedias });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        style={{
          border: "2px solid black",
          borderRadius: "20px",
          width: "40%",
        }}
        onSubmit={(e) => {
          props.addCard(e, card);
          setCard({
            name: "",
            description: "",
            interests: [""],
            socialMedias: [{ name: "", url: "" }],
          });
        }}
      >
        <div>
          <input
            style={{
              padding: "10px",
              margin: "10px",
              background: "#eaeaea",
              color: "black",
              border: "2px solid black",
              borderRadius: "11px",
            }}
            type="text"
            name="name"
            required={true}
            placeholder="Enter your name here..."
            value={card.name}
            onChange={(e) => {
              setCard({ ...card, name: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            style={{
              padding: "10px",
              margin: "10px",
              background: "#eaeaea",
              color: "black",
              border: "2px solid black",
              borderRadius: "11px",
            }}
            type="text"
            name="description"
            required={true}
            placeholder="Enter your description here..."
            value={card.description}
            onChange={(e) => {
              setCard({ ...card, description: e.target.value });
            }}
          />
        </div>

        {/* interest */}
        <div
          style={{
            border: "1px solid black",
            borderRadius: "20px",
            margin: "0px 2px 5px 2px",
          }}
        >
          {card.interests.map((interest, index) => (
            <div key={index}>
              <input
                style={{
                  padding: "10px",
                  margin: "10px",
                  background: "#eaeaea",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "11px",
                }}
                type="text"
                name="interest"
                required={true}
                placeholder="Enter Your Interest..."
                value={interest}
                onChange={(e) => {
                  handleInterestInputChange(e, index);
                }}
              />
              <button
                style={{
                  padding: "10px",
                  margin: "10px",
                  background: "#cecdcd",
                  border: "1.5px solid black",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                type="button"
                onClick={() => {
                  const newInterests = [...card.interests];
                  newInterests.splice(index, 1);
                  setCard({ ...card, interests: newInterests });
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div>
            <button
              style={{
                padding: "10px",
                margin: "10px",
                background: "#cecdcd",
                border: "1.5px solid black",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              type="button"
              onClick={() => {
                setCard({ ...card, interests: [...card.interests, ""] });
              }}
            >
              Add
            </button>
          </div>
        </div>

        {/* social media */}
        <div
          style={{
            border: "1px solid black",
            borderRadius: "20px",
            margin: "0px 2px 5px 2px",
          }}
        >
          {card.socialMedias.map((socialMedia, index) => (
            <div key={index}>
              <input
                style={{
                  padding: "10px",
                  margin: "10px",
                  background: "#eaeaea",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "11px",
                }}
                type="text"
                name="socialMediaName"
                required={true}
                placeholder="Enter Your Social Media Name..."
                value={socialMedia.name}
                onChange={(e) => {
                  handleSocialNameInputChange(e, index);
                }}
              />
              <input
                style={{
                  padding: "10px",
                  margin: "10px",
                  background: "#eaeaea",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "11px",
                }}
                type="text"
                name="socialMediaUrl"
                required={true}
                placeholder="Enter Your Social Media url..."
                value={socialMedia.url}
                onChange={(e) => {
                  handleSocialUrlInputChange(e, index);
                }}
              />
              <button
                style={{
                  padding: "10px",
                  margin: "10px",
                  background: "#cecdcd",
                  border: "1.5px solid black",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                type="button"
                onClick={() => {
                  const newSocialMedias = [...card.socialMedias];
                  newSocialMedias.splice(index, 1);
                  setCard({ ...card, socialMedias: newSocialMedias });
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <div>
            <button
              style={{
                padding: "10px",
                margin: "10px",
                background: "#cecdcd",
                border: "1.5px solid black",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              type="button"
              onClick={() => {
                setCard({
                  ...card,
                  socialMedias: [...card.socialMedias, { name: "", url: "" }],
                });
              }}
            >
              Add
            </button>
          </div>
        </div>

        <button
          style={{
            padding: "10px",
            margin: "10px 30px 10px 80px",
            background: "#cecdcd",
            border: "1.5px solid black",
            borderRadius: "5px",
            float: "right",
            cursor: "pointer",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputCard;
