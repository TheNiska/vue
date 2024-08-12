let count = 0;
const add_btn = document.getElementById("add_btn");
const sub_btn = document.getElementById("sub_btn");
const count_header = document.getElementById("count");

count_header.innerText = count;

add_btn.addEventListener('click', () => {
    count++;
    count_header.innerText = count;
});

sub_btn.addEventListener('click', () => {
    count--;
    count_header.innerText = count;
});
