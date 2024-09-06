package com.yasar.reactlibraryapp.service;

import com.yasar.reactlibraryapp.dto.request.BookSaveRequestDto;
import com.yasar.reactlibraryapp.entity.Book;
import com.yasar.reactlibraryapp.repository.IBookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {
    private final IBookRepository repository;

    public Book save(BookSaveRequestDto dto) {
        return repository.save(Book.builder()
                .title(dto.getTitle())
                .author(dto.getAuthor())
                .pages(dto.getPages())
                .barcode(dto.getBarcode())
                .imageUrl(dto.getImageUrl())
                .publisher(dto.getPublisher())
                .language(dto.getLanguage())
                .build());
    }

    public List<Book> findAll() {
        return repository.findAll();
    }

    public List<Book> searchByTitle(String title) {
        return repository.findByTitleContaining(title);
    }

    public List<Book> searchByAuthor(String author) {
        return repository.findByAuthorContaining(author);
    }

    public List<Book> searchByPublisher(String publisher) {
        return repository.findByPublisherContaining(publisher);
    }

    public void removeBook(Long id) {
        repository.deleteById(id);
    }

    public Book updateBook(Long id, BookSaveRequestDto dto) {
        Book book = repository.findById(id).get();
        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setPages(dto.getPages());
        book.setBarcode(dto.getBarcode());
        book.setImageUrl(dto.getImageUrl());
        book.setPublisher(dto.getPublisher());
        book.setLanguage(dto.getLanguage());
        return repository.save(book);
    }
}
