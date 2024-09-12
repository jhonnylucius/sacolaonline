package com.sacolaonline.sacolaonline.service;

import com.sacolaonline.sacolaonline.model.Order;
import com.sacolaonline.sacolaonline.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;


@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    //Metodo para criar um novo pedido
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    //Metodo para buscar todos os pedidos
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    //Metodo para buscar pedido por ID
    public Order getOrderById(Long id) {
        Optional<Order> order = orderRepository.findById(id);
        if (order.isPresent()) {
            return order.get();
        } else {
            throw new RuntimeException("Pedido não encontrado com id: " + id);
        }
    }

    //Metodo para atualizar pedido
    public Order updateOrder(Long id, Order orderDetails) {
        Order order = getOrderById(id); // Valida se o pedido existe
        order.setStatus(orderDetails.getStatus());
        // Adicionar mais atributos que precisam ser atualizados aqui
        return orderRepository.save(order);
    }

    //Metodo para deletar pedido por ID
    public void deleteOrder(Long id) {
        Order order = getOrderById(id); // Valida se o pedido existe
        orderRepository.delete(order);
    }
}
