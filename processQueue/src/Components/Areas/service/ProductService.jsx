export const ProductService = {
        getProductsData() {
            return [
                {
                    id: '1',
                    name: 'Напыление металлов (Зеркальный)',
                },
                {
                    id: '2',
                    name: 'Сварка',
                },
                {
                    id: '3',
                    name: 'Предподготовка',
                },
                {
                    id: '5',
                    name: 'Выдув',
                },
                {
                    id: '6',
                    name: 'Упаковка',
                },
                {
                    id: '7',
                    name: 'Склад',
                },
                {
                    id: '8',
                    name: 'Удалить - Монтаж антенн',
                },
                {
                    id: '9',
                    name: 'Сборка антенн',
                },
                {
                    id: '10',
                    name: 'Радиомонтаж',
                },
                {
                    id: '11',
                    name: 'Siemens МОЦ - фрезерный ЧПУ',
                },
                {
                    id: '12',
                    name: 'CNC - Легкие ЧПУ станки',
                },
                {
                    id: '13',
                    name: 'ТПА - термопласт автомат',
                },
                {
                    id: '14',
                    name: 'ЭЭО - Электро-эрозийная обработка',
                },
                {
                    id: '15',
                    name: 'Токарный ЧПУ - Siemens',
                },
                                {
                    id: '16',
                    name: 'Покраска',
                },
                {
                    id: '17',
                    name: 'Формовка',
                },
                {
                    id: '18',
                    name: 'Шелкография - печать трафаретная',
                },
                {
                    id: '19',
                    name: 'Плетение фибер',
                },
                {
                    id: '20',
                    name: 'Лазерный по пластику',
                },
                {
                    id: '21',
                    name: 'Лазерный по металлу',
                },
                {
                    id: '22',
                    name: 'УФ печать - цифровая',
                },
                {
                    id: '23',
                    name: 'Удалить? - Проектирование',
                },
                {
                    id: '24',
                    name: 'RFID - Сборка, монтаж',
                },
                {
                    id: '25',
                    name: 'СРП - ППС - Пенополистирол - ЧПУ станок',
                },
                {
                    id: '27',
                    name: 'Полимерная',
                },
                {
                    id: '30',
                    name: 'Декорирование - монтаж украшений',
                },
                {
                    id: '32',
                    name: 'Упаковка Декор',
                },
                {
                    id: '33',
                    name: 'Гибочный по пластику',
                },
                {
                    id: '35',
                    name: 'Сборка ПСБ',
                },
                {
                    id: '36',
                    name: 'Сборка Фибер',
                },
                {
                    id: '42',
                    name: 'Покраска порошковая',
                },
                {
                    id: '43',
                    name: 'ППУ - Пенополиуретан - ЧПУ станок',
                },
                {
                    id: '44',
                    name: 'Сборка литьевых форм',
                },
                 {
                    id: '45',
                    name: 'АХО - Админ. хозяйственный отдел',
                }
            ];
        },


        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },

        getProductsSmall() {
            return Promise.resolve(this.getProductsData().slice(0, 10));
        },

        getProducts() {
            return Promise.resolve(this.getProductsData());
        },

        getProductsWithOrdersSmall() {
            return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
        },

        getProductsWithOrders() {
            return Promise.resolve(this.getProductsWithOrdersData());
        }
    };

    