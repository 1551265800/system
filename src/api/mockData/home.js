
export default {
    getHomeData: () => {
        return {
            code: 200,
            data: {
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000
                    },
                    {
                        name: '华为',
                        todayBuy: 300,
                        monthBuy: 2200,
                        totalBuy: 2400
                    },
                    {
                        name: 'vivo',
                        todayBuy: 200,
                        monthBuy: 3501,
                        totalBuy: 5465
                    },
                    {
                        name: 'apple',
                        todayBuy: 188,
                        monthBuy: 6541,
                        totalBuy: 65168
                    },
                ]
            }
        }
    }
}