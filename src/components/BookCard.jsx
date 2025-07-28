import { AiFillHeart } from "react-icons/ai";
import styles from "./BookCard.module.css";
import { useState } from "react";

const BookCard = ({ book, handleLikedList }) => {
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    setLike((like) => !like);
    handleLikedList(book, !like);
  };
  return (
    <div className={styles.card}>
      <img src={book.image} alt={book.title} />
      <div className={styles.info}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <div>
          <span>{book.language}</span>
          <span>{book.pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
    </div>
  );
};

export default BookCard;
