export const ProductService = {
        getProductsData() {
            return [
                {
                    id: '0',
                    code: 'NumRow',
                    name: '#',
                    check:true

                },{
                    id: '1',
                    code: 'id',
                    name: 'ID',
                    check:true

                },
                {
                    id: '2',
                    code: 'DateCreated',
                    name: 'Добавлено',
                    check:true

                },
                {
                    id: '3',
                    code: 'IdOrder',
                    name: '№ заказа',
                    check:true
                },
                {
                    id: '4',
                    code: 'AccNum',
                    name: '№ счета',
                    check:true

                },
                {
                    id: '5',
                    code: 'NumTZ',
                    name: '№ ТЗ',
                    check:true
                },
                {
                    id: '6',
                    code: 'ShortName',
                    name: 'Короткое название',
                    check:true
                },
                {
                    id: '7',
                    code: 'NameDetail',
                    name: 'Наименование детали',
                    check:true
                },
                {
                    id: '8',
                    code: 'StuffName',
                    name: 'Материал',
                    check:true

                },
                {
                    id: '9',
                    code: 'BlankStr',
                    name: 'Размеры заготовки',
                    check:true

                },
                {
                    id: '10',
                    code: 'Quan',
                    name: 'Задание, шт.',
                    check:true
                },
                {
                    id: '11',
                    code: 'NumanOperation',
                    name: 'Наим. операции (рабоч.)',
                    check:true
                },
                {
                    id: '12',
                    code: 'RouteType',
                    name: 'Тип',
                    check:true

                },
                {
                    id: '13',
                    code: 'QuanReady',
                    name: 'Выполнено, шт.',
                    check:true

                },
                {
                    id: '14',
                    code: 'QuanDefect',
                    name: 'Брак, шт.',
                    check:true
                },
                {
                    id: '15',
                    code: 'CountInForm',
                    name: 'Количество изделий в форме',
                    check:true
                },
                {
                    id: '16',
                    code: 'CircleTime',
                    name: 'Время цикла сек.',
                    check:true
                },
                {
                    id: '17',
                    code: 'OutStuffQuan',
                    name: 'Списать материала, кг.',
                    check:true
                },
                {
                    id: '18',
                    code: 'EquipmentStr',
                    name: 'Станок',
                    check:true
                },
                {
                    id: '19',
                    code: 'DateSupposedEnd',
                    name: 'Выполнить до',
                    check:true
                },
                {
                    id: '20',
                    code: 'EndDateProcessing',
                    name: 'Окончание обработки',
                    check:true
                },
                {
                    id: '21',
                    code: 'AreaNextName',
                    name: 'След. участок',
                    check:true
                },
                {
                    id: '22',
                    code: 'PerformerStr',
                    name: 'Исполнитель',
                    check:true
                },
                {
                    id: '23',
                    code: 'AuthorName',
                    name: 'Автор',
                    check:true
                },
                {
                    id: '24',
                    code: 'IsMoscow',
                    name: 'М',
                    check:true
                },
                {
                    id: '25',
                    code: 'IsSerp',
                    name: 'С',
                    check:true
                },
                {
                    id: '26',
                    code: 'DateStartPlan',
                    name: 'План. дата начала',
                    check:true
                },
                {
                    id: '27',
                    code: 'DateEndPlan',
                    name: 'План. дата окончания',
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

    