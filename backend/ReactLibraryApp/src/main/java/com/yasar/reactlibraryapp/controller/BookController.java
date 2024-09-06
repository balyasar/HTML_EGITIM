package com.yasar.reactlibraryapp.controller;

import com.yasar.reactlibraryapp.dto.request.BookSaveRequestDto;
import com.yasar.reactlibraryapp.entity.Book;
import com.yasar.reactlibraryapp.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/book")
public class BookController {
    private final BookService service;

    @PostMapping("/save")
    @CrossOrigin("*")
    public ResponseEntity<Book> save(@RequestBody BookSaveRequestDto dto) {
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("get-all")
    @CrossOrigin("*")
    public ResponseEntity<List<Book>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("search-by-title")
    @CrossOrigin("*")
    public ResponseEntity<List<Book>> searchByTitle(String title) {
        return ResponseEntity.ok(service.searchByTitle(title));
    }

    @GetMapping("search-by-author")
    @CrossOrigin("*")
    public ResponseEntity<?> searchByAuthor(String author) {
        return ResponseEntity.ok(service.searchByAuthor(author));
    }

    @GetMapping("search-by-publisher")
    @CrossOrigin("*")
    public ResponseEntity<List<Book>> searchByPublisher(String publisher) {
        return ResponseEntity.ok(service.searchByPublisher(publisher));
    }

    @PutMapping("update/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Book> updateBook(@RequestParam("id") Long id, @RequestBody BookSaveRequestDto dto) {
        return ResponseEntity.ok(service.updateBook(id,dto));
    }


    @DeleteMapping("/remove/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Void> removeBook(@RequestParam("id") Long id) {
        service.removeBook(id);
        return ResponseEntity.noContent().build();
    }
}
