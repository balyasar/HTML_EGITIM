package com.muhammet.hslogin.dto.response;

import com.muhammet.hslogin.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data // get, set, toString
@AllArgsConstructor // parametreli constructorların tümü
@NoArgsConstructor // default constructor
@Builder
public class CategoryResponseDto {
    private Long categoryId;
    private String categoryName;
    List<Category> categoryList;
}
