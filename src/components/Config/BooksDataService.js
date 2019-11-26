import axios from 'axios'

const API_URL = 'http://localhost:8080/api'
class BooksDataService {
    retrieveAllBooks() {
        return axios.get(`${API_URL}/books`);
    }

    deleteBookById(id){
        return axios.delete(`${API_URL}/book/${id}`)
    }

    retrieveBook(id) {

        return axios.get(`${API_URL}/book/${id}`);
    }

    updateBook(id, book){
        console.log('in update book id ' + id)
        console.log('in update book ' + book)

        return axios.put(`${API_URL}/book/${id}`, book)
    }
}
export default new BooksDataService()