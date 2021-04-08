class Product {
    constructor(code, name, img, size, info, originalPrice, salePrice, option, lastModified) {
        this.code = code;
        this.name = name;
        this.img = img;
        this.size = size;
        this.info = info;
        this.originalPrice = originalPrice;
        this.salePrice = salePrice;
        this.option = option;
        this.lastModified = lastModified;
    }
    toString() {
        return this.code;
        // return this.name + ', ' + this.state + ', ' + this.country;
    }
}

// Firestore data converter
var productConverter = {
    toFirestore: function (p) {
        return {
            code: p.code,
            name: p.name,
            img: p.img,
            size: p.size,
            info: p.info,
            originalPrice: p.originalPrice,
            salePrice: p.salePrice,
            option: p.option,
            lastModified: p.lastModified
        };
    },
    fromFirestore: function (snapshot, options) {
        const d = snapshot.data(options);
        return new Product(d.code, d.name, d.img, d.size, d.info, d.originalPrice, d.salePrice, d.option, d.lastModified);
    }
};