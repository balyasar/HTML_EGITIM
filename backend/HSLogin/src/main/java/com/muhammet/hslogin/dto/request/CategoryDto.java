package com.muhammet.hslogin.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // get, set, toString
@AllArgsConstructor // parametreli constructorların tümü
@NoArgsConstructor // default constructor
@Builder
public class CategoryDto {
    private Long parentId;
    private String name;
    private String description;
    private String categoryImage;
}
