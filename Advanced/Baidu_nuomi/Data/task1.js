function Observe(data) {
    this.data = data;//为什么多加这句--配合递归算法给出每层递归的结果且定义data（高程高级技巧部分），但是这种方法会使在调用时映射到上层（this)----ES5
    this.walk(data);
}

let p = Observe.prototype;//原型避开this对象链的混淆

p.walk = function (obj) {
    let val;//? val
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            val = obj[key];
            if (typeof val === 'object') {
                new Object(val);
            }
            this.convert(key, val);
        }
    }
};

p.convert = function (key, val) {//js高程中函数属性，设定属性值，改写get set增加log
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('你访问了' + key);
            return val
        },
        set: function (newVal) {
            console.log('你设置了' + key);
            console.log('新的' + key + ' = ' + newVal)
            if (newVal === val) return;
            val = newVal
        }
    })
};

/*----------test----------*/
let data = {//这个地方let变var，console中的window.data不一样
    user: {
        name: "fanzhang",
        age: "24"
    },
    address: {
        city: "beijing"
    }
};

let app=new Observe(data);