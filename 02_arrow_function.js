const a = function () {
    console.log(this.a)
}

const b = b => console.log(b);

const h = (b, f) => console.log(b, f);


const r = (b, f = 5) => console.log(b, f);


