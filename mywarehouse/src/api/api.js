// 接口
const url = 'http://127.0.0.1:7001'

const urls = class {
    static m() {
        //
        const getUSer = `${url}/getUSer`
        const addUser = `${url}/addUser`
        const delUser = `${url}/delUser`

        const fidKuku = `${url}/fidKuku`

        const getKu = `${url}/getKu`
        const delKu = `${url}/delKu`
        const upKu = `${url}/upKu`

        const getKku = `${url}/getKku`

        const getKkku = `${url}/getKkku`

        const getKkkku = `${url}/getKkkku`

        const fidDing = `${url}/fidDing`
        const getDing = `${url}/getDing`
        const fidDingid = `${url}/fidDingid`
        const addDing = `${url}/addDing`
        const addDingid = `${url}/addDingid`

        const fidRood = `${url}/fidRood`
        const addRoot = `${url}/addRoot`


        return {
            getUSer,
            addUser,
            delUser,
            fidKuku,
            getKu,
            getKku,
            getKkku,
            getKkkku,
            delKu,
            upKu,
            getDing,
            fidDingid,
            addDingid,
            addDing,
            fidDing,
            fidRood,
            addRoot
        }
    }
}

export default urls