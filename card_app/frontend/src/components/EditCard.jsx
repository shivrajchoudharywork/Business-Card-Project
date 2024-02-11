import React, { useState } from "react";

const EditCard = ({
  isModalOpen,
  closeModal,
  editCardValue,
  setEditCardValue,
  updateCard,
  editCardIndex
}) => {
  function handleInterestInputChange(e, index) {
    let newInterests = [...editCardValue.interests];

    newInterests[index] = e.target.value;
    setEditCardValue({ ...editCardValue, interests: newInterests });
  }

  const handleSocialNameInputChange = (e, index) => {
    let newsocialMedias = [...editCardValue.socialMedias];

    newsocialMedias[index].name = e.target.value;

    setEditCardValue({ ...editCardValue, socialMedias: newsocialMedias });
  };

  function handleSocialUrlInputChange(e, index) {
    let newSocialMedias = [...editCardValue.socialMedias];

    newSocialMedias[index].url = e.target.value;
    setEditCardValue({ ...editCardValue, socialMedias: newSocialMedias });
  }

  const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: isModalOpen ? "block" : "none",
    zIndex: 9999,
  };

  const contentStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    maxWidth: "80%",
  };

  return (
    <div style={modalStyles} onClick={closeModal}>
      <div style={contentStyles} onClick={(e) => e.stopPropagation()}>
        <form
          style={{
            border: "2px solid black",
            borderRadius: "20px",
          }}
          onSubmit={(e) => updateCard(e, editCardIndex)}
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
              value={editCardValue.name}
              onChange={(e) => {
                setEditCardValue({ ...editCardValue, name: e.target.value });
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
              value={editCardValue.description}
              onChange={(e) => {
                setEditCardValue({
                  ...editCardValue,
                  description: e.target.value,
                });
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
            {editCardValue.interests.map((interest, index) => (
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
                    const newInterests = [...editCardValue.interests];
                    newInterests.splice(index, 1);
                    setEditCardValue({
                      ...editCardValue,
                      interests: newInterests,
                    });
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
                  setEditCardValue({
                    ...editCardValue,
                    interests: [...editCardValue.interests, ""],
                  });
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
            {editCardValue.socialMedias.map((socialMedia, index) => (
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
                    const newSocialMedias = [...editCardValue.socialMedias];
                    newSocialMedias.splice(index, 1);
                    setEditCardValue({
                      ...editCardValue,
                      socialMedias: newSocialMedias,
                    });
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
                  setEditCardValue({
                    ...editCardValue,
                    socialMedias: [
                      ...editCardValue.socialMedias,
                      { name: "", url: "" },
                    ],
                  });
                }}
              >
                Add
              </button>
            </div>
          </div>

          <button
            onClick={closeModal}
            style={{
              padding: "10px",
              margin: "10px 80px 10px 80px",
              background: "#cecdcd",
              border: "1.5px solid black",
              borderRadius: "5px",
              float: "right",
              cursor: "pointer",
            }}
            type="button"
          >
            Cancel
          </button>
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
            onClick={closeModal}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
