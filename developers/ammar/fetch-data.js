const getuserdata = require('./user-object');
const filteringData = require('./filtering-data');


getuserdata().then(res => {

    let filteredData = filteringData(res);

    filteredData.then(res => {

        // res => should be an object instead of an array

        console.log(res(1));

        let userObjManupulation = res(1).map(function (item) { // why you used map as it is only a single object it is not an array
            return {
                id: Object.values(item)[0],
                name: Object.values(item)[1] + " " + Object.values(item)[2],
                age: "2020" - item[Object.keys(item)[3]].year,
                addresses: item.address.map(function (inneritem) {

                    return {
                        description: inneritem.houseNo + ', ' + inneritem.street + ', ' + inneritem.city
                    }
                }),
                ratings: item.ratings.map(function (inneritem) {
                    return {
                        [inneritem.score]: inneritem.description
                    }
                }),
                rating: (item.ratings.reduce((acc, inneritem, index) => {

                    return (acc += inneritem.score);
                }, 0)) / item.ratings.length
            }
        });





        let orderObjManupulation = res(1).map(function (item) { // why you used map as it is only a single object it is not an array
            return {
                id: item.orders.id,
                userId: item.orders.userId,
                orderType: item.orders.orderType,
                orderTime: item.orders.orderTime,
                price: item.orders.price.totalPrice,
                dishes: item.orders.dishes.map(function (subItem) {
                    return {

                        id: subItem.id,
                        name: subItem.name,
                        quantities: subItem.quantities.map(function (subsubItem) {
                            return {
                                size: subsubItem.size,
                                quantity: subsubItem.quantity,
                                type: subsubItem.type,
                                overallFeedback: subsubItem.feedbacks.reduce((acc, element) => {
                                    return acc += element.score
                                }, 0) / subsubItem.feedbacks.length,
                                feedbacks: subsubItem.feedbacks.map((subFeedback) => {
                                    return {
                                        [subFeedback.description]: subFeedback.score
                                    }
                                })
                            }
                        })

                    }
                })
            }
        });
        // Good


        // All Function should be on User Prototype and the implementation is also wrong.
        // So All are not acceptables.
        // getUsername should be like this and others too:
        // userObjManupulation.prototype.getUserName = function () {
        //     return this.name;
        // }


        getUserName = () => {


            let userName;
            userObjManupulation.forEach(res => {
                userName = res.name;
            });
            return userName;


        }
        console.log(getUserName());




        getUserAge = () => {


            let userAge;
            userObjManupulation.forEach(res => {
                userAge = res.age;
            });
            return userAge;



        }
        console.log(getUserAge());





        getUsersAddress = () => {




            return userObjManupulation.reduce((acc, element) => {
                return element.addresses;
            }, 0);

        }
        console.log(getUsersAddress());




        getUserRating = () => {




            return userObjManupulation.reduce((acc, element) => {
                return element.rating;
            }, 0);

        }
        console.log(getUserRating());



    });

});
