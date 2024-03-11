const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const books = [
    {
        status: document.querySelector('#book1 .status').innerText,
        html: {
            status: document.querySelector('#book1 .status'),
            reserve: document.querySelector('#book1 .reserve'),
            checkout: document.querySelector('#book1 .checkout'),
            checkin: document.querySelector('#book1 .checkin'),
        },

        status: document.querySelector('#book2 .status').innerText,
        html: {
            status: document.querySelector('#book2 .status'),
            reserve: document.querySelector('#book2 .reserve'),
            checkout: document.querySelector('#book2 .checkout'),
            checkin: document.querySelector('#book2 .checkin'),
        },

        status: document.querySelector('#book3 .status').innerText,
        html: {
            status: document.querySelector('#book3 .status'),
            reserve: document.querySelector('#book3 .reserve'),
            checkout: document.querySelector('#book3 .checkout'),
            checkin: document.querySelector('#book3 .checkin'),
        },
    },
]

    books[0].html.checkin.style.color = ''
books[0].html.status.style.color = STATUS_MAP[books[0].status].color
books[0].html.reserve.disabled = !STATUS_MAP[books[0].status].canReserve
books[0].html.checkout.disabled = !STATUS_MAP[books[0].status].canCheckout
books[0].html.checkin.disabled = !STATUS_MAP[books[0].status].canCheckIn

books[1].html.checkin.style.color = ''
books[1].html.status.style.color = STATUS_MAP[books[1].status].color
books[1].html.reserve.disabled = !STATUS_MAP[books[1].status].canReserve
books[1].html.checkout.disabled = !STATUS_MAP[books[1].status].canCheckout
books[1].html.checkin.disabled = !STATUS_MAP[books[1].status].canCheckIn

books[2].html.checkin.style.color = ''
books[2].html.status.style.color = STATUS_MAP[books[2].status].color
books[2].html.reserve.disabled = !STATUS_MAP[books[2].status].canReserve
books[2].html.checkout.disabled = !STATUS_MAP[books[2].status].canCheckout
books[2].html.checkin.disabled = !STATUS_MAP[books[2].status].canCheckIn
