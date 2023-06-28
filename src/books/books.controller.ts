import { Controller, Get, Param } from '@nestjs/common';

@Controller('books')
export class BooksController {
    private books = [
        {id: 1, title: 'Livro Legal'},
        {id: 2, title: 'Livro Chato'},
        {id: 3, title: 'Livro Mediano'},
    ];

    @Get()
    getAllBooks(): any[] {
        return this.books;
    }

    @Get(':id')
    getBook(@Param('id') id: number): any {
        return this.books.find(book => book.id === Number(id));
    }
}
