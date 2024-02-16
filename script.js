var form = document.querySelector('.form');
var inputs = document.querySelectorAll('.form form input');

var listBtn = document.querySelector('.list-btn');
listBtn.addEventListener('click',function(){
    form.style.transform = 'translate(-50%,-50%) scale(1)';
})

document.querySelector('.icon')
.addEventListener('click', function(){
    form.style.transform = 'translate(-50%,-50%) scale(0)';
})

var clutter = '';
document.querySelector('.add').addEventListener('click', function(){
    var nameValue = document.querySelector('#name').value.trim();
    var descValue = document.querySelector('#desc').value.trim();
    var priceValue = document.querySelector('#price').value.trim();

    if (nameValue === '' || descValue === '' || priceValue === '') {
        alert('Please fill out all fields');
        return;
    }

    clutter += `<div class="col-9">
        <div class="card p-0" style="width: 18rem">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${nameValue}</h5>
                <p class="card-text">${descValue}</p>
                <p class="card-text">${priceValue} PKR</p>
                <a href="#" class="btn btn-secondary">Order Now</a>
            </div>
        </div>
    </div>`;

    document.querySelector('.carder').innerHTML = clutter;
    document.querySelector('#name').value = "";
    document.querySelector('#desc').value = "";
    document.querySelector('#price').value = "";
});
