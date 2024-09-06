package com.yasar.reactlibraryapp.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // get, set, toString
@AllArgsConstructor // parametreli constructorların tümü
@NoArgsConstructor // default constructor
@Builder
public class BookSaveRequestDto {
    private String title;
    private String author;
    private String publisher;
    private String barcode;
    private Integer pages;
    private String language;
    private String imageUrl;
}
