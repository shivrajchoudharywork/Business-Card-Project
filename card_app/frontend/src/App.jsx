import { useEffect, useState } from "react";
import Card from "./components/Card";
import InputCard from "./components/InputCard";
import EditCard from "./components/EditCard";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("http://localhost:3000/getcards");
        const data = await res.json();
        if (res.status === 200) {
          setCards(data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCards();
  }, []);

  const deleteCard = async (_id) => {
    try {
      console.log(_id);
      if (confirm("do you really want to delete this card?")) {
        const res = await fetch("http://localhost:3000/deletecard", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id }),
        });

        const data = await res.json();
        if (res.status === 200) {
          alert("Card Deleted successfully");
          setCards(cards.filter((card) => card._id !== _id));
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const addCard = async (e, card) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:3000/addcard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert(data.msg);
        setCards([...cards, card]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCardValue, setEditCardValue] = useState({
    name: "",
    description: "",
    interests: [""],
    socialMedias: [{ name: "", url: "" }],
  });
  const [editCardIndex, setEditCardIndex] = useState(null);

  const openModal = (index) => {
    setIsModalOpen(true);
    setEditCardValue(cards[index]);
    setEditCardIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateCard = async (e, index) => {
    try {
      e.preventDefault();

      const res = await fetch("http://localhost:3000/updatecard", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editCardValue),
      });

      const data = await res.json();

      if (res.status === 200) {
        const newCards = [...cards];
        newCards[index] = editCardValue;
        
        setCards(newCards);
        alert(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <InputCard addCard={addCard} />
      <EditCard
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        editCardValue={editCardValue}
        setEditCardValue={setEditCardValue}
        editCardIndex={editCardIndex}
        updateCard={updateCard}
      />
      {cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          card={card}
          openModal={openModal}
          deleteCard={deleteCard}
        />
      ))}
    </>
  );
}

export default App;
