const userdata = require('./user-object');
const filteringData = require('./filtering-data');


userdata().then(res => {

    let filteredData = filteringData(res);

    filteredData.then(res => {

        // res => should be an object instead of an array

        let updateUserManupulation = res(1).map(function (item) { // why you used map as it is only a single object it is not an array
            return {
                id: Object.values(item)[0],
                name: Object.values(item)[1] + " " + Object.values(item)[2],
                age: "2020" - item[Object.keys(item)[3]].year,

                address: item.address.map(function (adresitem) {
                    return {
                        description: adresitem.houseNo + ', ' + adresitem.street + ', ' + adresitem.city
                    }
                }),
                ratings: item.ratings.map(function (ratingitem) {
                    return {
                        [ratingitem.score]: ratingitem.description
                    }
                }),
                rating: (item.ratings.reduce((acc, avgitem, index) => {
                    return (acc += avgitem.score);
                }, 0)) / item.ratings.length
            }
        })
        // Good


        let orderObjManupulation = res(1).map(function (item) { // why you used map as it is only a single object it is not an array

            return {

                id: item.orders.id,
                userId: item.orders.userId,
                orderType: item.orders.orderType,
                orderTime: item.orders.orderTime,
                price: item.orders.price.totalPrice,
                dishes: item.orders.dishes.map(function (dishesItem) {
                    return {
                        ...dishesItem,
                        quantities: dishesItem.quantities.map(function (quantitiesItem) {
                            return {
                                ...quantitiesItem,
                                overallFeedback: (quantitiesItem.feedbacks.reduce((acc, element) => {
                                    return acc += element.score
                                }, 0)) / quantitiesItem.feedbacks.length,

                                feedbacks: quantitiesItem.feedbacks.map(subFeedBack => {
                                    return {
                                        [subFeedBack.description]: subFeedBack.score,
                                    }

                                })
                            }

                        })
                    }
                })
            }
        })
        // Good

        // All Function should be on User Prototype and the implementation is also wrong.
        // So All are not acceptables.
        // getUsername should be like this and others too:
            // userObjManupulation.prototype.getUserName = function () {
            //     return this.name;
            // }


        let getUserName = () => {
            let uName = "";
            updateUserManupulation.forEach(function (get) {
                uName = get.name;
            })
            return uName;
        }

        let getUserAge = () => {
            let uAge = "";
            updateUserManupulation.forEach(function (get) {
                uAge = get.age;
            })
            return uAge;
        }

        let getUsersAddress = () => {
            let uAddress;
            updateUserManupulation.forEach(function (get) {
                uAddress = get.address;
            })
            return uAddress;
        }

        let getUserRating = () => {
            let uRating;
            updateUserManupulation.forEach(function (get) {
                uRating = get.ratings;
            })
            return uRating;
        }

    });

});
