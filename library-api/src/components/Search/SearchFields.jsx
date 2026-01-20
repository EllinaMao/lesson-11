//Пользователь вводит запрос (название книги или автора). Приложение отправляет его через библиотеку Axios. Для каждой книги показать:

import { useContext, useEffect } from "react";
import { Data } from "../../api/Api";
import { BookContext } from "../context/BookContext";
import FormInput from "../Search/FormInput";

const SearchFields = () => {
    const { books, setBooks } = useContext(BookContext);
    const { get, send } = Data();

    useEffect(() => {
        get.then((response) => {
            setBooks(response.data.docs);
        }
        );
    }
        , []);

    return (
        <div>
            <FormInput
                label="Search by Title"
                placeholder="Enter book title"
                onChange={send()}
            />
            <FormInput
                label="Search by Author"
                placeholder="Enter author name"
                onChange={send()}
            />

        </div>
    )

}