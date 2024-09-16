package com.sacolaonline.sacolaonline.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
            .allowedOrigins("http://localhost:3000", "http://localhost:8080")  // Permite várias origens
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*");
}
