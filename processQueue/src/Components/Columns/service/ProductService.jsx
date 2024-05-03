export const ProductService = {
        getProductsData() {
            return [
                {
                    id: '0',
                    code: 'NumRow',
                    name: '#',
                    category: 'Число',
                    check:true

                },{
                    id: '1',
                    code: 'id',
                    name: 'ID',
                    category: 'Число',
                    check:true

                },
                {
                    id: '2',
                    code: 'DateCreated',
                    name: 'Добавлено',
                    category: 'Дата',
                    check:true

                },
                {
                    id: '3',
                    code: 'IdOrder',
                    name: '№ заказа',
                    category: 'Число',
                    check:true
                },
                {
                    id: '4',
                    code: 'AccNum',
                    name: '№ счета',
                    category: 'Строка',
                    check:true

                },
                {
                    id: '5',
                    code: 'NumTZ',
                    name: '№ ТЗ',
                    category: 'Строка',
                    check:true
                },
                {
                    id: '6',
                    code: 'ShortName',
                    name: 'Короткое название',
                    category: 'Строка',
                    check:true
                },
                {
                    id: '7',
                    code: 'NameDetail',
                    name: 'Наименование детали',
                    category: 'Строка',
                    check:true
                },
                {
                    id: '8',
                    code: 'StuffName',
                    name: 'Материал',
                    category: 'Строка',
                    check:true

                },
                {
                    id: '9',
                    code: 'BlankStr',
                    name: 'Размеры заготовки',
                    category: 'Строка',
                    check:true

                },
                {
                    id: '10',
                    code: 'Quan',
                    name: 'Задание, шт.',
                    category: 'Electronics',
                    check:true
                },
                {
                    id: '11',
                    code: 'NumanOperation',
                    name: 'Наим. операции (рабоч.)',
                    category: 'Electronics',
                    check:true
                },
                {
                    id: '12',
                    code: 'RouteType',
                    name: 'Тип',
                    category: 'Число',
                    check:true

                },
                {
                    id: '13',
                    code: 'QuanReady',
                    name: 'Выполнено, шт.',
                    category: 'Число',
                    check:true

                },
                {
                    id: '14',
                    code: 'QuanDefect',
                    name: 'Брак, шт.',
                    category: 'Число',
                    check:true
                },
                {
                    id: '15',
                    code: 'CountInForm',
                    name: 'Количество изделий в форме',
                    category: 'Число',
                    check:true
                },
                {
                    id: '16',
                    code: 'CircleTime',
                    name: 'Время цикла сек.',
                    category: 'Число',
                    check:true
                },
                {
                    id: '17',
                    code: 'OutStuffQuan',
                    name: 'Списать материала, кг.',
                    category: 'Число',
                    check:true
                },
                {
                    id: '18',
                    code: 'EquipmentStr',
                    name: 'Станок',
                    category: 'Строка',
                    check:true
                },
                {
                    id: '19',
                    code: 'DateSupposedEnd',
                    name: 'Выполнить до',
                    category: 'Дата',
                    check:true
                },
                {
                    id: '20',
                    code: 'EndDateProcessing',
                    name: 'Окончание обработки',
                    category: 'Дата',
                    check:true
                },
                {
                    id: '21',
                    code: 'AreaNextName',
                    name: 'След. участок',
                    category: 'Строка',
                    check:true
                },
                {
                    id: '22',
                    code: 'PerformerStr',
                    name: 'Исполнитель',
                    category: 'Строка',
                    check:true
                },
                {
                    id: '23',
                    code: 'AuthorName',
                    name: 'Автор',
                    category: 'Строка',
                    check:true
                },
                {
                    id: '24',
                    code: 'IsMoscow',
                    name: 'М',
                    category: 'Булево число',
                    check:true
                },
                {
                    id: '25',
                    code: 'IsSerp',
                    name: 'С',
                    category: 'Булево число',
                    check:true
                },
                {
                    id: '26',
                    code: 'DateStartPlan',
                    name: 'План. дата начала',
                    category: 'Дата',
                    check:true
                },
                {
                    id: '27',
                    code: 'DateEndPlan',
                    name: 'План. дата окончания',
                    category: 'Дата',
                    check:true
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

    