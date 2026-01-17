//Пользователь вводит запрос (название книги или автора). Приложение отправляет его через библиотеку Axios. Для каждой книги показать:

import { useContext, useReducer } from "react";
import { Data } from "../../api/Api";
import { BookContext } from "../context/BookContext";

const SearchFields = () => {
    const { books, setBooks } = useContext(BookContext);



    return (
        <div>

        </div>
    )

}