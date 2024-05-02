export const ProductService = {
        getProductsData() {
            return [
                {
                    id: '0',
                    code: 'NumRow',
                    name: '#',
                    category: 'Число',

                },{
                    id: '1',
                    code: 'id',
                    name: 'ID',
                    category: 'Число',

                },
                {
                    id: '2',
                    code: 'DateCreated',
                    name: 'Добавлено',
                    category: 'Дата',

                },
                {
                    id: '3',
                    code: 'IdOrder',
                    name: '№ заказа',
                    category: 'Число',
                },
                {
                    id: '4',
                    code: 'AccNum',
                    name: '№ счета',
                    category: 'Строка',

                },
                {
                    id: '5',
                    code: 'NumTZ',
                    name: '№ ТЗ',
                    category: 'Строка',
                },
                {
                    id: '6',
                    code: 'ShortName',
                    name: 'Короткое название',
                    category: 'Строка',
                },
                {
                    id: '7',
                    code: 'NameDetail',
                    name: 'Наименование детали',
                    category: 'Строка',
                },
                {
                    id: '8',
                    code: 'StuffName',
                    name: 'Материал',
                    category: 'Строка',

                },
                {
                    id: '9',
                    code: 'BlankStr',
                    name: 'Размеры заготовки',
                    category: 'Строка',

                },
                {
                    id: '10',
                    code: 'Quan',
                    name: 'Задание, шт.',
                    category: 'Electronics',
                },
                {
                    id: '11',
                    code: 'NumanOperation',
                    name: 'Наим. операции (рабоч.)',
                    category: 'Electronics',
                },
                {
                    id: '12',
                    code: 'RouteType',
                    name: 'Тип',
                    category: 'Число',

                },
                {
                    id: '13',
                    code: 'QuanReady',
                    name: 'Выполнено, шт.',
                    category: 'Число',

                },
                {
                    id: '14',
                    code: 'QuanDefect',
                    name: 'Брак, шт.',
                    category: 'Число',
                },
                {
                    id: '15',
                    code: 'CountInForm',
                    name: 'Количество изделий в форме',
                    category: 'Число',
                },
                {
                    id: '16',
                    code: 'CircleTime',
                    name: 'Время цикла сек.',
                    category: 'Число',
                },
                {
                    id: '17',
                    code: 'OutStuffQuan',
                    name: 'Списать материала, кг.',
                    category: 'Число',
                },
                {
                    id: '18',
                    code: 'EquipmentStr',
                    name: 'Станок',
                    category: 'Строка',
                },
                {
                    id: '19',
                    code: 'DateSupposedEnd',
                    name: 'Выполнить до',
                    category: 'Дата',
                },
                {
                    id: '20',
                    code: 'EndDateProcessing',
                    name: 'Окончание обработки',
                    category: 'Дата',
                },
                {
                    id: '21',
                    code: 'AreaNextName',
                    name: 'След. участок',
                    category: 'Строка',
                },
                {
                    id: '22',
                    code: 'PerformerStr',
                    name: 'Исполнитель',
                    category: 'Строка',
                },
                {
                    id: '23',
                    code: 'AuthorName',
                    name: 'Автор',
                    category: 'Строка',
                },
                {
                    id: '24',
                    code: 'IsMoscow',
                    name: 'М',
                    category: 'Булево число',
                },
                {
                    id: '25',
                    code: 'IsSerp',
                    name: 'С',
                    category: 'Булево число',
                },
                {
                    id: '26',
                    code: 'DateStartPlan',
                    name: 'План. дата начала',
                    category: 'Дата',
                },
                {
                    id: '27',
                    code: 'DateEndPlan',
                    name: 'План. дата окончания',
                    category: 'Дата',
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

    };

    