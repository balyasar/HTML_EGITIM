package com.muhammet.hslogin.controller;

import com.muhammet.hslogin.dto.response.BestSellerResponseDto;
import com.muhammet.hslogin.entity.Product;
import com.muhammet.hslogin.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
public class ProductController {
    private final ProductService productService;

    @PostMapping("add-product")
    @CrossOrigin("*")
    public ResponseEntity<Boolean> addProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return ResponseEntity.ok(true);
    }

    @GetMapping("get-all-product")
    @CrossOrigin("*")
    public ResponseEntity<List<Product>> getAllProduct() {
        return ResponseEntity.ok(productService.getAll());
    }

    @GetMapping("/get-all-bestseller")
    @CrossOrigin("*")
    public ResponseEntity<List<BestSellerResponseDto>> getAllBestSeller() {
        return ResponseEntity.ok(productService.getAllBestSeller());
    }
}
