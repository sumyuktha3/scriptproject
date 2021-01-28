result_button = document.querySelector('#result_button');

result_button.addEventListener('click', function(e){
    txta = document.querySelector('#value_a');
    txtb = document.querySelector('#value_b');
    txtc = document.querySelector('#value_c');
    
    let c;

    c = (parseFloat(txtb.value) * parseFloat(txta.value)) / 2;

    txtc.value = c;

});