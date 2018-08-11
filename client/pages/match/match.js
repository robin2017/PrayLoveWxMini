Page({
    data: {
        usersList: [
            {id: 1, imgUrl: '../../resources/man1.jpeg', name: "吴彦祖", city: '香港', birthday: '1978/5/2', loveValue: 87},
            {id: 2, imgUrl: '../../resources/man2.jpg', name: "张震", city: '台湾', birthday: '1982/7/2', loveValue: 89},
            {id: 3, imgUrl: '../../resources/woman1.jpg', name: "张曼玉", city: '南京', birthday: '1974/11/3', loveValue: 91},
            {id: 4, imgUrl: '../../resources/woman2.jpg', name: "李嘉欣", city: '新加坡', birthday: '1976/1/23', loveValue: 83},
            {id: 5, imgUrl: '../../resources/man1.jpeg', name: "吴彦祖", city: '香港', birthday: '1978/5/2', loveValue: 87},
            {id: 6, imgUrl: '../../resources/man2.jpg', name: "张震", city: '台湾', birthday: '1982/7/2', loveValue: 89},
            {id: 7, imgUrl: '../../resources/woman1.jpg', name: "张曼玉", city: '南京', birthday: '1974/11/3', loveValue: 91},
            {id: 8, imgUrl: '../../resources/woman2.jpg', name: "李嘉欣", city: '新加坡', birthday: '1976/1/23', loveValue: 83},

        ]
    },
    showUserDetailInfo:function (id) {
        console.log('dfd',id)
    }
})