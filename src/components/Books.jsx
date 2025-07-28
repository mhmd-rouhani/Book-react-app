import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import styles from "./Books.module.css";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

const Books = () => {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(bookData);

  const handleLikedList = (book, isLiked) => {
    setLiked((prevLiked) =>
      isLiked
        ? [...prevLiked, book]
        : prevLiked.filter((item) => item.id !== book.id)
    );
  };

  const searchHandler = () => {
    setBooks(
      search
        ? bookData.filter((book) => book.title.toLowerCase().includes(search))
        : bookData
    );
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>

        {!!liked.length && (
          <div className={styles.favorite}>
            {liked.map((book) => (
              <SideCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Books;
