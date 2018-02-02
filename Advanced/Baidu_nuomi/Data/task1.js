function Observe(data) {
    this.data = data;//? 为什么多加这句
    this.walk(data);
}

let p = Observe.prototype;//? 原型

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
let data = {
    user: {
        name: "fanzhang",
        age: "24"
    },
    address: {
        city: "beijing"
    }
};

let app=new Observe(data);