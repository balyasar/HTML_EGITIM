package com.muhammet.hslogin.service;

import com.muhammet.hslogin.dto.response.BestSellerResponseDto;
import com.muhammet.hslogin.entity.Product;
import com.muhammet.hslogin.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    /**
     * Tüm zamanların en çok satan ürünlerini listeleyip kısıtlamak gerekli.
     * Örn;
     */
    public List<BestSellerResponseDto> getAllBestSeller() {
        List<BestSellerResponseDto> bestSellers = new ArrayList<>();
        List<Product> bestList = repository.findTop10ByOrderByRateDesc();
        int endIndex = bestList.size() < 6 ? bestList.size() : 6;
        bestList.subList(0, endIndex).forEach(x -> {
            bestSellers.add(BestSellerResponseDto.builder()
                    .image(x.getImageUrl())
                    .price(x.getPrice() + " ₺")
                    .rate(x.getRate())
                    .title(x.getName())
                    .type(1)
                    .build());
        });
        if (bestList.size() < 6) return bestSellers;
        endIndex = bestList.size() < 10 ? bestList.size() : 10;
        bestList.subList(6, endIndex).forEach(x -> {
            bestSellers.add(BestSellerResponseDto.builder()
                    .image(x.getImageUrl())
                    .price(x.getPrice() + " ₺")
                    .rate(x.getRate())
                    .title(x.getName())
                    .type(2)
                    .build());
        });
        return bestSellers;
    }
}
