const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  return `Olá ${deliveryPerson}, entrega para:${name},Telefone:${phoneNumber}, R.${street}, N°:${number}, AP:${apartment}.`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  const newClient = order.name = 'Luiz Silva';
  const marguerita = Object.keys(order.order.pizza)[0];
  const pepperoni = Object.keys(order.order.pizza)[1];
  const drinks = order.order.drinks.coke.type;
  const newPayment = order.payment.total = 50;

  return`Olá ${newClient}, o total do seu pedido de ${marguerita},${pepperoni} e ${drinks} é R$${newPayment},00.`
};

console.log(orderModifier(order));
