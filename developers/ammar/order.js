class Orders {
    constructor(id, userId, orderType, orderTime, price, dishes) {
        this.id = id;
        this.userId = userId;
        this.orderType = orderType;
        this.orderTime = orderTime;
        this.price = price;
        this.dishes = dishes;
        this.type = 'Order';
    }
}
module.exports = Orders;

// Excellent

