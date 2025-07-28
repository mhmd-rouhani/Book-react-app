import styles from "./SideCard.module.css";

const SideCard = ({ book }) => {
  return (
    <div className={styles.card}>
      <img src={book.image} alt={book.title} />
      <p>{book.title}</p>
    </div>
  );
};

export default SideCard;
