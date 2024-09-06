package com.yasar.reactlibraryapp.repository;

import com.yasar.reactlibraryapp.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IBookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT b FROM Book b WHERE b.title LIKE %:title%")
    List<Book> findByTitleContaining(@Param("title") String title);

    @Query("SELECT b FROM Book b WHERE b.author LIKE %:author%")
    List<Book> findByAuthorContaining(@Param("author") String author);

    @Query("SELECT b FROM Book b WHERE b.publisher LIKE %:publisher%")
    List<Book> findByPublisherContaining(@Param("publisher") String publisher);
}
