package com.muhammet.hslogin.service;

import com.muhammet.hslogin.entity.Product;
import com.muhammet.hslogin.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository repository;

    public List<Product> getAll() {
        return repository.findAll();
    }

    public void addProduct(Product product) {
        repository.save(product);
    }
}
