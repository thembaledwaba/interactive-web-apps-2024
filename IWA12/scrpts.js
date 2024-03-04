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

book1Status = #book1.querySelector('.status');
book1Reserve = #book1.querySelector('.reserve');
book1Checkout = #book1.querySelector('.checkout');
book1Checkin = #book1.querySelector('.checkin');

book2Status = #book2.querySelector('.status');
book2Reserve = #book2.querySelector('.reserve');
book2Checkout = #book2.querySelector('.checkout');
book2Checkin = #book2.querySelector('.checkin');

book3Status = #book3.querySelector('.status')
book3Reserve = #book3.querySelector('.reserve')
book3Checkout = #book3.querySelector('.checkout')
book3Checkin = #book3.querySelector('.checkin')

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'