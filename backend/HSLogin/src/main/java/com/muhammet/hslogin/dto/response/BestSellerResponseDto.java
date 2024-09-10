package com.muhammet.hslogin.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // get, set, toString
@AllArgsConstructor // parametreli constructorların tümü
@NoArgsConstructor // default constructor
@Builder
public class BestSellerResponseDto {
    private Integer type;
    private String image;
    private String title;
    private String price;
    private Integer rate;
}
