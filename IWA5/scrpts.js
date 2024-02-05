FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0


shoes = 300 * 1
toys = 100 * 5;
shirts = 150 * NONE_SELECTED;
batteries = 35 * 2;
pens = 5 * NONE_SELECTED; 

let shipping = 400;
let currency = 'R';
let area = 'RSA';
if (area === 'RSA') {shipping === 400 && currency === 'R'};

if (area === 'NAM'){
    shipping = 600
}
    else {shipping = 800};

if (shoes + batteries + pens + shirts > 1000 || 60) {
	if (area === 'NAM' && customers < 2) {
			if (area === RSA){
		    shipping = 400 || calcShipping
		}
	}
}

if (shipping = 0 && customers !== 1) { 
    console.log(warningText) 
    }

if (area === 'NK')  {console.log(banned)} 

customers = 1
area = 'RSA'
shipping = 400
currency = 'R'

if (area === "RSA" && customers === 1){
console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping)
}